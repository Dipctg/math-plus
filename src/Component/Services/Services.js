import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
const Services = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.JSON')
            .then(res => res.json())
            .then(data => setServices(data));

    }, [])

    return (
        <div>
            <div className='services-container1 '>
                <h3>Our Services </h3>
            </div>


            <div className='services-container'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)

                }
            </div>

        </div>
    );
};

export default Services;