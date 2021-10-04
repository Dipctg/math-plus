import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import Noresult from '../NoResult/Noresult';
import Services from '../Services/Services';
import './Header.css'
const Header = () => {
    return (
        <div>
            <div className='header'>
                <h1>Math <span className='plus'>+</span></h1>
            </div>
            <div>

                <Router>
                    <Navbar></Navbar>
                    <Switch>
                        <Route path="/home">
                            <Home></Home>
                        </Route>
                        <Route exact path="/">
                            <Home></Home>
                        </Route>
                        <Route path="/about">
                            <About></About>
                        </Route>
                        <Route path="/services">
                            <Services></Services>
                        </Route>
                        <Route path="/contact">
                            <Contact></Contact>
                        </Route>


                        <Route path="*">
                            <Noresult></Noresult>
                        </Route>
                    </Switch>
                </Router>
            </div>
        </div>
    );
};

export default Header;