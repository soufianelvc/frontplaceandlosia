

import { useEffect, useState } from 'react';
import './profileclientt.css'; // Import the CSS styles
import { useUserContext } from '../../../context/UserContext';
import { axiosClient } from '../../../redux/axios';

function ProfileClient() {
  
  const { user } = useUserContext();
  const [firstName, setFirstName] = useState(user.name);
  const [surname, setSurname] = useState(user.name2 || '');
  const [phoneNumber, setPhoneNumber] = useState(user.phoneNumber);
  const [address1, setAddress1] = useState(user.address1);
  const [postcode, setPostcode] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [email, setEmail] = useState(user.email);
  const [image, setImage] = useState(null);

  useEffect(() => {
    setFirstName(user.name);
    setSurname(user.name2 || '');
    setPhoneNumber(user.phoneNumber);
    setAddress1(user.address1);
    setEmail(user.email);
  }, [user]);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async () => {
    if (pwd && pwd !== confirmPwd) {
      alert('Passwords do not match!');
      return;
    }

    const formData = new FormData();
    formData.append('name', firstName);
    formData.append('name2', surname);
    formData.append('email', email);
    formData.append('phoneNumber', phoneNumber);
    formData.append('address1', address1);
    if (pwd) {
      formData.append('password', pwd);
    }
    if (image) {
      formData.append('image', image);
    }

    try {
      await axiosClient.get('/sanctum/csrf-cookie');
      const response = await axiosClient.post(`http://placeandalosia.free.nf/api/users/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Profile updated successfully');
      console.log(user);
      // Update local state with the response data
      const updatedUser = response.data.user;
      console.log(updatedUser.name);
      setFirstName(updatedUser.name);
      setSurname(updatedUser.name2 || '');
      setPhoneNumber(updatedUser.phoneNumber);
      setAddress1(updatedUser.address1);
      setEmail(updatedUser.email);
      if (updatedUser.image) {
        setImage(updatedUser.image); 
      }
      setPwd('')
      setConfirmPwd('')
      setPostcode('')

      console.log(response.data);
    } catch (error) {
      console.error(error);
      alert('An error occurred while updating the profile');
    }
  };

  return (
    <div className="container rounded mb-5 border clientotleCom" style={{width:"96%"}}>
      <div className="row">
        <div className="col-md-3 border-right">
          <div className="d-flex flex-column align-items-center text-center p-3 py-5 ">
            <img
              className="rounded-circle mt-5"
              width="150px"
              src={`http://placeandalosia.free.nf/images/${user.image}`}
              alt="Profile"
            />
            <span className="font-weight-bold">{user.name}</span>
            <span className="text-black-50">{user.email}</span>
          </div>
        </div>
        <div className="col-md-8 border-right mx-auto">
          <div className="p-3 py-5">
            <div className="d-flex justify-content-between align-items-center mb-3">
              <h4 className="text-right">Profile Hotel Settings</h4>
            </div>
            <div className="row mt-2">
              <div className="col-md-6">
                <label className="labels">Name</label>
                <input
                  type="text"
                  className="form-controlc"
                  placeholder="First name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div className="col-md-6">
                <label className="labels">Surname</label>
                <input
                  type="text"
                  className="form-controlc"
                  value={surname}
                  placeholder="Surname"
                  onChange={(e) => setSurname(e.target.value)}
                />
              </div>
            </div>
            <div className="row mt-3">
              <div className="col-md-12">
                <label className="labels">Mobile Number</label>
                <input
                  type="text"
                  className="form-controlc"
                  placeholder="Enter phone number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Address Line 1</label>
                <input
                  type="text"
                  className="form-controlc"
                  placeholder="Enter address line 1"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Current Password</label>
                <input
                  type="password"
                  className="form-controlc"
                  placeholder="Enter your password"
                  value={postcode}
                  onChange={(e) => setPostcode(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">New Password</label>
                <input
                  type="password"
                  className="form-controlc"
                  placeholder="Enter new password"
                  value={pwd}
                  onChange={(e) => setPwd(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Repeat Password</label>
                <input
                  type="password"
                  className="form-controlc"
                  placeholder="Repeat password"
                  value={confirmPwd}
                  onChange={(e) => setConfirmPwd(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Email</label>
                <input
                  type="text"
                  className="form-controlc"
                  placeholder="Email@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="col-md-12">
                <label className="labels">Profile Image</label>
                <input type="file" className="form-controlc" style={{border:"none"}} onChange={handleImageChange} />
              </div>
            </div>
            <div className="mt-5 text-center">
              <button
                className="btn profile-button"
                type="button"
                style={{ background: '#2d16ffaf', color: 'white' }}
                onClick={handleSubmit}
              >
                <b>Save Profile</b>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileClient;
