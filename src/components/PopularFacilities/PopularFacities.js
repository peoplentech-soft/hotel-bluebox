import React from 'react';
import './PopularFacilities.css';
import restaurant from '../../img/restaurant.jpg';
import gym from '../../img/gym.jpg';
import pool from '../../img/pool.jpg';

const PopularFacilities = () => {
    return (
        <div className="popularFacilities">
            <div className="popularFacilitiesTitle">
                <h2>We organize the most poplular facilities to our customers</h2>
            </div>
            <div className="popularFacilitiesContainer">
                {/* Restaurant container */}
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-7 facilitiesImg">
                        <img src={restaurant} alt="" className='img-fluid restaurant' />
                    </div>
                    <div className="col-md-5 facilitiesContent">
                        <h4>Restaurant</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores deleniti harum a iusto. Molestias nam suscipit temporibus tenetur facere unde odit ut dolorem quo ex, cupiditate sapiente nostrum dolor est voluptas quaerat, aliquid amet, ducimus expedita quidem molestiae. Asperiores.</p>
                        <a href="#/" className="button-brand">Visit Now</a>
                    </div>
                </div>


                {/* Gym Container */}
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-5 gymContent">
                        <h4>Gym center</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores deleniti harum a iusto. Molestias nam suscipit temporibus tenetur facere unde odit ut dolorem quo ex, cupiditate sapiente nostrum dolor est voluptas quaerat, aliquid amet, ducimus expedita quidem molestiae. Asperiores.</p>
                        <a href="#/" className="button-brand">Visit Now</a>
                    </div>
                    <div className="col-md-7 gymImg">
                        <img src={gym} alt="" className='img-fluid gym' />
                    </div>
                </div>


                {/* Swimming Pool*/}
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-md-7 gymImg">
                        <img src={pool} alt="" className='img-fluid pool' />
                    </div>
                    <div className="col-md-5 gymContent">
                        <h4>Swimming Pool</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem asperiores deleniti harum a iusto. Molestias nam suscipit temporibus tenetur facere unde odit ut dolorem quo ex, cupiditate sapiente nostrum dolor est voluptas quaerat, aliquid amet, ducimus expedita quidem molestiae. Asperiores.</p>
                        <a href="#/" className="button-brand">Visit Now</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopularFacilities;