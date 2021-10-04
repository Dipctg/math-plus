import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form } from 'react-bootstrap';
import './Contuct.css'
const Contact = () => {
    return (
        <div>
            <div>
                <h1>Fill out this form to see more Contact Us Pages.</h1>
            </div>
            <div>
                <Form className="from1" >
                    <Form.Group controlId="formBasicEmail">
                        <Form className=' d-flex'>Email address</Form>
                        <Form.Control className='from1 ' type="email" placeholder="Enter email" />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className=' d-flex'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" className='ms-2 d-flex' label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit" className='ms-2 d-flex'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Contact;