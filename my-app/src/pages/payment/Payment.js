import React, { useContext, useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import "./Payment.css";
import successImage from "../../images/green-check-icon.jpg";

const Payment = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const [cartData, setCartData] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState("cod"); // Default to Cash on Delivery
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Card details state
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  // Shipping Address state
  const [shippingAddress, setShippingAddress] = useState({
    address: "",
    city: "",
    zipCode: "",
  });

  const [validationMessage, setValidationMessage] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    city: "",
    zipCode: "",
  });

  // Store address (can also be fetched dynamically if needed)
  const storeAddress = "123 Store St, Shop City, SC 12345";

  useEffect(() => {
    const storedCartData = JSON.parse(localStorage.getItem("cartData")) || [];
    setCartData(storedCartData);
  }, []);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login");
    }
  }, [isLoggedIn, navigate]);

  const handlePaymentChange = (event) => {
    setPaymentMethod(event.target.value);
    if (event.target.value !== "card") {
      setCardNumber("");
      setExpiryDate("");
      setCvv("");
      setValidationMessage({
        cardNumber: "",
        expiryDate: "",
        cvv: "",
        city: "",
        zipCode: "",
      });
    }
  };

  const handleShippingAddressChange = (e) => {
    const { name, value } = e.target;

    if (name === "city") {
      const regex = /^[a-zA-Z\s]*$/;
      if (regex.test(value)) {
        setShippingAddress((prev) => ({ ...prev, [name]: value }));
        setValidationMessage((prev) => ({ ...prev, city: "" }));
      } else {
        setValidationMessage((prev) => ({
          ...prev,
          city: "City can only contain alphabets.",
        }));
      }
    } else if (name === "zipCode") {
      const regex = /^[0-9]*$/;
      if (regex.test(value)) {
        setShippingAddress((prev) => ({ ...prev, [name]: value }));
        setValidationMessage((prev) => ({ ...prev, zipCode: "" }));
      } else {
        setValidationMessage((prev) => ({
          ...prev,
          zipCode: "ZIP Code can only contain numbers.",
        }));
      }
    } else {
      setShippingAddress((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateCardDetails = () => {
    let isValid = true;
    const newValidationMessage = {
      cardNumber: "",
      expiryDate: "",
      cvv: "",
    };

    const cleanedCardNumber = cardNumber.replace(/\s+/g, "");
    if (!cleanedCardNumber.match(/^\d{16}$/)) {
      newValidationMessage.cardNumber = "Please enter a valid card number (16 digits).";
      isValid = false;
    }

    const [month, year] = expiryDate.split("/");
    if (
      !expiryDate.match(/^\d{2}\/\d{2}$/) ||
      parseInt(month) < 1 ||
      parseInt(month) > 12
    ) {
      newValidationMessage.expiryDate = "Please enter a valid expiry date (MM/YY).";
      isValid = false;
    }

    if (!cvv.match(/^\d{3}$/)) {
      newValidationMessage.cvv = "Please enter a valid CVV (3 digits).";
      isValid = false;
    }

    setValidationMessage(newValidationMessage);
    return isValid;
  };

  const handlePay = () => {
    if (paymentMethod === "card" && !validateCardDetails()) {
      return;
    }
    localStorage.removeItem("cartData");
    setOrderPlaced(true);
  };

  const handleCardNumberChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    const formattedValue = value.replace(/(\d{4})(?=\d)/g, "$1 ");
    setCardNumber(formattedValue.trim());
    if (validationMessage.cardNumber) {
      setValidationMessage((prev) => ({ ...prev, cardNumber: "" }));
    }
  };

  const handleExpiryDateChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 4);
    let formattedValue = value;

    if (value.length > 2) {
      const month = parseInt(value.slice(0, 2), 10);
      if (month > 12 || month < 1) {
        setValidationMessage((prev) => ({
          ...prev,
          expiryDate: "Month must be between 01 and 12.",
        }));
        return;
      } else {
        setValidationMessage((prev) => ({ ...prev, expiryDate: "" }));
      }
      formattedValue = value.slice(0, 2) + "/" + value.slice(2);
    }

    setExpiryDate(formattedValue);
  };

  const handleCvvChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 3);
    setCvv(value);
    if (validationMessage.cvv) {
      setValidationMessage((prev) => ({ ...prev, cvv: "" }));
    }
  };

  const isFormValid = () => {
    if (paymentMethod === "pickup") {
      // For "Self Pickup" we only need the store address, no other input is needed
      return true;
    }

    if (paymentMethod === "cod") {
      // For Cash on Delivery, we just need a shipping address
      return (
        shippingAddress.address &&
        shippingAddress.city &&
        shippingAddress.zipCode
      );
    }

    if (paymentMethod === "card") {
      // For Credit Card, we need card details as well
      return (
        cardNumber &&
        expiryDate &&
        cvv &&
        shippingAddress.address &&
        shippingAddress.city &&
        shippingAddress.zipCode
      );
    }

    return false;
  };

  return (
    <>
      <Header />
      <div className="payment-page">
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
                        checked={paymentMethod === "cod"}
                        onChange={handlePaymentChange}
                      />
                      Cash on Delivery
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="pickup"
                        checked={paymentMethod === "pickup"}
                        onChange={handlePaymentChange}
                      />
                      Self Pickup
                    </label>

                    <label>
                      <input
                        type="radio"
                        value="card"
                        checked={paymentMethod === "card"}
                        onChange={handlePaymentChange}
                      />
                      Credit/Debit Card
                    </label>
                  </div>

                  {paymentMethod !== "pickup" && (
                    <div className="shipping-address">
                      <h3>Shipping Address</h3>
                      <label>
                        Address:
                        <input
                          type="text"
                          name="address"
                          value={shippingAddress.address}
                          onChange={handleShippingAddressChange}
                          required
                        />
                      </label>
                      <label>
                        City:
                        <input
                          type="text"
                          name="city"
                          value={shippingAddress.city}
                          onChange={handleShippingAddressChange}
                          required
                        />
                        {validationMessage.city && (
                          <div className="error-message" style={{ color: "red" }}>
                            {validationMessage.city}
                          </div>
                        )}
                      </label>
                      <label>
                        ZIP Code:
                        <input
                          type="text"
                          name="zipCode"
                          value={shippingAddress.zipCode}
                          onChange={handleShippingAddressChange}
                          required
                        />
                        {validationMessage.zipCode && (
                          <div className="error-message" style={{ color: "red" }}>
                            {validationMessage.zipCode}
                          </div>
                        )}
                      </label>
                    </div>
                  )}

                  {paymentMethod === "card" && (
                    <div className="card-details">
                      <h3>Card Details</h3>
                      <label>
                        Card Number
                        <input
                          type="text"
                          placeholder="1234 1234 1234 1234"
                          value={cardNumber}
                          onChange={handleCardNumberChange}
                          required
                        />
                        {validationMessage.cardNumber && (
                          <div className="error-message" style={{ color: "red" }}>
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
                          <div className="error-message" style={{ color: "red" }}>
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
                          <div className="error-message" style={{ color: "red" }}>
                            {validationMessage.cvv}
                          </div>
                        )}
                      </label>
                    </div>
                  )}

                  {paymentMethod === "pickup" && (
                    <div className="store-address">
                      <h3>Store Address</h3>
                      <p>{storeAddress}</p>
                    </div>
                  )}

                  <button
                    className="pay-button"
                    onClick={handlePay}
                    disabled={!isFormValid()}
                  >
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
