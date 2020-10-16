import React from 'react';
import Navbar from '../../components/Navbar/Navbar';

const Default = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="container my-5 py-5">
                <h1>Sorry, page not found</h1>
                <h3>404 Error!</h3>
            </div>
        </>
    );
};

export default Default;