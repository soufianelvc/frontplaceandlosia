
// import {  RouterProvider } from 'react-router-dom';
// import './App.css';

// import { router } from './router';
// import UserContext from './context/UserContext';
// import { useUserContext } from "./context/UserContext";
// import { ClientApi } from './service/Api/Client/ClientApi';
// import { useEffect } from 'react';

// function App() {
//   const {logout } = useUserContext();

// useEffect(() => {
//   console.log("Page has been refreshed and loaded!");
//   ClientApi.logout().then(() => {
//     logout();
//   });
// }, []); 
//   return (
//     <>
//     <UserContext>
//         <RouterProvider router={router} />
//     </UserContext>
    
//     </>
//   );
// }

// export default App;
// src/App.js
import  { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import './App.css';
import { router } from './router';
import UserContext from './context/UserContext';
import { useUserContext } from "./context/UserContext";
import { ClientApi } from './service/Api/Client/ClientApi';

function App() {
  const { logout } = useUserContext();
  const darkMode = useSelector((state) => state.theme.darkMode);

  useEffect(() => {
    console.log("Page has been refreshed and loaded!");
    ClientApi.logout().then(() => {
      logout();
    });
  }, [logout]);



  return (
    <UserContext>
      <div style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
        <div className='mt-5'></div>
        <RouterProvider router={router} />
      </div>
    </UserContext>
  );
}

export default App;
