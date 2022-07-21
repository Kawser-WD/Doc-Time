import React from 'react';
import Footer from '../../shared/Footer/Footer';
import Navbar from '../../shared/Navbar/Navbar';
import AboutUs from '../AboutUs/AboutUs';
import ContactUs from '../ContactUs/ContactUs';
import DocServices from '../DocServices/DocServices';
import Facilities from '../Facilities/Facilities';
import Header from '../Header/Header';
import Home from '../Home/Home';
import OurDoctors from '../OurDoctors/OurDoctors';

const Main = () => {
    return (
        <div>
            <Navbar/>
            <Home></Home>
            <Header/>
            <DocServices/>
            <Facilities/>
            <AboutUs/>
            <OurDoctors/>
            <ContactUs/>
            <Footer/>
        </div>
    );
};

export default Main;