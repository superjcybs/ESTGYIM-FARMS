import React from "react";
import Navbar from './Navbar';
import image from '../images/organic-pattern-1.png'

function Header() {
    return (
        <div id='main'>
            <div className="main">
                <Navbar />
                <div className="m-text">
                    <img src={ image} alt='bg' className="m-img" />
                    
                    <h2>Eat <font>Clean</font> and<font> Green</font>. Eat Organic</h2>
                    <a className='m-btn' href="#product">Products</a>
                </div>
            </div>
        </div>
    )
}

export default Header;