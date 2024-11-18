import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import { useNavigate } from 'react-router-dom';
import PageNotFound from '../pagenotfound/PageNotFound';
import "./Product.css";
import { TransformComponent, TransformWrapper } from "react-zoom-pan-pinch";
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share';

const Product = () => {

    const { id } = useParams();
    const products = useProducts();
    const product = products.find((product) => product.id === parseInt(id));
    const navigate = useNavigate();

    const [cartData, setCartData] = useState(
        JSON.parse(localStorage.getItem('cartData')) || []
    );
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [itemCount, setItemCount] = useState(0);

    useEffect(() => {
        let shoppingCartData = JSON.parse(localStorage.getItem('cartData')) || [];
        const existingItemCount = shoppingCartData.find(
            (cartItem) => cartItem.id === product.id
        )?.quantity;
        if (existingItemCount > 0) setItemCount(existingItemCount);
    }, []);

    const addToCart = (item) => {
        const existingItemIndex = cartData.findIndex(
            (cartItem) => cartItem.id === item.id
        );

        let updatedCart;
        if (existingItemIndex !== -1) {
            updatedCart = cartData.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    let quantity = (cartItem.quantity || 0) + 1;
                    setItemCount(quantity);
                    return { ...cartItem, quantity: quantity }
                } else {
                    return cartItem
                }
            }
            );
        } else {
            item.quantity = 1;
            updatedCart = [...cartData, item];
            setItemCount(1);
        }

        setCartData(updatedCart);
        localStorage.setItem('cartData', JSON.stringify(updatedCart));

        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };
    const decreaseItemCount = () => {
        const existingItemIndex = cartData.findIndex(
            (cartItem) => cartItem.id === product.id
        );

        let updatedCart;
        if (existingItemIndex !== -1) {
            updatedCart = cartData.map((cartItem, index) => {
                if (index === existingItemIndex) {
                    let quantity = (cartItem.quantity || 1) - 1;
                    setItemCount(quantity);
                    return { ...cartItem, quantity: quantity }
                } else {
                    return cartItem
                }
            }
            );
        }
        setCartData(updatedCart);
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
    };
    const handleBuyNow = (item) => {
        addToCart(item);
        navigate('/cart'); // Redirect to payment page
    };
    if (!product) return <PageNotFound />;
    const productUrl = window.location.href;
    return (
        <>
          <Header />
            <div className="container mt-5 mb-5">
                <div className="row">
                    {/* Product Image */}
                    <div className="col-md-6">
                       <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={100}>
                        <TransformComponent>
                       
                        <img
                            src={product.image}
                            alt={product.name}
                            className="img-fluid product-image"
                        />
                        </TransformComponent>
                        </TransformWrapper>

                        <p>Double Click on the Image to Zoom in</p>
                    </div>
                    {/* Product Info */}
                    <div className="col-md-6">
                        <h2>{product.name}</h2>
                        <p className="text-muted">{product.description}</p>
                        <p className="h4">${product.price.toFixed(2)}</p>
                        <ul>

                        {product.details.provider && <li><b>Provider: </b>{product.details.provider}</li>}
                            {product.details.screenSize && <li><b>Screen size: </b>{product.details.screenSize}</li>}
                            {product.details.storage && <li><b>HD capacity: </b>{product.details.storage}</li>}
                            {product.details.ram && <li><b>RAM memory: </b>{product.details.ram}</li>}
                            {product.details.features && <li><b>Features: </b>{product.details.features}</li>}
                            {product.details.watts && <li><b>Watts: </b>{product.details.watts}</li>}
                            {product.details.model && <li><b>Model: </b>{product.details.model}</li>}
                            {product.details.brand && <li><b>Brand: </b>{product.details.brand}</li>}
                            {product.details.color && <li><b>Color: </b>{product.details.color}</li>}
                            {product.details.fabricContent && <li><b>Fabric Content: </b>{product.details.fabricContent}</li>}
                            {product.details.brand && <li><b>Brand: </b>{product.details.brand}</li>}
                            {product.details.weight && <li><b>Weight: </b>{product.details.weight}</li>}

                            
                        </ul>

                        <h5>Customer Rating:</h5>
                        <div className="stars">
                            {Array.from({ length: 5 }, (_, index) => (
                                <span key={index} className={index < product.customerRating ? "filled" : "empty"}>
                                    &#9733;
                                </span>
                            ))}
                        </div>

                        {!product.isInStock && <div className="out-of-stock-overlay">Out of Stock</div>}
                        <div>
          <FacebookShareButton url={productUrl} quote={product.name}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>
          <TwitterShareButton url={productUrl} title={product.name}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>
          <WhatsappShareButton url={productUrl} title={product.name}>
            <WhatsappIcon size={32} round />
          </WhatsappShareButton>
        </div>
                        <br />

                       

                        {/* Add to Cart Button */}
                        <div className='button-container mt-3'>
                            {itemCount > 0 ? (
                                <div className="cart-controls">
                                    <button onClick={decreaseItemCount}>-</button>
                                    <span>{itemCount}</span>
                                    <button onClick={() => addToCart(product)}>+</button>
                                </div>
                            ) : (
                                <button
                                    id="addToCartBtn"
                                    className="btn btn-primary btn-lg"
                                    onClick={() => addToCart(product)}
                                >
                                    Add to Cart
                                </button>
                            )}
                            <button
                                id="buyNowBtn"
                                className="btn btn-primary btn-lg"
                                onClick={() => handleBuyNow(product)}
                            >
                                Buy Now
                            </button>
                        </div>

                        {/* Success Message */}
                        {showSuccessMessage && (
                            <div id="successMessage" className="message">
                                Item added to cart!
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Product;