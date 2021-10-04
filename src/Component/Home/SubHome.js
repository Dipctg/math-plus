import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './SubHome.css'
const SubHome = () => {
    return (
        <div className='home-container'>
            <h1>Welcome in Math+</h1>
            <div>
                <Card>
                    <Card.Header className='card-header' as="h5">OUR AIM</Card.Header>
                    <Card.Body className='card-body'>
                        <Card.Title>We Take Learning to New Heights</Card.Title>
                        <Card.Text>
                            We believe everyone has the capacity to be creative. Math+ is a place where people develop their own potential.
                        </Card.Text>
                        <Link className='nav-section' to="/contact">
                            Contact
                        </Link>

                    </Card.Body>
                </Card>
            </div>
        </div>

    );
};

export default SubHome;