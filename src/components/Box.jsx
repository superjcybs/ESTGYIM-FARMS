import React from "react";

function Box(props) {
    return (
        <div className="p-box">
            <img src={props.image} alt={props.name} />
            <p><b>{props.name}</b></p>
            <a href="https://wa.me/233247792110" className="price">GH&cent; {props.price}</a>
            <a href="https://wa.me/233247792110" className="buy-btn">Add to Cart</a>
        </div>
    )
}

export default Box