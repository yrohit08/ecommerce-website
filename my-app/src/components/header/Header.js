import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import SearchBar from '../search/Search';
import { AuthContext } from '../../context/AuthContext';


const Header = () => {
    const { logout, isLoggedIn, user } = useContext(AuthContext);


    const cartData = JSON.parse(localStorage.getItem('cartData')) || [];
    const itemCount = cartData.reduce((acc, cur) => {
        acc += cur.quantity;
        return acc;
    }, 0);

    const handleLogout = (event) => {
        event.preventDefault();
        logout();
    };

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container header-container">
                    <span><Link to="/" className="navbar-brand">E-Cart</Link></span>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Departments
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link to="/department/electronics" className="dropdown-item">Electronics</Link>
                                    <Link to="/department/fashion" className="dropdown-item">Fashion</Link>
                                    <Link to="/department/homeAppliances" className="dropdown-item">Home Appliances</Link>
                                </div>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navServicesDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Services
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navServicesDropdown">
                                    <Link to="/help/tandc" className="dropdown-item">Terms and Conditions</Link>
                                    <Link to="/help/paymentinfo" className="dropdown-item">Payment Methods</Link>
                                    <Link to="/help/returns" className="dropdown-item">Return Policy</Link>
                                    <Link to="/help/delivery" className="dropdown-item">Delivery Information</Link>
                                    <Link to="/help/faq" className="dropdown-item">Frequently Asked Questions</Link>
                                </div>
                            </li>
                        </ul>
                        {/* <form className="form-inline my-2 my-lg-0 ml-auto">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search for a product..." aria-label="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit"><i className="fas fa-search"></i></button>
                        </form> */}
                        <SearchBar />
                        <ul className="navbar-nav ml-auto">
                            {isLoggedIn === true ?
                                <>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAccount" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            <i className="fas fa-user"></i> Welcome, {user?.username}
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownAccount">
                                            <span className="logout dropdown-item cursor-pointer" onClick={handleLogout} >Log Out</span>
                                        </div>
                                    </li>
                                </>

                                :
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownAccount" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-user"></i> Account
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdownAccount">
                                        <Link to="/login" className="dropdown-item">Log In</Link>
                                        <Link to="/signup" className="dropdown-item">Register</Link>
                                    </div>
                                </li>
                            }
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link">
                                    {itemCount > 0 && <span className="item-count">{itemCount}</span>}<i className="fas fa-shopping-cart"></i> Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Header;