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
    const [cartData, setCartData] = useState([]);
    const { isLoggedIn } = useContext(AuthContext);


    // Load cart data from localStorage
    useEffect(() => {
        const storedCartData = JSON.parse(localStorage.getItem('cartData')) || [];
        setCartData(storedCartData);
    }, []);

    // Save cart data to localStorage
    const saveCart = (updatedCart) => {
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
    };

    // Calculate subtotal, tax, and grand total
    const calculateTotals = () => {
        const subtotal = cartData.reduce((acc, item) => acc + item.price * item.quantity, 0);
        const tax = subtotal * taxRate;
        const grandTotal = subtotal + tax;
        return { subtotal, tax, grandTotal };
    };

    // Render cart items
    const renderCart = () => {
        return cartData.map((item, index) => {
            const total = item.price * item.quantity;

            return (
                <>

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
                </>
            );
        });
    };

    // Update quantity in cart
    const updateQuantity = (index, quantity) => {
        const updatedCart = [...cartData];
        updatedCart[index].quantity = quantity;
        setCartData(updatedCart);
        saveCart(updatedCart);
    };

    // Remove an item from the cart
    const removeItem = (index) => {
        const updatedCart = cartData.filter((_, i) => i !== index);
        setCartData(updatedCart);
        saveCart(updatedCart);
    };

    // Handle checkout
    const handleCheckout = () => {
        if(isLoggedIn) navigate('/payment'); // Redirect to payment page
        else {
            const queryParams = new URLSearchParams({ redirectTo: 'cart' });
            navigate(`/login?${queryParams.toString()}`)
        }
    };

    const { subtotal, tax, grandTotal } = calculateTotals();

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
                                    {renderCart()}
                                </tbody>
                            </table>

                            {/* Cart Summary */}
                            <div className="cart-summary">
                                <h5>Cart Summary</h5>
                                <p><strong>Subtotal:</strong> <span id="subtotal">${subtotal.toFixed(2)}</span></p>
                                <p><strong>Tax (7.5%):</strong> <span id="tax">${tax.toFixed(2)}</span></p>
                                <p><strong>Total:</strong> <span id="grand-total">${grandTotal.toFixed(2)}</span></p>

                                {/* Button Group for Checkout and Keep Shopping */}
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
