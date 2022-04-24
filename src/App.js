import React from 'react';
import './App.css';
import Facilities from './components/Facilities/Facilities';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import PopularFacilities from './components/PopularFacilities/PopularFacities';
import Room from './components/Room/Room';
import Testimonial from './components/Testimonial/Testimonial';

function App() {
  return (
    <div className="App">
      <div className="container-brand">
        <Navbar/>
        <Header/>
        <Room/>
        <Facilities/>
        <PopularFacilities/>
        <Testimonial/>
        <Newsletter/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
