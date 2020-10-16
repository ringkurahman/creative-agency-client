import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../../images/logos/frame.png';
import './HeroArea.css';


const HeroArea = () => {
    return (
        <section style={{ height: '600px' }} className='w-100 hero-main'>
            <div className="row d-flex align-items-center justify-content-center">
                <div className="col-10 col-sm-10 col-md-10 col-lg-4 offset-md-1">
                <h1 className="mb-3 text-login">Let’s Grow Your<br /> Brand To The<br /> Next Level</h1>
                <p className="pr-5 mr-5 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat </p>
                <Link to="/dashboard" className="btn btn-login text-white px-4">
                    Hire us
                </Link>
            </div>
            <div className="col-10 col-sm-10 col-md-10 col-lg-6">
                <img className="img-fluid hero-image" src={heroImage} alt="Hero"/>
            </div>
            </div>
        </section>
    );
};

export default HeroArea;