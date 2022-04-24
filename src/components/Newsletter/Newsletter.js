import React from 'react';
import './Newsletter.css';
import trust from '../../img/trust-badge.png';

const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="trustBadge">
                <img src={trust} alt="" className="img-fluid"/>
            </div>
            <div className="subscriptionContainer">
                <h2>Subscribe &</h2>
                <h2>get special discount</h2>
                <p>Don't wanna miss something? Subscribe right now and get the special discount and monthly newsletter</p>

                <div className="subscriptionInput">
                    <input type="email" placeholder="Enter your Email Address" className="shadow"/>
                    <button type="submit" className="shadow">Subscribe</button>
                </div>
            </div>

        </div>
    );
};

export default Newsletter;