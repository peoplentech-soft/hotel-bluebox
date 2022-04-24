import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-container row">
                <div className="col-md-6 footer-item">
                    <h4>Hotel Bluebox</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae quia doloribus suscipit obcaecati beatae sequi accusantium deserunt optio dolor ullam.</p>
                    <div className="social-icons">
                        <FontAwesomeIcon icon={faFacebook} className="footer-icon" />
                        <FontAwesomeIcon icon={faTwitter} className="footer-icon" />
                        <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
                        <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
                    </div>
                </div>
                <div className="col-md-2 footer-item">
                    <h5>Quick Link</h5>
                    <a href="#/">Booking</a>
                    <a href="#/">Support</a>
                    <a href="#/">Blog</a>
                    <a href="#/">Reviews</a>
                    <a href="#/">Rooms</a>
                </div>
                <div className="col-md-2 footer-item">
                    <h5>Company</h5>
                    <a href="#/">Global Locatiotn</a>
                    <a href="#/">Mission</a>
                    <a href="#/">Career</a>
                    <a href="#/">Investor</a>
                    <a href="#/">Privacy Policy</a>
                </div>
                <div className="col-md-2 footer-item">
                    <h5>Legal Information</h5>
                    <a href="#/">Terms of use</a>
                    <a href="#/">Privacy Policy</a>
                    <a href="#/">Hotel License Agreement</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;