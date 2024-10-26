import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProducts } from '../../context/ProductContext';
import "./Search.css";


const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);
    const navigate = useNavigate();
    let products = useProducts();


    const handleSearchChange = (e) => {
        const input = e.target.value;
        setSearchInput(input);

        if (input) {
            const filtered = products.filter(product => 
                product.name.toLowerCase().includes(input.toLowerCase())
            );
            setFilteredProducts(filtered);
        } else {
            setFilteredProducts([]);
        }
    };

    const handleProductClick = (id) => {
        navigate(`/product/${id}`);
        setSearchInput('');
        setFilteredProducts([]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Prevent default form submission
    };

    return (
        <form className="form-inline my-2 my-lg-0 ml-auto" onSubmit={handleSubmit}>
            <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search for a product..."
                aria-label="Search"
                value={searchInput}
                onChange={handleSearchChange}
            />
            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">
                <i className="fas fa-search"></i>
            </button>
            {filteredProducts.length > 0 && (
                <ul className="search-results">
                    {filteredProducts.map((product) => (
                        <li key={product.id} onClick={() => handleProductClick(product.id)}>
                            {product.name}
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
};

export default SearchBar;
