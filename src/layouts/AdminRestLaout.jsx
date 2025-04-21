import { Outlet, useNavigate } from "react-router-dom";
import Footer from "../components/Uitily/footer/Footer";
import { useEffect, useState } from "react";
import { useUserContext } from "../context/UserContext";
import { ClientApi } from "../service/Api/Client/ClientApi";
import NavbarLogin from "../components/Uitily/NavBarLogin";


export default function AdminRestLaout(){
  const navigate = useNavigate();
  const {setUser,setAuthenticated,logout,authenticated} = useUserContext();
  const [isloading, setIsLoading] = useState(false);

useEffect(() => {
  if(authenticated=== true){
    setIsLoading(false)
    ClientApi.getUser()

    .then(
      ({data})=>{
        setUser(data);
        setAuthenticated(true)
      }
    ).catch(()=>{
      logout()
      navigate('/login');
    
    })
  }
  else{
    navigate('/login');
  }

}, []);

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