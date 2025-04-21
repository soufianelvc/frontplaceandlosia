// import { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// // import axios from 'axios';
// import "./loginPage.css";
// import { axiosClient } from '../../redux/axios';
// import { useUserContext } from '../../context/UserContext';
// import { MdAutorenew } from 'react-icons/md';
// const LoginPage = () => {
//   const navigate = useNavigate();
//   const [email, setEmail] = useState('soufianeerouki@gmail.com');
//   const [password, setPassword] = useState('123456789');
//   const {login,setAuthenticated} = useUserContext();
//   const [loading, setLoading] = useState(false);
//   // const navigate = useNavigate();
//   const handleLogin =  async() => {
//     setLoading(true);
//     await login(email,password).then(
//       (data)=>{
//         if(data.status===200){
//           // window.localStorage.setItem('ACCESS_TOKEN','test');
//           setAuthenticated(true);
//           // const {role} = data.user.role ;
//           console.log(data.data.user.role);
//           switch (data.data.user.role) {
//             case "user":
//                       navigate('/client_dashbord');
//               break;
//             case "adminH":
//                 navigate('/admin_room_dashbord');
//               break;
//             case "adminR":
//                 navigate('/admin_Restaurant');
//                 break;

//           }

//         }
//       }
//     )    .catch((error) => {
//       // You can handle the error by logging it or displaying a message to the user
//       console.error('Logout failed:', error);
//       alert('Failed to login. Please try again.');
//     }).finally(() => {
//       setLoading(false); 
//     });
//     console.log(email,password);
//   };

//   return (
//     <div style={{ minHeight: "670px",marginTop:"90px",backgroundColor:"#d6d6d683" }}>
//       <div className='container' style={{ minHeight: "680px" }}>
//         <div className=" row py-5 d-flex justify-content-center ">
//           <div className="col d-flex flex-column sm-12">
//             <label className="mx-auto title-login">Sign In</label>
//             <input
//               placeholder="Email..."
//               type="email"
//               className="user-input my-3 text-center mx-auto"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               placeholder="Password..."
//               type="password"
//               className="user-input text-center mx-auto"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <button className="btn-login mx-auto mt-4" onClick={handleLogin}>
//               {loading ? <><MdAutorenew className="icon-spin" />wait </> : "Sign In"}
//             </button>
//             <label className="mx-auto my-4">
//               Don't have an account?{" "}
//               <Link to="/register" style={{ textDecoration: 'none' }}>
//                 <span style={{ cursor: "pointer", color: "purple"}}>Click here</span>
//               </Link>
//             </label>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default LoginPage;

import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import axios from 'axios';
import "./loginPage.css";
import { axiosClient } from '../../redux/axios';
import { useUserContext } from '../../context/UserContext';
import { MdAutorenew } from 'react-icons/md';
import { useSelector } from 'react-redux';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('soufianeerouki@gmail.com');
  const [password, setPassword] = useState('123456789');
  const { login, setAuthenticated } = useUserContext();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);
    await login(email, password).then(
      (data) => {
        if (data.status === 200) {
          setAuthenticated(true);
          switch (data.data.user.role) {
            case "user":
              navigate('/client_dashbord');
              break;
            case "adminH":
              navigate('/admin_room_dashbord');
              break;
            case "adminR":
              navigate('/admin_Restaurant');
              break;
            default:
              break;
          }
        }
      }
    ).catch((error) => {
      console.error('Login failed:', error);
      alert('Failed to login. Please try again.');
    }).finally(() => {
      setLoading(false);
    });
    console.log(email, password);
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
    <div className="login-page-container" style={{ backgroundColor: theme === 'bg-light' ? ' #d6d6d683' : 'black' }} >
      <div className="login-form-container">
        <div className="login-form">
          <label className="title-login">Sign In</label>
          <input
            placeholder="Email..."
            type="email"
            className="user-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password..."
            type="password"
            className="user-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="btn-login" onClick={handleLogin}>
            {loading ? <><MdAutorenew className="icon-spin" />wait </> : "Sign In"}
          </button>
          <label className="register-label">
            Don't have an account?{" "}
            <Link to="/register" className="register-link">
              Click here
            </Link>
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
