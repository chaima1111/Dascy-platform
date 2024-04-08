import React ,{useState}from 'react';
import {RiMenu3Line , RiCloseLine} from  "react-icons/ri" ;
import logo from '../../assets/logoV4.svg';
import {Link} from "react-router-dom"
import './navbar.css'

const Menu =() => (
<>
  <p><a href="#home">Home</a></p>
  <p><a href="#about">About us</a></p>
  <p><a href="#courses">Our courses</a></p>                                                              
  <p><a href="#feedbacks">Feedbacks</a></p>
  <p><a href="#contact">Contact us</a></p>
  </>
)


const Navbar = () => {
     const [toggleMenu,setToggleMenu] = useState(false);
  return (
    <div className='dascy__navbar'>
        <div className="dascy__navbar-links">
            <div className="dascy__navbar-links_logo">
                <img src={logo} alt="logo" />
            </div>
            <div className="dascy__navbar-links_container">
                <Menu/>
            </div>
        </div>
        <div className="dascy__navbar-sign">
           <Link className='link' to="/login"><p>sign in</p></Link> 
            <Link className='link' to="/register" ><button type='button'>Sign up</button></Link>
        </div>

         <div className="dascy__navbar-menu">
        {toggleMenu 
        ? <RiCloseLine color="#040C18" size={27} onClick={() => setToggleMenu(false)}/>
        : <RiMenu3Line color="#040C18" size={27} onClick={() => setToggleMenu(true)} />
         }
         {toggleMenu && (
          <div className="dascy__navbar-menu_container scale-up-center">
            <div className="dascy__navbar-menu_container-links">
            <Menu/>

            </div>
            <div className="dascy__navbar-menu_container-links-sign">
             <Link className='link' to="/login"><p>sign in</p></Link> 
            <Link className='link' to="/register" ><button type='button'>Sign up</button></Link>
                </div>
              </div>  
         )}
         </div>
      
    </div>
  )
}

export default Navbar
