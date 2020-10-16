import React from 'react';
import BrandArea from '../../components/BrandArea/BrandArea';
import ContactArea from '../../components/ContactArea/ContactArea';
import HeroArea from '../../components/HeroArea/HeroArea';
import Navbar from '../../components/Navbar/Navbar';
import ReviewArea from '../../components/ReviewArea/ReviewArea';
import ServiceArea from '../../components/ServiceArea/ServiceArea';
import SlideArea from '../../components/SlideArea/SlideArea';
import './Home.css';

const Home = () => {

    return (
        <div className='header-container'>
            <div className='header-bg-color'>
                <Navbar />
                <HeroArea />
            </div>
            <BrandArea />
            <ServiceArea />
            <div className='py-5'>
                <SlideArea />
            </div>
            <ReviewArea></ReviewArea>
            <div className='py-5'>
                <div className='contact-bg-color pt-5'>
                <ContactArea />
            </div>
            </div>
        </div>
    );
};

export default Home;