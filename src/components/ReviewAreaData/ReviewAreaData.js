import React from 'react';
import './reviewAreaData.css';

const ReviewAreaData = ({review}) => {
    return (
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 m-2 text-center">
            <div className='card review-card' style={{height: '220px'}}>
                <div className='d-flex justify-content-around align-items-center'>
                    <img src={review.photoURL} style={{ width: '60px' }} className="card-img-top pt-3 user-image" alt="" />
                    <h5 className='mr-5'>{review.name}</h5>
                </div>
                <h6 className="card-title card-margin">{review.title}</h6>
                <div className="card-body text-center">
                    <p className="card-text text-muted">{review.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ReviewAreaData;