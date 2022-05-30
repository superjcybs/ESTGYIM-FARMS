import React from "react";
import brandimage from '../images/organic-about-1.png'


function Brand() {


    const showReadMore = (e) => {
        const current = e.target;
        const isReadMoreBtn = current.className.includes('read-more-btn');

        if (!isReadMoreBtn) return;

        const currentText = e.target.parentNode.querySelector('.read-more-text');

        currentText.classList.toggle('read-more-text--show')

        current.textContent = current.textContent.includes('Read More') ? "Read Less..." : "Read More..."
    }

    return (
        <div className="brand">
            <div className="brand-img">
                <img src={brandimage} alt="img" />
            </div>
            <div className="brand-text">
                <h3>Fresh Food, Simply <font> Delicious</font></h3>
                <p>Your health is our proirity also and this is the reason why we dont get you
                    to exercise your body, We also advice that you eat right.
                    Eating right is taking in more organic products than what is grown with artificial
                    manerisms.
                    Shop with Us, Buy from SUPAMART.<br/>

                    <span className="read-more-text">
                        We have beeen in the market for long, we understand the ins and outs.
                        The nutritive quantities. We work with dieticians who understand health matters.
                    </span>

                </p>
                <button className="m-btn read-more-btn" onClick={showReadMore}>Read More...</button>

            </div>
        </div>
    )
}

export default Brand