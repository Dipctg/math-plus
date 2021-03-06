import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='nav-container'>
            <Nav variant="pills" className='nav-container' >


                <Link className='nav-section' to="/home">
                    Home
                </Link>
                <Link className='nav-section' to="/about">
                    About Us
                </Link>
                <Link className='nav-section' to="/services">
                    Services
                </Link>
                <Link className='nav-section' to="/contact">
                    Contact
                </Link>









            </Nav>
        </div>
    );
};

export default Navbar;