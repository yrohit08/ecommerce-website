import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import "./Payment.css";
import successImage from '../../images/green-check-icon.jpg';

const Payment = () => {
    const navigate = useNavigate();
    const { isLoggedIn } = useContext(AuthContext);
    const [cartData, setCartData] = useState([]);
    const [paymentMethod, setPaymentMethod] = useState('cod'); // Default to Cash on Delivery
    const [orderPlaced, setOrderPlaced] = useState(false);

    // Card details state
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    // Validation messages
    const [validationMessage, setValidationMessage] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: ''
    });

    useEffect(() => {
        const storedCartData = JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(storedCartData);
    }, []);

    useEffect(() => {
        // Check if the user is already logged in
        if (!isLoggedIn) {
            navigate('/login');
        }
    }, [isLoggedIn, navigate]);

    const handlePaymentChange = (event) => {
        setPaymentMethod(event.target.value);
        // Reset card details and validation messages when payment method changes
        if (event.target.value !== 'card') {
            setCardNumber('');
            setExpiryDate('');
            setCvv('');
            setValidationMessage({
                cardNumber: '',
                expiryDate: '',
                cvv: ''
            });
        }
    };

    const validateCardDetails = () => {
        let isValid = true;
        const newValidationMessage = {
            cardNumber: '',
            expiryDate: '',
            cvv: ''
        };

        // Validate card number (must be 16 digits, formatted as XXXX XXXX XXXX XXXX)
        const cleanedCardNumber = cardNumber.replace(/\s+/g, ''); // Remove spaces
        if (!cleanedCardNumber.match(/^\d{16}$/)) {
            newValidationMessage.cardNumber = 'Please enter a valid card number (16 digits).';
            isValid = false;
        }

        // Validate expiry date (MM/YY format)
        const [month, year] = expiryDate.split('/');
        if (!expiryDate.match(/^\d{2}\/\d{2}$/) || (parseInt(month) < 1 || parseInt(month) > 12)) {
            newValidationMessage.expiryDate = 'Please enter a valid expiry date (format: MM/YY, month must be 01-12).';
            isValid = false;
        }

        // Validate CVV (3 digits)
        if (!cvv.match(/^\d{3}$/)) {
            newValidationMessage.cvv = 'Please enter a valid CVV (3 digits).';
            isValid = false;
        }

        setValidationMessage(newValidationMessage);
        return isValid;
    };

    const handlePay = () => {
        if (paymentMethod !== 'card' || validateCardDetails()) {
            // Proceed with payment logic
            localStorage.removeItem('cartData');
            setOrderPlaced(true);
        }
    };

    const handleCardNumberChange = (e) => {
        const value = e.target.value.replace(/\D/g, ''); // Allow only digits
        const formattedValue = value.replace(/(\d{4})(?=\d)/g, '$1 '); // Format as XXXX XXXX XXXX XXXX
        setCardNumber(formattedValue.trim()); // Remove trailing space
        // Clear validation message on input change
        if (validationMessage.cardNumber) {
            setValidationMessage((prev) => ({ ...prev, cardNumber: '' }));
        }
    };

    const handleExpiryDateChange = (e) => {
        // Allow only digits, limit to 4 characters, and auto-add "/" after 2 digits
        const value = e.target.value.replace(/\D/g, '').slice(0, 4); // Only keep up to 4 digits
        let formattedValue = value;
        if (value.length > 2) {
            formattedValue = value.slice(0, 2) + '/' + value.slice(2);
        }
        setExpiryDate(formattedValue);
        // Clear validation message on input change
        if (validationMessage.expiryDate) {
            setValidationMessage((prev) => ({ ...prev, expiryDate: '' }));
        }
    };

    const handleCvvChange = (e) => {
        const value = e.target.value.replace(/\D/g, '').slice(0, 3); // Allow only 3 digits
        setCvv(value);
        // Clear validation message on input change
        if (validationMessage.cvv) {
            setValidationMessage((prev) => ({ ...prev, cvv: '' }));
        }
    };

    return (
        <>
            <Header />
            <div className="payment-page mt-5 mb-5">
                <div className="container">
                    {cartData?.length > 0 ? (
                        <>
                            {orderPlaced ? (
                                <div className="order-placed-container">
                                    <div>
                                        <img
                                            src={successImage}
                                            alt=""
                                            width="132px"
                                            height="132px"
                                            className="img-fluid"
                                        />
                                    </div>
                                    <div>
                                        <h3>Order placed successfully</h3>
                                        <Link to="/">Continue Shopping</Link>
                                    </div>
                                </div>
                            ) : (
                                <>
                                    <h2>Choose Your Payment Method</h2>

                                    <div className="payment-options">
                                        <label>
                                            <input
                                                type="radio"
                                                value="cod"
                                                checked={paymentMethod === 'cod'}
                                                onChange={handlePaymentChange}
                                            />
                                            Cash on Delivery
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                value="pickup"
                                                checked={paymentMethod === 'pickup'}
                                                onChange={handlePaymentChange}
                                            />
                                            Self Pickup
                                        </label>

                                        <label>
                                            <input
                                                type="radio"
                                                value="card"
                                                checked={paymentMethod === 'card'}
                                                onChange={handlePaymentChange}
                                            />
                                            Credit/Debit Card
                                        </label>
                                    </div>

                                    {/* Show card details form if payment method is 'card' */}
                                    {paymentMethod === 'card' && (
                                        <div className="card-details">
                                            <h3>Card Details</h3>
                                            <label>
                                                Card Number
                                                <input
                                                    type="text"
                                                    placeholder="1234 5678 9012 3456"
                                                    value={cardNumber}
                                                    onChange={handleCardNumberChange}
                                                    maxLength={19}
                                                    required
                                                />
                                                {validationMessage.cardNumber && (
                                                    <div className="error-message" style={{ color: 'red' }}>
                                                        {validationMessage.cardNumber}
                                                    </div>
                                                )}
                                            </label>
                                            <label>
                                                Expiry Date
                                                <input
                                                    type="text"
                                                    placeholder="MM/YY"
                                                    value={expiryDate}
                                                    onChange={handleExpiryDateChange}
                                                    required
                                                />
                                                {validationMessage.expiryDate && (
                                                    <div className="error-message" style={{ color: 'red' }}>
                                                        {validationMessage.expiryDate}
                                                    </div>
                                                )}
                                            </label>
                                            <label>
                                                CVV
                                                <input
                                                    type="text"
                                                    placeholder="123"
                                                    value={cvv}
                                                    onChange={handleCvvChange}
                                                    required
                                                />
                                                {validationMessage.cvv && (
                                                    <div className="error-message" style={{ color: 'red' }}>
                                                        {validationMessage.cvv}
                                                    </div>
                                                )}
                                            </label>
                                        </div>
                                    )}

                                    <button className="pay-button" onClick={handlePay}>
                                        Pay
                                    </button>
                                </>
                            )}
                        </>
                    ) : (
                        <>
                            <div>No items in your cart, keep shopping</div>
                            <Link to="/">Go to Homepage</Link>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Payment;
