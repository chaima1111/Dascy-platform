import React ,{useState}from 'react';
import {RiMenu3Line , RiCloseLin, RiCloseLine} from  "react-icons/ri" ;
import logo from '../../assets/logoV4.svg';
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
            <p>sign in</p>
            <button type='button'>Sign up</button>
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
            <button type='button'>sign in</button>
            <button type="button">Sign up</button>
                </div>
              </div>  
         )}
         </div>
      
    </div>
  )
}

export default Navbar
