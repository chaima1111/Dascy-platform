import React ,{useState}from 'react';
import {RiMenu3Line , RiCloseLine} from  "react-icons/ri" ;
import logo from "../../assets/logoV4.svg";
import {Link} from "react-router-dom"
import "./navcourse.css"
const Menu = () => (
  <>
    <Link to="/">
      <p>Home</p>
    </Link>
    <Link to="dashboard">
      <p>Dashboard</p>
    </Link>
    <Link to="/startNetworking">
      <p>Go to course</p>
    </Link>
  </>
);
const NavCourse = () => {
    const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='dascy__navbarCourse'>
            <div className="dascy__navbarCourse-links_logo">
                <img src={logo} alt="logo" />
            </div>
        <div className="dascy__navbarCourse-links">
            <div className="dascy__navbarCourse-links_container">
                <Menu/>
            </div>
        </div>
   

         <div className="dascy__navbarCourse-menu">
        {toggleMenu 
        ? <RiCloseLine color="#040C18" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#040C18" size={27} onClick={() => setToggleMenu(true)} />
         }
         {toggleMenu && (
          <div className="dascy__navbarCourse-menu_container scale-up-center">
            <div className="dascy__navbarCourse-menu_container-links">
            <Menu/>

            </div>
           
              </div>  
         )}
         </div>
      
    </div>  )
}

export default NavCourse