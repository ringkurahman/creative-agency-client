import React from 'react';
import slack from '../../images/logos/slack.png';
import google from '../../images/logos/google.png';
import uber from '../../images/logos/uber.png';
import netflix from '../../images/logos/netflix.png';
import airbnb from '../../images/logos/airbnb.png';

const BrandArea = () => {
    return (
        <section className="container px-5">
            <div className="row ">
                <div className="col-10 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex flex-wrap justify-content-around">
                <div>
                    <img style={{ height: '30px' }} src={slack} alt="" />
            </div>
                <div>
                    <img style={{ height: '30px' }} src={google} alt="" />
            </div>
                <div>
                    <img style={{ height: '30px' }} src={uber} alt="" />
            </div>
                <div>
                    <img style={{ height: '30px' }} src={netflix} alt="" />
            </div>
                <div>
                    <img style={{ height: '30px'}} src={airbnb} alt=""/>
            </div>
            </div>
            </div>
        </section>
    );
};

export default BrandArea;