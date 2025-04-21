import { useState, useEffect } from 'react';
import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';
import { axiosClient } from '../../../redux/axios';
import avatar from '../../../images/avatar.png';
import { useLocation, useNavigate } from 'react-router-dom';
import editer from "../../../../public/image/editer.png"

const AdminHotelUpdateClientPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { client } = location.state;
  const [clientId, setId] = useState(client.id);
  const [name, setName] = useState('');
  const [name2, setName2] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [img, setImage] = useState(avatar);
  const [address1, setAddress1] = useState('');
  const [image, setSelectedFile] = useState(null);

  useEffect(() => {
    const fetchClientData = async () => {
      try {
        const res = await axiosClient.get(`http://localhost:8000/api/users/${clientId}`);
        const client = res.data.user;
        setName(client.name);
        setName2(client.name2);
        setEmail(client.email);
        setPhoneNumber(client.phoneNumber);
        setAddress1(client.address1);
        setImage(client.image ? `http://localhost:8000/images/${client.image}` : avatar);

      } catch (error) {
        console.error('Failed to fetch client data:', error);
      }
    };

    fetchClientData();
  }, [clientId]);
        console.log(image)
  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
      console.log(image)
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
  
    console.log('Attempting to update:', name, email, password, image);

    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('name2', name2);
      formData.append('email', email);
      formData.append('password', password);
      formData.append('phoneNumber', phoneNumber);
      formData.append('address1', address1);
      if (image !== avatar  && image!== null) {
    
        formData.append('image', image);
      }
      await axiosClient.get('/sanctum/csrf-cookie');
      const res = await axiosClient.post(`http://localhost:8000/api/users/${clientId}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(res);
      alert('Client updated successfully');
      navigate('/management_rooms');
    } catch (error) {
      console.error('Update failed:', error);
    }
  };

  return (
    <div className='containerr_addc'>
      <div className='dashboard-content_addc'>
        <div className='sidebarAH_addc'>
          <AdminHotelSideBar />
        </div>
        <div className='main-content_addc'>
          <div style={{ backgroundColor: "#d6d6d683" }}>
            <div style={{ minHeight: "680px" }} className="container">
              <div className="row py-5 d-flex justify-content-center hieght-search">
                <div>
                  <form onSubmit={handleUpdate} encType="multipart/form-data" className="sm-12 col d-flex flex-column">
                    <label className="mx-auto title-login">Update Client Information</label>

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

                <div className='mx-auto mt-3 border border-danger' style={{ position: "relative", width: "120px" }}>
                  <label htmlFor="upload-photo" style={{ display: "block", cursor: "pointer" }}>
                    <img src={img} alt="fzx" height="100px" width="120px" />
                    <img src={editer} alt="edit" style={{ position: "absolute", top: "0", left: "0", width: "15px" ,marginTop:"60%",marginLeft:"80%"}} />
                  </label>
                  <input type="file" name="image" onChange={handleImageChange} id='upload-photo' className='d-none' />
                </div>


                    <button type="submit" className="btn-login mx-auto mt-4">Update Account</button>

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

export default AdminHotelUpdateClientPage;
