import React, { useContext } from 'react'
import "./home.css";
import Header from '../../components/Home/header/Header';
import Featured from '../../components/Home/featured/featured';
import PropertyList from '../../components/Home/propertyList/propertyList';
import FeaturedProperties from '../../components/Home/featuredProperties/FeaturedProperties';
import MailList from '../../components/Uitily/mailList/MailList';
import { useUserContext } from '../../context/UserContext';
import NavbarLogin from '../../components/Uitily/NavBarLogin';
import Navbar from '../../components/Uitily/Navbar';

// import { UserStateContext } from '../../context/UserContext';


const HomePage = () => {
  const {authenticated} = useUserContext();
  console.log(authenticated);
  return (
    <>
    {/* {
    authenticated === true?(
        <NavbarLogin/>
    ):( */}
        {/* <Navbar /> */}
    {/* )
  } */}
  <Header/>
      <div  className="homeContainer  mx-auto mt-5">

        <Featured className="mt-5"/>
        <h1 className="homeTitle">Browse by room type</h1>
        <PropertyList />
        <h1 className="homeTitle">Romes guests love</h1>
        <FeaturedProperties/>
      </div>
      <MailList/>


      {/* <br /><br /><br />{context.user.name}      <br /><br /><br /> */}
    </>
  )
}

export default HomePage ; 