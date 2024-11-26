import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { AuthContext } from '../../context/AuthContext';
import "./Cart.css";

const Cart = () => {
    const navigate = useNavigate();
    const taxRate = 0.075;
    const shippingCharge = 10; // Fixed shipping charge
    const [cartData, setCartData] = useState([]);
    const { isLoggedIn } = useContext(AuthContext);

    useEffect(() => {
        const storedCartData = JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(storedCartData);
    }, []);

    const saveCart = (updatedCart) => {
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
    };

    const calculateTotals = () => {
        const subtotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * taxRate;
        const grandTotal = subtotal + tax + shippingCharge; // Add shipping charge
        return { subtotal, tax, shippingCharge, grandTotal };
    };

    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cartData];
        updatedCart[index].quantity = quantity;
        setCartData(updatedCart);
        saveCart(updatedCart);
    };

    const removeItem = (index) => {
        const updatedCart = cartData.filter((_, i) => i !== index);
        setCartData(updatedCart);
        saveCart(updatedCart);
    };

    const handleCheckout = () => {
        if (isLoggedIn) navigate('/payment');
        else {
            const queryParams = new URLSearchParams({ redirectTo: 'cart' });
            navigate(`/login?${queryParams.toString()}`)
        }
    };

    const calculateDeliveryDate = () => {
        const today = new Date();
        let deliveryDate = new Date(today);

        let addedDays = 0;
        while (addedDays < 7) {
            deliveryDate.setDate(deliveryDate.getDate() + 1);
            if (deliveryDate.getDay() !== 0 && deliveryDate.getDay() !== 6) { // Skip weekends
                addedDays++;
            }
        }
        return deliveryDate.toLocaleDateString(); // Format date as a readable string
    };

    const { subtotal, tax, grandTotal } = calculateTotals();
    const estimatedDeliveryDate = calculateDeliveryDate(); // Calculate the delivery date

    return (
        <>
            <Header />
            <div className="container mt-5 mb-5">
                <h2>Your Shopping Cart</h2>
                {
                    cartData.length > 0 ?
                        <>
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th>Remove</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartData.map((item, index) => {
                                        const total = item.price * item.quantity;
                                        return (
                                            <tr key={item.id}>
                                                <td>
                                                    <img src={item.image} alt={item.name} className="img-fluid cart-product-image" /> {item.name}
                                                </td>
                                                <td className="price">${item.price.toFixed(2)}</td>
                                                <td>
                                                    <input
                                                        type="number"
                                                        className="form-control quantity"
                                                        value={item.quantity}
                                                        min="1"
                                                        onChange={(e) => updateQuantity(index, parseInt(e.target.value))}
                                                    />
                                                </td>
                                                <td className="total">${total.toFixed(2)}</td>
                                                <td>
                                                    <button className="btn btn-remove" onClick={() => removeItem(index)}>Remove</button>
                                                </td>
                                            </tr>
                                        );
                                    })}
                                </tbody>
                            </table>

                            <div className="cart-summary">
                                <h5>Cart Summary</h5>
                                <p><strong>Subtotal:</strong> <span id="subtotal">${subtotal.toFixed(2)}</span></p>
                                <p><strong>Tax (7.5%):</strong> <span id="tax">${tax.toFixed(2)}</span></p>
                                <p><strong>Shipping:</strong> <span id="shipping">${shippingCharge.toFixed(2)}</span></p>
                                <p><strong>Total:</strong> <span id="grand-total">${grandTotal.toFixed(2)}</span></p>

                                <p><strong>Estimated Delivery:</strong> <span id="delivery-date">{estimatedDeliveryDate}</span></p> {/* Add this line */}

                                <Link to="/" className="btn btn-success btn-lg">Keep Shopping</Link>
                                <button className="btn btn-success btn-lg ml-2" onClick={handleCheckout}>Proceed to Checkout</button>
                            </div>
                        </>
                        : <div>No items in your cart, keep shopping</div>
                }
            </div>
            <Footer />
        </>
    );
};

export default Cart;
