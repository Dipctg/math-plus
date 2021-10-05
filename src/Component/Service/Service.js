import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';
const Service = (props) => {
    console.log(props.service);
    const { name, price, img } = props.service;
    return (

        <div className='service'>
            <div>
                <img className='img-fluid' src={img} />
                <hr />
                <h4 className='name fs-2'>Name: {name}</h4>
                <h5 className='name'>Price: ${price}</h5>
                <hr />
                <Link className='service-book' to="/contact">
                    Book now at ${price}
                </Link>
            </div>

        </div>

    );
};

export default Service;