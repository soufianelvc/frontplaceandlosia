import  { useEffect, useState } from 'react';
import "./registerPage.css";
import avatar from '../../images/avatar.png'
import { axiosClient } from '../../redux/axios';
import {Link} from 'react-router-dom' ; 
import { useSelector } from 'react-redux';
const Register = () => {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [img , setImage] = useState(avatar);
  const [address1, setaddress1] = useState('');
  const [image, setSelectedFile] = useState(null); 

  const handleImageChange = (e) => {
    if (event.target.files && event.target.files[0]) {
      setImage(URL.createObjectURL(event.target.files[0]))
      setSelectedFile(event.target.files[0])
  }
  };

  const handleRegister = async (e) => {
    e.preventDefault(); 
  
    console.log('Attempting to register:', name, email, password, image); 
  
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('name2', name2);
      formData.append('email', email);
      formData.append('password', password); 
      formData.append('phoneNumber', phoneNumber); 
      formData.append('address1', address1); 
      formData.append('image', image); 

      await axiosClient.get('/sanctum/csrf-cookie');
      const res =  await axiosClient.post("http://placeandalosia.free.nf/api/users", formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    })
        console.log(res)
        alert('ok');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };
  const [theme,setTheme]= useState('bg-light');
  const darkMode = useSelector((state) => state.theme.darkMode)
  useEffect(() => {
    if (darkMode==true) {
      setTheme('bg-black')
    }
    else{
      setTheme('bg-light')
    }
  }, [darkMode]);

  return (
    <div  style={{ backgroundColor: theme === 'bg-light' ? ' #d6d6d683' : 'black' }}>
    <div style={{ minHeight: "680px" }} className="container">
      <div className="row py-5 d-flex justify-content-center hieght-searchh">
        <div  >
          <form onSubmit={handleRegister} encType="multipart/form-data"  className=" sm-12 col d-flex flex-column ">            
          <label className="mx-auto title-loginn"> Register a new account </label>

          <input
            placeholder="Name..."
            type="text"
            className="user-inputt mt-3 text-center mx-auto"
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            placeholder="Name2..."
            type="text"
            name="name2"
            className="user-inputt mt-3 text-center mx-auto"
            onChange={(e) => setName2(e.target.value)}
            
          />
          <input
            placeholder="Email..."
            type="email"
            name="email"
            className="user-inputt mt-3 text-center mx-auto"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password..."
            type="password"
            name="password"
            className="user-inputt mt-3  text-center mx-auto"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            placeholder="Phone Number..."
            type="tel"
            name="phoneNumber"
            className="user-inputt mt-3  text-center mx-auto"
            onChange={(e) => setphoneNumber(e.target.value)}
          />
          <input
            placeholder="Address..."
            type="text"
            name="address1"
            className="user-inputt  mt-3 text-center mx-auto"
            onChange={(e) => setaddress1(e.target.value)}
          />

                  <div  className='mx-auto mt-3'>
                        <label htmlFor="upload-photo" >
                            <img src={img} alt="fzx" height="100px" width="120px" style={{ cursor: "pointer" }}
                            />
                        </label>
                        <input type="file"  name="image"
                          onChange={handleImageChange} 
                         id='upload-photo'className='d-none' />
                  </div>

        <button type="submit" className="btn-loginn mx-auto mt-4"> Account registration </button>
        </form>
          <label className="mx-auto my-4">
          Already have an account?{" "}
            <Link to="/login" style={{ textDecoration: "none" }}>
              <span style={{ cursor: "pointer",color : "purple" }} >
                 Click here
              </span>
            </Link>
          </label>
        </div>
      </div>
    </div>
  </div>
  );
}

export default Register;
