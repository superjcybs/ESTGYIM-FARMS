import React from "react";
import timage1 from '../images/esther-superjcybs.jpg'
import timage2 from '../images/Jerry-superjcybs.png'


function Team() {
    return (
        <div className="team" id="team">
            <div className="p-heading">
                <h3>Meet Our Team</h3>
            </div>
                        
            <div className="team-container">
        <div className="p-box">
            <img src={timage1} alt="Founder - Esther Gyimah" />
            <p><b>Founder</b></p>
            <a href="https://wa.me/233245620564" className="price">Esther Gyimah</a>
            <a href="https://wa.me/233245620564" className="buy-btn">Chat me</a>
        </div>                
        <div className="p-box">
            <img src={timage2} alt="COO - Jerry Babatunde (Supernatural)" />
            <p><b>COO</b></p>
            <a href="https://wa.me/233247792110" className="price">Jerry Babatunde (Supernatural)</a>
            <a href="https://wa.me/233247792110" className="buy-btn">Chat me</a>
        </div>                


            </div>
        </div>
    )
}

export default Team;