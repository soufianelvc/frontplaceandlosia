import { Outlet, useNavigate } from "react-router-dom";
import Navbar from "../components/Uitily/Navbar";
import Footer from "../components/Uitily/footer/Footer";
import { useEffect } from "react";
import { useUserContext } from "../context/UserContext";
import NavbarLogin from "../components/Uitily/NavBarLogin";

export default function GuestLayout(){
  const nagigate = useNavigate();
  const context = useUserContext()
  useEffect(() => {
    if(context.authenticated){
      nagigate('/client_dashbord');
    }
  }, []);
  const {authenticated} = useUserContext();
  console.log(authenticated);
  return <>
  {/* {
    authenticated === true?(
        <NavbarLogin/>
    ):( */}
        <Navbar />
    {/* )
  } */}
  <main>
    <Outlet/>
  </main>
  <Footer />
  </>
}