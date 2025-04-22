
import { useState } from 'react';
import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';
import { axiosClient } from '../../../redux/axios';
import avatar from '../../../images/avatar.png';
import './AdminHotelAddCientPage.css';

const AdminHotelAddCientPage = () => {
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [img, setImage] = useState(avatar);
  const [address1, setaddress1] = useState('');
  const [image, setSelectedFile] = useState(null); 
  console.log(image);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
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
    });
        console.log(res);
        alert('ok');
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  return (
    <div className='containerr_addc'>
      <div className='dashboard-content_addc'>
        <div className='sidebarAH_addc'>
          <AdminHotelSideBar />
        </div>
        <div className='main-content_addc'>
          <div className='form-container'>
            <form onSubmit={handleRegister} encType="multipart/form-data" className="form-content">
              <label className="title">Add a new client</label>
              <input
                placeholder="Name..."
                type="text"
                className="input-field"
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                placeholder="Name2..."
                type="text"
                name="name2"
                className="input-field"
                onChange={(e) => setName2(e.target.value)}
              />
              <input
                placeholder="Email..."
                type="email"
                name="email"
                className="input-field"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder="Password..."
                type="password"
                name="password"
                className="input-field"
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                placeholder="Phone Number..."
                type="tel"
                name="phoneNumber"
                className="input-field"
                onChange={(e) => setphoneNumber(e.target.value)}
              />
              <input
                placeholder="Address..."
                type="text"
                name="address1"
                className="input-field"
                onChange={(e) => setaddress1(e.target.value)}
              />

              <div className='image-upload'>
                <label htmlFor="upload-photo">
                  <img src={img} alt="avatar" className='avatar' />
                </label>
                <input type="file" name="image" onChange={handleImageChange} id='upload-photo' className='d-none' />
              </div>

              <button type="submit" className="btn-submit">Add Account</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminHotelAddCientPage;
