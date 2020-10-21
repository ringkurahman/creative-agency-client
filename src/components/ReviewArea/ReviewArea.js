import React, { useEffect, useState } from 'react';
import ReviewAreaData from '../ReviewAreaData/ReviewAreaData';
import Spinner from 'react-bootstrap/Spinner'

const ReviewArea = () => {

  const [reviews, setReviews] = useState([]);
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    fetch('https://pure-sierra-36980.herokuapp.com/reviewArea')
      .then(res => res.json())
      .then(data => {
        setPreload(false)
        setReviews(data)
      })
  }, [])
    
    return (
        <section>
        <div className="pt-5">
          <h3 className="text-center">Clients<span className="text-success"> Feedback</span></h3>
        </div>      
        <div className="row justify-content-center my-5">
          {preload &&
            <div className="">
            <Spinner
              as="span"
              variant="success"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
          />
            <Spinner
              as="span"
              variant="danger"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            <Spinner
              as="span"
              variant="warning"
              animation="grow"
              size="sm"
              role="status"
              aria-hidden="true"
            />
            </div>
          }
          {
            reviews.map(review=><ReviewAreaData review={review}></ReviewAreaData>)
          }
        </div>
      </section> 
    );
};

export default ReviewArea;