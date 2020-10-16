import React, { useEffect, useState } from 'react';
import ServiceAreaData from '../ServiceAreaData/ServiceAreaData';

const ServiceArea = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://pure-sierra-36980.herokuapp.com/serviceArea')
      .then(res => res.json())
      .then(data =>setServices(data))
  }, [])

    return (
      <section>
        <div className="pt-5">
          <h3 className="text-center mt-5">Provide awesome<span className="text-success"> services</span></h3>
        </div>      
        <div className="row justify-content-center my-5">
          {
            services.map(service =><ServiceAreaData service={service}></ServiceAreaData>)
          }
        </div>
      </section>     
    );
};

export default ServiceArea;