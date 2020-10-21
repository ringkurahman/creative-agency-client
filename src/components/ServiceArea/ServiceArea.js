import React, { useEffect, useState } from 'react';
import ServiceAreaData from '../ServiceAreaData/ServiceAreaData';
import Spinner from 'react-bootstrap/Spinner'
import './ServiceArea.css';


const ServiceArea = () => {

  const [services, setServices] = useState([]);
  const [preload, setPreload] = useState(true);

  useEffect(() => {
    fetch('https://pure-sierra-36980.herokuapp.com/serviceArea')
      .then(res => res.json())
      .then(data => {
        setPreload(false);
        setServices(data)
      })
  }, [])

    return (
      <section>
        <div className="pt-5">
          <h3 className="text-center mt-5">Provide awesome<span className="text-success"> services</span></h3>
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
            services.map(service =><ServiceAreaData service={service}></ServiceAreaData>)
          }
        </div>
      </section>     
    );
};

export default ServiceArea;