import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { useForm } from "react-hook-form";
import './Review.css';

const Review = () => {

    const { register, handleSubmit, watch, errors } = useForm();
    const [loggedInUser, setLogInUser] = useContext(UserContext);
    const [info, setInfo] = useState({});

    // Get form input value by event target and onBlur
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const onSubmit = data => {
        console.log(data);
        fetch('https://pure-sierra-36980.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ ...data, ...info, ...loggedInUser })
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }

    return (
        <div className="row d-flex flex-wrap">
            <div className="col-12 col-sm-12 col-md-2 offset-md-1">
                <Sidebar></Sidebar>
            </div>
                <div className="col-12 col-sm-12 col-md-8 offset-md-1 pr-5 review-container">
                    <div className="d-flex justify-content-between my-3">
                        <h5 className="mb-3">Order</h5>
                      <Link to='/' className='nav-link mr-5 text-dark'>
                        {loggedInUser.email ? loggedInUser.name : ''}
                        </Link>
                    </div>
                    <div className="p-4" style={{ backgroundColor: "#F4FDFB", borderRadius: '15px' }}>
                        <div className="p-4">
                            <form className='ship-form' onSubmit={handleSubmit(onSubmit)}>
                                <div className="row">
                                    <div className="col-md-8">
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Your name" />
                                        </div>
                                        <div className="form-group">
                                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Company name, Designation" />
                                        </div>
                                        <div className="form-group">
                                            <textarea onBlur={handleBlur} className="form-control" name="desc" cols="68" rows="6" placeholder="Details" />
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-dark px-4">Submit</button>
                        </form>
                        </div>
                    </div>
                </div>        
            </div>
    );
};

export default Review;