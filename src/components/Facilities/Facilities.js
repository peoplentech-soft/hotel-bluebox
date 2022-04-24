import React from 'react';
import './Facilities.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBolt, faCoffee, faComputer, faDumbbell, faLaptop, faParking, faPersonSwimming, faShirt, faWifi } from '@fortawesome/free-solid-svg-icons';

const Facilities = () => {
  return (
    <div className="facilities">
        <div className="facilitiesTitle">
            <h2>See the facilites we provieded to you in real time</h2>
        </div>
        <div className="facilitiesCard">
            <div className="row cardContainer">
            <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faComputer} className="facilitiesIcon"/>
                    <p>Private Workspace</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faLaptop} className="facilitiesIcon"/>
                    <p>Outdoor Workspace</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faPersonSwimming} className="facilitiesIcon"/>
                    <p>Swimming Pool</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faParking} className="facilitiesIcon"/>
                    <p>Parking Area</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faWifi} className="facilitiesIcon"/>
                    <p>Free Wifi</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faCoffee} className="facilitiesIcon"/>
                    <p>Breakfast</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faBolt} className="facilitiesIcon"/>
                    <p>Free Electricity</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faShirt} className="facilitiesIcon"/>
                    <p>Laundry Service</p>
                </div>
                <div className="col-md-4 cardItem">
                    <FontAwesomeIcon icon={faDumbbell} className="facilitiesIcon"/>
                    <p>Gym Center</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Facilities;