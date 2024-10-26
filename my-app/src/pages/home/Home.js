import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import Categories from '../../components/categories/Categories';


const Home = () => {

    return (
        <>
            <Header />
            <Carousel />
            <Categories />
            <Footer />
        </>
    );
};

export default Home;
