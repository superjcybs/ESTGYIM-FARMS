import React, { useState } from "react";
import { Link } from 'react-scroll';
import logo from '../images/logo.png';

function Navbar() {

     const [nav,setNav] = useState(false)

     const changeBackground = () => {
         if (window.scrollY >= 50) {
             setNav(true);
         }
         else {
             setNav(false)
         }
     }    
     window.addEventListener('scroll', changeBackground);

    return (
        <>
      <div>
            <div className="logo">
                <img src={logo} alt=''/>
            <a href="/">ESTGYIM FARMS</a>
        </div>
        <div className="side-box">
                <div className="search">
                    <i className="fas fa-search"></i>
                    <input placeholder="Search Food" type="text"/>
                </div>
            </div>
        </div>
             <nav className={nav ? 'nav active': 'nav'}>

                <Link to='main' className='logo' smooth={true} duration={2000}> </Link>
                
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" htmlFor="menu-btn">
                     <span className="nav-icon"></span> 
                </label>

                 <ul className="menu">
                     <li><Link to='main' smooth={true} duration={1000} >Home</Link></li>
                     <li><Link to='brand' smooth={true} duration={1000}>Our Brand</Link></li>
                     <li><Link to='product' smooth={true} duration={1000}>Products</Link></li>
                     <li><Link to='subscribe' smooth={true} duration={1000}>Subscribe</Link></li>
                     <li><Link to='contact' smooth={true} duration={1000}>Contact</Link></li>
                 </ul>
             </nav>
        </>
    )
}

export default Navbar;