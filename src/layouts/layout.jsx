import { Outlet } from "react-router-dom";
import Navbar from "../components/Uitily/Navbar";
import Footer from "../components/Uitily/footer/Footer";
import { useUserContext } from "../context/UserContext";
import NavbarLogin from "../components/Uitily/NavBarLogin";
import { useSelector } from "react-redux";


export default function Layout(){
  const {authenticated} = useUserContext();
  console.log(authenticated);
  const darkMode = useSelector((state) => state.theme.darkMode);
  return <div style={{ backgroundColor: darkMode ? '#121212' : '#ffffff', color: darkMode ? '#ffffff' : '#000000' }}>
  {
    authenticated === true?(
        <NavbarLogin/>
    ):(
        <Navbar />
    )
  }

  <main>
    <Outlet/>
  </main>
  <Footer />
  </div>
}