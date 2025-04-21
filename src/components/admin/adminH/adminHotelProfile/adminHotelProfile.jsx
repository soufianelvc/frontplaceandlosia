// import { useEffect, useState } from 'react';
// import { axiosClient } from '../../../../redux/axios';
// import { useNavigate } from 'react-router-dom';
// import { useUserContext } from '../../../../context/UserContext';
// import './adminHotelProfilee.css'; // Import the CSS styles
// import defaultImg from '../../../../images/avatar.png';
// import editer from '../../../../../public/image/editer.png';

// const ProfileHotel = () => {
//   const { user } = useUserContext();
//   const navigate = useNavigate();
//   const [password, setPassword] = useState('');
//   const [passwordConfirmation, setPasswordConfirmation] = useState('');
//   const [profileImage, setProfileImage] = useState(`http://localhost:8000/images/${user.image || defaultImg}`);
//   const [selectedFile, setSelectedFile] = useState(null);

//   useEffect(() => {
//     setProfileImage(`http://localhost:8000/images/${user.image || defaultImg}`);
//   }, [user]);

//   const handleImageChange = (e) => {
//     if (e.target.files && e.target.files[0]) {
//       setProfileImage(URL.createObjectURL(e.target.files[0]));
//       setSelectedFile(e.target.files[0]);
//     }
//   };

//   const handleUpdate = async (e) => {
//     e.preventDefault();

//     try {
//       const formData = new FormData();
//       if (password) {
//         formData.append('password', password);
//         formData.append('password_confirmation', passwordConfirmation);
//       }
//       if (selectedFile) {
//         formData.append('image', selectedFile);
//       }

//       await axiosClient.post(`http://localhost:8000/api/hotelchefs/${user.id}`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });

//       alert('Profile updated successfully');
//       navigate('/admin_room_dashbord');
//         setPassword('');
//         setPasswordConfirmation('');
//     } catch (error) {
//       if (error.response && error.response.data && error.response.data.errors) {
//         const errors = error.response.data.errors;
//         let errorMessage = '';
//         for (let key in errors) {
//           if (errors.hasOwnProperty(key)) {
//             errorMessage += `${errors[key]}\n`;
//           }
//         }
//         alert(errorMessage);
//       } else {
//         console.error('Update failed:', error);
//         alert('An error occurred while updating the profile.');
//       }
//     }
//   };

//   return (
//     <div className="container rounded border profileHotleCom">
//       <div className="row">
//         <div className="col-md-3 border-right">
//           <div className="d-flex flex-column align-items-center text-center p-3 py-5">
//             <label htmlFor="upload-photo" style={{ display: "block", cursor: "pointer" }}>
//               <img src={profileImage} alt="Profile" className="border rounded-circle mt-5" width="100px" height="100px" />
//               <img src={editer} alt="Edit" style={{ width: "15px", marginTop: "-95%", marginLeft: "60%", backgroundColor: 'rgba(255, 255, 0, 0.63)', padding: '1px' }} />
//               <br /><span className="font-weight-bold">{user.name}</span><br />
//               <span className="text-black-50">{user.email}</span>
//             </label>
//             <input type="file" className="d-none" onChange={handleImageChange} id="upload-photo" />
//           </div>
//         </div>
//         <div className="col-md-8 border-right mx-auto">
//           <div className="p-3 py-5">
//             <h4 className="text-right">Update Profile</h4>
//             <form onSubmit={handleUpdate} encType="multipart/form-data">
//               <div className="row mt-2">
//                 <div className="col-md-12">
//                   <label className="labels">New Password</label>
//                   <input type="password" className="form-control" placeholder="New password" value={password} onChange={e => setPassword(e.target.value)} />
//                 </div>
//                 <div className="col-md-12">
//                   <label className="labels">Confirm Password</label>
//                   <input type="password" className="form-control" placeholder="Confirm password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
//                 </div>
//               </div>
//               <div className="mt-5 text-center">
//                 <button className="btn profile-button" type="submit" style={{ background: "#a026b6", color: "white" }}>
//                   <b>Save Profile</b>
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProfileHotel;


import { useEffect, useState } from 'react';
import { axiosClient } from '../../../../redux/axios';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../../../../context/UserContext';
import './adminHotelProfilee.css'; // Import the CSS styles
import defaultImg from '../../../../images/avatar.png';
import editer from '../../../../../public/image/editer.png';

const ProfileHotel = () => {
  const { user } = useUserContext();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [profileImage, setProfileImage] = useState(`http://localhost:8000/images/${user.image || defaultImg}`);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    setProfileImage(`http://localhost:8000/images/${user.image || defaultImg}`);
  }, [user]);

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setProfileImage(URL.createObjectURL(e.target.files[0]));
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      if (password) {
        formData.append('password', password);
        formData.append('password_confirmation', passwordConfirmation);
      }
      if (selectedFile) {
        formData.append('image', selectedFile);
      }

      await axiosClient.post(`http://localhost:8000/api/hotelchefs/${user.id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      alert('Profile updated successfully');
      navigate('/admin_room_dashbord');
      setPassword('');
      setPasswordConfirmation('');
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const errors = error.response.data.errors;
        let errorMessage = '';
        for (let key in errors) {
          if (errors.hasOwnProperty(key)) {
            errorMessage += `${errors[key]}\n`;
          }
        }
        alert(errorMessage);
      } else {
        console.error('Update failed:', error);
        alert('An error occurred while updating the profile.');
      }
    }
  };

  return (
    <div className="profileHotelContainer ">
      <div className="profileImageSection">
        <label htmlFor="upload-photo" className="profileImageLabel">
          <img src={profileImage} alt="Profile" className="profileImage" />
          <img src={editer} alt="Edit" className="editIcon" />
          <span className="profileName">{user.name}</span>
          <span className="profileEmail">{user.email}</span>
        </label>
        <input type="file" className="fileInput" onChange={handleImageChange} id="upload-photo" />
      </div>
      <div className="profileUpdateSection">
        <h4 className="updateTitle">Update Profile</h4>
        <form onSubmit={handleUpdate} encType="multipart/form-data">
          <div className="formGroup">
            <label className="formLabel">New Password</label>
            <input type="password" className="formControl" placeholder="New password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <div className="formGroup">
            <label className="formLabel">Confirm Password</label>
            <input type="password" className="formControl" placeholder="Confirm password" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
          </div>
          <div className="formActions">
            <button className="saveButton" type="submit">
              <b>Save Profile</b>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileHotel;
