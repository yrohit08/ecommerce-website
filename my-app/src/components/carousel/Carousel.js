import React from 'react';
import './Carousel.css';
import image1 from '../../images/home-page-01.jpg'; // Assuming images are in the 'src/images' folder
import image2 from '../../images/home-page-02.png';
import image3 from '../../images/home-page-03.png';

const Carousel = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
            </ol>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={image1} className="d-block w-100" alt="Featured Electronics Deals" />
                    <div className="carousel-caption d-none d-md-block">
                        <a href="electronics.html" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            <p>Discover the latest deals in electronics!</p>
                        </a>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={image2} className="d-block w-100" alt="Fashion Discounts Banner" />
                    <div className="carousel-caption d-none d-md-block">
                        <p>Great deals on fashion!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src={image3} className="d-block w-100" alt="Home Appliances Deals" />
                    <div className="carousel-caption d-none d-md-block">
                        <a href="coming-soon.html" target="_blank" rel="noopener noreferrer" style={{ color: 'white' }}>
                            <p>Shop top-rated products at amazing prices!</p>
                        </a>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    );
};

export default Carousel;
