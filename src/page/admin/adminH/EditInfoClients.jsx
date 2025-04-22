

import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { axiosClient } from '../../../redux/axios';
import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';
import avatar from '../../../images/avatar.png'
import { updateUser } from '../../../redux/reducers/UsersSlice';
import { useDispatch } from 'react-redux';
const EditInfoClients = () => {
  // const avatar = "avatar.png";
  const location = useLocation();
  const { client } = location.state;
  const [name, setName] = useState(client.name);
  const [name2, setName2] = useState(client.name2);
  const [email, setEmail] = useState(client.email);
  const [address1, setAddress1] = useState(client.address1);
  const [image, setImage] = useState(null);
  console.log(image)
  const [phoneNumber, setPhoneNumber] = useState(client.phoneNumber);
  const [password, setPassword] = useState('');

  const [idC, setIdc] = useState(client.id);
  const [img , setimg] = useState(avatar);
const dispatch = useDispatch();
const handleRegister = (e) => {
  e.preventDefault();

  const userData = {
    name,
    name2,
    email,
    address1,
    phoneNumber,
    password,
    image,
  };

  dispatch(updateUser({ id: idC, userData }));
};
const handleImageChange = (e) => {
  if (event.target.files && event.target.files[0]) {
    setimg(URL.createObjectURL(event.target.files[0]))
    setImage(event.target.files[0])
}
};

  return (
    <div className='container'>
      <div className='py-3 row'>
        <div className='col-md-2 col-3'>
          <AdminHotelSideBar />
        </div>
        <div className='col-md-10 col-9'>
          <div style={{ backgroundColor: "#d6d6d683" }}>
            <div style={{ minHeight: "680px" }} className="container">
              <div className="row py-5 d-flex justify-content-center hieght-search">
                <div>
                <form className="sm-12 col d-flex flex-column" onSubmit={handleRegister}>
    <label className="mx-auto title-login">Edit Client</label>
    <input
        placeholder="Name..."
        type="text"
        className="user-input mt-3 text-center mx-auto"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
    />
    <input
        placeholder="Name2..."
        type="text"
        name="name2"
        className="user-input mt-3 text-center mx-auto"
        value={name2}
        onChange={(e) => setName2(e.target.value)}
    />
    <input
        placeholder="Email..."
        type="email"
        name="email"
        className="user-input mt-3 text-center mx-auto"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    />
    <input
        placeholder="Password..."
        type="password"
        name="password"
        className="user-input mt-3 text-center mx-auto"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    />
    <input
        placeholder="Phone Number..."
        type="tel"
        name="phoneNumber"
        className="user-input mt-3 text-center mx-auto"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
    />
    <input
        placeholder="Address..."
        type="text"
        name="address1"
        className="user-input mt-3 text-center mx-auto"
        value={address1}
        onChange={(e) => setAddress1(e.target.value)}
    />
    <div className='mx-auto mt-3'>
        <label htmlFor="upload-photo">
            <img 
            // src={`http://placeandalosia.free.nf/images/${image}`} 
            src={img}
            alt="Upload" height="100px" width="120px" style={{ cursor: "pointer" }} />
        </label>
        <input
            type="file"
            name="image"
            id='upload-photo'
            className='d-none'
            onChange={handleImageChange}
        />
    </div>
    <button type="submit" className="btn-login mx-auto mt-4" >Update Account</button>
</form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditInfoClients;
