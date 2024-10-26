import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="bg-dark text-white py-4 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h5>About E-Cart</h5>
                        <p>
                            E-Cart is your one-stop destination for a wide variety of products. 
                            From electronics to fashion, we bring you the best deals and offers.
                        </p>
                    </div>

                    <div className="col-md-4">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link to="/" className="text-white">Home</Link></li>
                            <li><Link to="/department/electronics" className="text-white">Electronics</Link></li>
                            <li><Link to="/department/fashion" className="text-white">Fashion</Link></li>
                            <li><Link to="/department/homeAppliances" className="text-white">Home Appliances</Link></li>
                            <li><Link to="/help/faq" className="text-white">Frequently Asked Questions</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        <h5>Contact Us</h5>
                        <p>
                            <strong>Email:</strong> support@ecart.com <br />
                            <strong>Phone:</strong> +123-456-7890 <br />
                            <strong>Address:</strong> 123 Shopping Street, City, Country
                        </p>
                        <div>
                            <a href="#" className="text-white mr-2" aria-label="Facebook">
                                <img src="https://img.icons8.com/fluent/24/000000/facebook-new.png" alt="Facebook" />
                            </a>
                            <a href="#" className="text-white mr-2" aria-label="Twitter">
                                <img src="https://img.icons8.com/fluent/24/000000/twitter.png" alt="Twitter" />
                            </a>
                            <a href="#" className="text-white mr-2" aria-label="Instagram">
                                <img src="https://img.icons8.com/fluent/24/000000/instagram-new.png" alt="Instagram" />
                            </a>
                            <a href="#" className="text-white mr-2" aria-label="LinkedIn">
                                <img src="https://img.icons8.com/fluent/24/000000/linkedin.png" alt="LinkedIn" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="row mt-3">
                    <div className="col text-center">
                        <p>&copy; 2024 E-Cart. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
