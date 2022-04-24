import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light nav-container">
        <div class="container-fluid">
          <a class="navbar-brand" href="#/">Hotel Bluebox</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#/navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#/">Booking</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">Facilities</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">Support</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">Rooms</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">Reviews</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#/">Blog</a>
              </li>
              <li class="nav-item">
                <a class="nav-link nav-button" href="#/">Sign In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;