import React, { useEffect, useState } from 'react';
import ReviewAreaData from '../ReviewAreaData/ReviewAreaData';

const ReviewArea = () => {

    const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch('https://pure-sierra-36980.herokuapp.com/reviewArea')
      .then(res => res.json())
      .then(data =>setReviews(data))
  }, [])
    
    return (
        <section>
        <div className="pt-5">
          <h3 className="text-center">Clients<span className="text-success"> Feedback</span></h3>
        </div>      
        <div className="row justify-content-center my-5">
          {
            reviews.map(review=><ReviewAreaData review={review}></ReviewAreaData>)
          }
        </div>
      </section> 
    );
};

export default ReviewArea;