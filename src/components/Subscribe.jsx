import React from "react";

function Subscribe() {
    return (
        <div className="subscribe">
            <h3>Subscribe to our emails</h3>
            <div className="subscribe-container">
                <div className="subscribe-input">
                    <input type="email" placeholder="example@superjcybs.com" />
                    <a href="https://formspree.io/f/myyoonyo" method="POST" className="subscribe-btn">Send</a>
                </div>
            </div>

        </div>
    )
}

export default Subscribe