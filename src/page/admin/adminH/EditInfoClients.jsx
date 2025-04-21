// import { useState, useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import { axiosClient } from '../../../redux/axios';
// import AdminHotelSideBar from '../../../components/admin/adminH/AdminHotelSideBar';

// const EditInfoClients = () => {
//   const location = useLocation();
//   const { client } = location.state;
//   const [name, setName] = useState(client.name);
//   const [name2, setName2] = useState(client.name2);
//   const [email, setEmail] = useState(client.email);
//   const [address1, setAddress1] = useState(client.address1);
//   const [image, setImage] = useState(client.image);
//   const [phoneNumber, setPhoneNumber] = useState(client.phoneNumber);
//   const [password, setPassword] = useState();

//   const [idC, setIdc] = useState(client.id);



//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setUser({
//   //     ...user,
//   //     [name]: value
//   //   });
//   // };

//   // const handleFileChange = (e) => {
//   //   setUser({
//   //     ...user,
//   //     image: e.target.files[0]
//   //   });
//   // };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('id', idC);
//     formData.append('name', name);
//     formData.append('name2', name2);
//     formData.append('email', email);
//     formData.append('password', password);
//     formData.append('phoneNumber', phoneNumber);
//     formData.append('address1', address1);
//     // if (user.image) {
//     //   formData.append('image', user.image);
//     // }
//     await axiosClient.get('/sanctum/csrf-cookie');
//     await axiosClient.put(`http://localhost:8000/api/users/${idC}`, formData
//     //   , {
//     //   headers: {
//     //     'Content-Type': 'multipart/form-data'
//     //   }
//     // }
//   )
//       .then(response => {

//         console.log(response);
//       })
//       .catch(error => {

//         console.log(error);
//       });
//   };

//   return (
//     <div className='container'>
//       <div className='py-3 row'>
//         <div className='col-md-2 col-3'>
//           <AdminHotelSideBar />
//         </div>
//         <div className='col-md-10 col-9'>
//           <div style={{ backgroundColor: "#d6d6d683" }}>
//             <div style={{ minHeight: "680px" }} className="container">
//               <div className="row py-5 d-flex justify-content-center hieght-search">
//                 <div>
//                   <form  
//                   // encType="multipart/form-data" 
//                   className="sm-12 col d-flex flex-column">
//                     <label className="mx-auto title-login">Edit Client</label>
//                     <input
//                       placeholder="Name..."
//                       type="text"
//                       className="user-input mt-3 text-center mx-auto"
//                       name="name"
//                       value={name}
//                       onChange={(e) => setName(e.target.value)}
//                     />
//                     <input
//                       placeholder="Name2..."
//                       type="text"
//                       name="name2"
//                       className="user-input mt-3 text-center mx-auto"
//                       value={name2}
//                       onChange={(e) => setName2(e.target.value)}
//                     />
//                     <input
//                       placeholder="Email..."
//                       type="email"
//                       name="email"
//                       className="user-input mt-3 text-center mx-auto"
//                       value={email}
//                       onChange={(e) => setEmail(e.target.value)}
//                     />
//                     <input
//                       placeholder="Password..."
//                       type="password"
//                       name="password"
//                       className="user-input mt-3 text-center mx-auto"
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <input
//                       placeholder="Phone Number..."
//                       type="tel"
//                       name="phoneNumber"
//                       className="user-input mt-3 text-center mx-auto"
//                       value={phoneNumber}
//                       onChange={(e) => setPhoneNumber(e.target.value)}
//                     />
//                     <input
//                       placeholder="Address..."
//                       type="text"
//                       name="address1"
//                       className="user-input mt-3 text-center mx-auto"
//                       value={address1}
//                       onChange={(e) => setAddress1(e.target.value)}
//                     />
//                     <div className='mx-auto mt-3'>
//                       <label htmlFor="upload-photo">
//                         <img src={`http://localhost:8000/images/${image}`} 
//                         alt="Upload" height="100px" width="120px" style={{ cursor: "pointer" }} />
//                       </label>
//                       <input
//                         type="file"
//                         name="image"
//                         id='upload-photo'
//                         className='d-none'
//                         // onChange={handleImageChange}
//                       />
//                     </div>
//                     <button  className="btn-login mx-auto mt-4" onClick={handleSubmit}>Update Accountt</button>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EditInfoClients;

//-------------------------------------------------------------------------------------



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
//   const handleRegister = async (e) => {
//     e.preventDefault();
//     try {
//         await axiosClient.get('/sanctum/csrf-cookie');

//         // إنشاء URL parameters
//         const params = new URLSearchParams({
//             id: idC,
//             name: name,
//             name2: name2,
//             email: email,
//             password: password,
//             phoneNumber: phoneNumber,
//             address1: address1
//         });

//         const res = await axiosClient.put(`http://localhost:8000/api/users/${idC}?${params.toString()}`);
//         console.log(res);
//         alert('ok');
//     } catch (error) {
//         console.error('Registration failed:', error);
//     }
// };


// const handleRegister = async (e) => {
//   e.preventDefault();
//   try {
//       await axiosClient.get('/sanctum/csrf-cookie');

//       // قراءة الصورة كـ Base64
//       const reader = new FileReader();
//       reader.onloadend = async () => {
//           const base64Image = reader.result.split(',')[1]; // إزالة الجزء الأول من Base64 URI

//           // إنشاء URL parameters
//           const params = new URLSearchParams({
//               id: idC,
//               name: name,
//               name2: name2,
//               email: email,
//               password: password,
//               phoneNumber: phoneNumber,
//               address1: address1,
//               image: base64Image // إضافة الصورة المشفرة
//           });

//           const res = await axiosClient.put(`http://localhost:8000/api/users/${idC}?${params.toString()}`);
//           console.log(res);
//           alert('ok');
//       };
//       reader.readAsDataURL(image); // قراءة الصورة كـ Base64
//   } catch (error) {
//       console.error('Registration failed:', error);
//   }
// };



// const handleImageChange = (e) => {
//   setImage(e.target.files[0]);
// };
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
            // src={`http://localhost:8000/images/${image}`} 
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
