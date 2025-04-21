import { Outlet, useNavigate } from "react-router-dom";
// import Navbar from "../../components/Uitily/Navbar";
import Footer from "../components/Uitily/footer/Footer";
import { useEffect, useState } from "react";
import { axiosClient } from "../redux/axios";
import { useUserContext } from "../context/UserContext";
import { ClientApi } from "../service/Api/Client/ClientApi";
import NavbarLogin from "../components/Uitily/NavBarLogin";


export default function ClientLayout(){
  const navigate = useNavigate();
  const {setUser,setAuthenticated,logout,authenticated} = useUserContext();
  const [isloading, setIsLoading] = useState(false);
  // const [user, setUser] = useState({});
  // const context = useUserContext()
useEffect(() => {
  if(authenticated=== true){
    setIsLoading(false)
    ClientApi.getUser()
    // console.log(context);
    // if(!context.authenticated){
    //   //navigate('/login');
    // }
    // axiosClient.get('/api/user')
    .then(
      ({data})=>{
        setUser(data);
        setAuthenticated(true)
      }
    ).catch((reason)=>{
      logout()
      navigate('/login');
    
    })
  }
  else{
    navigate('/login');
  }

}, []);
// useEffect(() => {
//   if(!authenticated){

//   }
// }, [authenticated]);
if(isloading){
  return <>loading</>
}
  return <>
  <NavbarLogin />
  <main>
    <Outlet/>
  </main>
  <Footer />
  </>
}