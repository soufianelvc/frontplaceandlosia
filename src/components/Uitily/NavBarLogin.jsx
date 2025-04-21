import  { useEffect, useState } from "react";

import "./Navbar.css";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../images/logo.png";
import logoOpen from "../../images/logoOpen.png";
import logoDark from  "../../images/logoDark.png";
import logoOpenDark from "../../images/logoOpenDark.png"
// import login from "../../images/login-16.ico";
import support from "../../images/online-support-16.ico";
import moon from "../../images/moon-4-16.ico";
import { ClientApi } from "../../service/Api/Client/ClientApi";
import { useUserContext } from "../../context/UserContext";
import { MdDashboard, MdExitToApp } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/reducers/ThemeSlice";
 const NavbarLogin = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentLogo, setCurrentLogo] = useState(logo);
  const [text, setText] = useState("placeAndalusia");
  const [theme,setTheme]= useState('bg-light');
  const navigate = useNavigate();
  const darkMode = useSelector((state) => state.theme.darkMode)
  useEffect(() => {
    if (darkMode==true) {
      setTheme('bg-black')
    }
  }, []);
  const toggleTheme = () => {
    if (theme === 'bg-light') {
    
      setCurrentLogo(logoDark)
      setTheme('bg-black'); 
    }else {
      setTheme('bg-light');
      setCurrentLogo(logo); 
    }
  };

  const handleMouseEnter = () => {
    if (theme === 'bg-light') {
        setCurrentLogo(logoOpen); 
      }else {
        setCurrentLogo(logoOpenDark); 
      }
     setText("WELCOME");
    };

  const handleMouseLeave = () => { 
    if (theme === 'bg-light') {
        setCurrentLogo(logo); 
      }else {
        setCurrentLogo(logoDark); 
      }
    // setCurrentLogo(logo); 
      setText("placeAndalusia");
};
const {logout } = useUserContext();
const {user}=useUserContext();
console.log(user.role);
const handlelogout = async () => {
  await ClientApi.logout().then(() => {
    logout();
    setTimeout(() => {
      navigate('/');
    }, 1000); 
  });
};


const [isOpen, setIsOpen] = useState(false);

const toggleDropdown = () => setIsOpen(!isOpen);


const renderDashboardLink = () => {
  switch (user.role) {
    case "user":
      return (
        <li>
          <Link to="/client_dashbord">
            <div className="d-flex">
              <MdDashboard className="mt-1" />
              <h6 className="ms-1">Dashboard</h6>
            </div>
          </Link>
        </li>
      );
    case "adminH":

      return (
        <li>
          <Link to="/admin_room_dashbord">
            <div className="d-flex">
              <MdDashboard className="mt-1" />
              <h6 className="ms-1">Dashboard</h6>
            </div>
          </Link>
        </li>
      );
    case "adminR":
      return (
        <li>
          <Link to="/admin_Restaurant">
            <div className="d-flex">
              <MdDashboard className="mt-1" />
              <h6 className="ms-1">Dashboard</h6>
            </div>
          </Link>
        </li>
      );
    default:
      return null;
  }
};

const [isHidden, setIsHidden] = useState(false);
    let lastScrollTop = 0;

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

            if (scrollTop > lastScrollTop) {
                // Scrolling down
                setIsHidden(true);
            } else {
                // Scrolling up
                setIsHidden(false);
            }

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    const dispatch = useDispatch();
    const handleToggleDarkMode = () => {
      dispatch(toggleDarkMode()); // تغيير حالة الوضع الليلي عند الضغط على الزر
    };
  return (
    <nav style={{ backgroundColor: theme === 'bg-light' ? 'white' : 'black' }}  className={`mt-0 ${isHidden ? 'hidden' : ''}`}>
      <Link to="/" className="title">
        <p className=" m-auto  pp ">
            <img src={currentLogo} alt="Logo" className="logo ms-3 " onMouseEnter={handleMouseEnter}onMouseLeave={handleMouseLeave} />
            <h5 className="mt-3  ">{text}</h5>
      </p>
     
      </Link>
      <div className="menu p-1 spanmenu " onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li className="mt-3">
          <Link to="/about">About</Link>
        </li>
        <li className="mt-3">
             <Link className="clink" to="/menu">
                <p > menu </p>
             </Link>
        </li>
        <li className="mt-3">
            <b>
                <Link className=" clink ">
            <b>
                    <select name="" id="selectLanguge">
                      <option value="en">
                        <p className="me-5 ms-1"><b>en</b></p>
                      </option>
                      <option value="ar">
                        <p className="me-5 ms-1"><b>ar</b></p>
                      </option>
                      <option value="fr">
                        <p className="me-5 ms-1"><b>fr</b></p>
                      </option>
                    </select>
            </b>
                </Link>
            </b>
        </li>
        <li className="mt-3">
           <b>
             {/* <Link > */}
             {/* <p onClick={handlelogout}><img src={login} alt=""/> logout </p>   */}
             <div className="dropdown">
            <button 
                className="btn dropdown-toggle mt-2 clink" 
                type="button" 
                id="dropdownMenuButton" 
                aria-expanded={isOpen}
                onClick={toggleDropdown}
            >
      {user.name}
            </button>
    
            <ul className={`dropdown-menu${isOpen ? ' show' : ''}`} aria-labelledby="dropdownMenuButton">
            {renderDashboardLink()}
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><Link onClick={handlelogout}><div className="d-flex"><MdExitToApp className="mt-1"/> <h6 className="ms-1"> logout </h6></div></Link> </li>
            </ul>
        </div>
             {/* </Link> */}
           </b>
        </li>
        <li className="mt-3">
            <b>
              <Link className="clink" to="/support">
                <p> Support</p>
              </Link>
            </b>
        </li>
        <li className="mt-3">
            <b>
              {/* <Link className="clink"> */}
                {/* <p onClick={toggleTheme}> <img src={moon} alt="" className="me-1" /></p> */}
                <p onClick={toggleTheme}> <img src={moon} alt="" className="me-1" style={{marginTop:"1.2rem"}} onClick={handleToggleDarkMode}/></p>

              {/* </Link> */}
            </b>
        </li>
      </ul>
    </nav>
  );
};
export default NavbarLogin ; 
