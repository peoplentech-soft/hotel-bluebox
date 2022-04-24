import React from 'react';
import './Room.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { } from '@fortawesome/free-regular-svg-icons';
import { faBath, faBed, faTv } from '@fortawesome/free-solid-svg-icons';
import room1 from '../../img/room-1.jpg';
import room2 from '../../img/room-2.jpg';
import room3 from '../../img/room-3.jpg';

const Room = () => {
    return (
        <div className="rooms">
            <div className="roomContainer d-flex align-items-center justify-content-between">
                <div>
                    <h2>Rooms we recommend for our customer</h2>
                </div>
                <div>
                    <a href="#/" className="button-brand">View All Rooms</a>
                </div>
            </div>

            <div className="roomsCard">
                <div className="cardConatainer">
                    <div className="roomCard">
                        <img src={room1} alt="" class="img-fluid" />
                        <div className="roomCardContent">
                            <h4>Deluxe Contrast Room</h4>
                            <div className="cardIcons">
                                <span><FontAwesomeIcon icon={faBed} className="cardIcon" /> 4</span>
                                <span><FontAwesomeIcon icon={faTv} className="cardIcon" /> 2</span>
                                <span><FontAwesomeIcon icon={faBath} className="cardIcon" /> 2</span>
                            </div>
                            <p className="price">$85<span>/day</span></p>
                        </div>
                    </div>
                </div>
                <div className="cardConatainer">
                    <div className="roomCard">
                        <img src={room2} alt="" class="img-fluid" />
                        <div className="roomCardContent">
                            <h4>Single Contrast Room</h4>
                            <div className="cardIcons">
                                <span><FontAwesomeIcon icon={faBed} className="cardIcon" /> 2</span>
                                <span><FontAwesomeIcon icon={faTv} className="cardIcon" /> 1</span>
                                <span><FontAwesomeIcon icon={faBath} className="cardIcon" /> 2</span>
                            </div>
                            <p className="price">$85<span>/day</span></p>
                        </div>
                    </div>
                </div>
                <div className="cardConatainer">
                    <div className="roomCard">
                        <img src={room3} alt="" class="img-fluid" />
                        <div className="roomCardContent">
                            <h4>Deluxe Contrast Room</h4>
                            <div className="cardIcons">
                                <span><FontAwesomeIcon icon={faBed} className="cardIcon" /> 4</span>
                                <span><FontAwesomeIcon icon={faTv} className="cardIcon" /> 2</span>
                                <span><FontAwesomeIcon icon={faBath} className="cardIcon" /> 2</span>
                            </div>
                            <p className="price">$85<span>/day</span></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Room;