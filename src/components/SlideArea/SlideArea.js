import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Slide1 from '../../images/carousel-1.png';
import Slide2 from '../../images/carousel-2.png';
import Slide3 from '../../images/carousel-3.png';
import Slide4 from '../../images/carousel-4.png';
import Slide5 from '../../images/carousel-5.png';
import './SlideArea.css'


const SlideArea = () => {

    const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
    
    return (
        <div className="carousel-bg py-5">
            <h3 className="text-center text-white">Here are some of <span className="text-success">our works</span></h3>
            <div className="container py-5">
                <Carousel
                responsive={responsive}
                swipeable={false}
                draggable={false}
                showDots={true}
                autoPlay={true}
                >
                <div>
                    <img style={{width: '300px', height: '300px'}} src={Slide1} alt=""/>
                </div>
                <div>
                    <img style={{width: '300px', height: '300px'}} src={Slide2} alt=""/>
                </div>
                <div>
                    <img style={{width: '300px', height: '300px'}} src={Slide3} alt=""/>
                </div>
                <div>
                    <img style={{width: '300px', height: '300px'}} src={Slide4} alt=""/>
                </div>
                <div>
                    <img style={{width: '300px', height: '300px'}} src={Slide5} alt=""/>
                </div>
            </Carousel>
        </div> 
        </div>
    );
};

export default SlideArea;