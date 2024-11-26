import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import ComingSoon from '../comingsoon/ComingSoon';
import "./Department.css";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";

const Department = () => {
    const { department } = useParams();
    let products = useProducts();
    products = products.filter((product) => product.department == department);
    const navigate = useNavigate();

    const [cartData, setCartData] = useState(JSON.parse(localStorage.getItem('cartData')) || []);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [quantities, setQuantities] = useState({}); // State to track quantities of each product

    const departmentDescriptions = {
        electronics: 'Browse the latest gadgets, smartphones, and electronic accessories.',
        fashion: 'Explore the newest trends in clothing, footwear, and accessories.',
        //homeAppliances: 'Discover the latest in kitchen gadgets, cookware, and appliances to enhance your culinary adventures.',
        // Add more departments as needed
    };

    const departmentDescription = departmentDescriptions[department.toLowerCase()] || 'Browse our products';

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
    };

    const adjustQuantity = (product, delta) => {
        if (!product.isInStock) return; // Ignore if product is out of stock
        const newQuantity = (quantities[product.id] || 0) + delta;

        if (newQuantity < 0) return; // Ensure quantity doesn't go negative

        // Update local quantity state
        setQuantities(prevQuantities => ({
            ...prevQuantities,
            [product.id]: newQuantity
        }));

        // Find the item in the cart or add a new one
        const existingItemIndex = cartData.findIndex(item => item.id === product.id);
        let updatedCart = [...cartData];

        if (existingItemIndex !== -1) {
            if (newQuantity === 0) {
                updatedCart.splice(existingItemIndex, 1); // Remove item from cart if quantity is zero
            } else {
                updatedCart[existingItemIndex] = { ...updatedCart[existingItemIndex], quantity: newQuantity };
            }
        } else if (newQuantity > 0) {
            updatedCart.push({ ...product, quantity: newQuantity });
        }

        setCartData(updatedCart);
        localStorage.setItem('cartData', JSON.stringify(updatedCart));
        setShowSuccessMessage(true);
        setTimeout(() => setShowSuccessMessage(false), 2000);
    };

    const [sortBy, setSortBy] = useState('default');
    const [priceFilter, setPriceFilter] = useState('all');
    const [categoryFilter, setCategoryFilter] = useState('all');
    const [filterMenuVisible, setFilterMenuVisible] = useState(false);

    const sortProducts = () => {
        const sortedProducts = [...products];
        if (sortBy === 'lowToHigh') {
            sortedProducts.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'highToLow') {
            sortedProducts.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'nameAsc') {
            sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
        } else if (sortBy === 'nameDesc') {
            sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
        }
        return sortedProducts;
    };

    const filteredProducts = sortProducts().filter((product) => {
        let priceMatch = true;
        let categoryMatch = true;

        if (priceFilter !== 'all') {
            const [minPrice, maxPrice] = priceFilter.split('-').map(Number);
            priceMatch = product.price >= minPrice && product.price <= maxPrice;
        }

        if (categoryFilter !== 'all') {
            categoryMatch = product.category === categoryFilter;
        }

        return priceMatch && categoryMatch;
    });

    if (products.length <= 0) return <><ComingSoon /></>;

    return (
        <>
            <Header />
            <Breadcrumb department={department} />

            <div className="filter-icon" onClick={() => setFilterMenuVisible(!filterMenuVisible)}>
                <i className="fas fa-filter"></i>
            </div>

            {filterMenuVisible && (
                <div id="filterMenu">
                    <h5>Filter by Price</h5>
                    <select className="form-control" onChange={(e) => setPriceFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="0-500">$0 - $500</option>
                        <option value="500-1000">$500 - $1000</option>
                        <option value="1000-1500">$1000 - $1500</option>
                    </select>

                    <h5 className="mt-3">Filter by Category</h5>
                    <select className="form-control" onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="all">All</option>
                        <option value="mobile">Mobile</option>
                        <option value="laptop">Laptop</option>
                        <option value="headphones">Headphones</option>
                        <option value="Smart-TV">Smart-TV</option>
                    </select>
                </div>
            )}

            <div className="container">
                <h2 className="text-center text-capitalize">{department}</h2>
                <p className="text-center">{departmentDescription}</p>

                <div className="text-center mb-4">
                    <label htmlFor="sortSelect" className="pr-2">Sort by: </label>
                    <select
                        id="sortSelect"
                        className="form-control d-inline-block w-auto"
                        onChange={(e) => setSortBy(e.target.value)}
                    >
                        <option value="default">Default</option>
                        <option value="lowToHigh">Price: Low to High</option>
                        <option value="highToLow">Price: High to Low</option>
                        <option value="nameAsc">Name: A to Z</option>
                        <option value="nameDesc">Name: Z to A</option>
                    </select>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row product-card" id="productList">
                    {filteredProducts.map((product) => (
                        <div className="col-md-4" key={product.id} data-price={product.price} data-name={product.name} data-category={product.category}>
                            <div className="card">
                                <div>
                                    {product.isNewArrival && <span className="label new-arrival">New Arrival</span>}
                                    {product.isBestSeller && <span className="label best-seller">Best Seller</span>}
                                    {!product.isInStock && <span className="label out-of-stock">Out of Stock</span>}
                                </div>
                                <img src={product.image} className="card-img-top" alt={product.name} width="380px" height="350px" onClick={() => handleProductClick(product.id)} />
                                <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">${product.price}</p>
                                    <button onClick={() => handleProductClick(product.id)} className="btn btn-primary">More Details</button>
                                    <div className="quantity-controls">
                                        <button disabled={!product.isInStock || quantities[product.id] === 0} onClick={() => adjustQuantity(product, -1)}>-</button>
                                        <span>{quantities[product.id] || 0}</span>
                                        <button disabled={!product.isInStock} onClick={() => adjustQuantity(product, 1)}>+</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {showSuccessMessage && (
                <div className="message">
                    Item updated in cart!
                </div>
            )}
            <Footer />
        </>
    );
};

export default Department;
