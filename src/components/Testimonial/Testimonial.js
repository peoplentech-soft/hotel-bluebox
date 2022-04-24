import React from 'react';
import './Testimonial.css';
import testimonial from '../../img/testimonial.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';


const Testimonial = () => {
    return (
        <div className="testimonial">
            <div className="testimonial-container row d-flex justify-content-center align-items-center">
                <div className="testimonial-img col-md-4">
                    <img src={testimonial} alt="" className='img-fluid' />
                </div>
                <div className="testimonial-content col-md-8">
                    <h4>Joseph E. Scott</h4>
                    <p><small>IT Professional</small></p>
                    <FontAwesomeIcon icon={faStar} className="rating-icon"/>
                    <FontAwesomeIcon icon={faStar} className="rating-icon"/>
                    <FontAwesomeIcon icon={faStar} className="rating-icon"/>
                    <FontAwesomeIcon icon={faStar} className="rating-icon"/>
                    <FontAwesomeIcon icon={faStar} className="rating-icon"/>
                    <p className="mt-3">"The best hotel I’ve ever been privileged enough to stay at. Gorgeous building, and it only gets more breathtaking when you walk in. High quality rooms (there was even a tv by the shower), and high quality service. Also, they are one of few hotels that allow people under 21 to book a reservation."</p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;