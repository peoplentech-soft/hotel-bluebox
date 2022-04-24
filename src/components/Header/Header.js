import React from 'react'
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import banner from '../../img/hotel-banner-2.jpg';

const Header = () => {
    return (
        <div className="header">
            <div className="header-banner">
                <img src={banner} alt="" className='img-fluid' />
            </div>

            <div className="header-description">
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Necessitatibus, soluta delectus ipsam commodi a ipsa, ad illo sunt, vero suscipit exercitationem doloribus fugiat magnam atque illum dolores saepe vitae repellat et officia quaerat. Eligendi repudiandae, voluptate recusandae eum atque similique error eius itaque esse eaque fugit quae a illum nisi?</p>
            </div>

            <div className="checkInOutForm">
                <div className="checkInOutFormContainer">
                    <div className="inputItem checkIn">
                        <input type="date" id="start" name="trip-start"
                            min="2020-01-01" max="2028-12-31" className="inputCheckIn"/>
                            <label for="start" className="inputText">Check in</label>
                    </div>
                    <div className="inputItem checkOut">
                        <input type="date" id="start" name="trip-start"
                            min="2020-01-01" max="2028-12-31" className="inputCheckIn"/>
                            <label for="start" className="inputText">Check Out</label>
                    </div>
                    <div className="inputItem persons">
                        <p><FontAwesomeIcon icon={faUser} className="checkInOutIcon" /> 4 persons - 1 room</p>
                    </div>
                    <div className="inputItem">
                        <p><FontAwesomeIcon icon={faMagnifyingGlass} className="checkInOutIcon" /> Search</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;