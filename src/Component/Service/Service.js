import React from 'react';
import './Service.css';
const Service = (props) => {
    console.log(props.service);
    const { name, price, img } = props.service;
    return (

        <div className='service'>
            <div>
                <img className='img-fluid' src={img} />
                <h4>{name}</h4>
                <h5>{price}</h5>
            </div>

        </div>

    );
};

export default Service;