import React from "react";
import Box from './Box'
import fimage1 from '../images/organic-pro-1.jpg'
import fimage2 from '../images/organic-pro-2.jpg'
import fimage3 from '../images/organic-pro-3.jpg'
import fimage4 from '../images/organic-pro-4.jpg'
import fimage5 from '../images/organic-pro-5.jpg'
import fimage6 from '../images/organic-pro-6.jpg'


function Product() {
    return (
        <div className="product" id="product">
            <div className="p-heading">
                <h3>New Organic Products</h3>
            </div>
                        
            <div className="product-container">
                <Box image={fimage1} name="Watermelon" price= "10.30"/>
                <Box image={fimage2} name="Mangoes" price="10.10"/>
                <Box image={fimage3} name="Leaves" price="15.30"/>
                <Box image={fimage4} name="Apples" price="20.00"/>
                <Box image={fimage5} name="Grapes" price="19.20"/>
                <Box image={fimage6} name="Oranges" price="8.50"/>

            </div>
        </div>
    )
}

export default Product;