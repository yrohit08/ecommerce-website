import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const PageNotFound = () => {

  return (
      <>
          <Header />
            <div className="container mt-auto mb-5">
                <div className="row mt-5">
                    {/* Product Image */}
                    <div className="col-md-6 not-found-img mb-3">
                      <img
                          src="https://i5.walmartimages.com/dfw/4ff9c6c9-e833/k2-_1a64f49d-a131-4963-b0f2-26fd127b44e1.v1.png" alt="" width="132px" height="132px"
                          className="img-fluid"
                      />
                    </div>
                    {/* Product Info */}
                    <div className="col-md-6">
                    <h1 className="f-6 mv0">We couldn’t find this page</h1>
                    <p className="mt2 mb4 lh-heading f4">Try searching or go to  the homepage.</p>
                    <a><Link to="/">Go to Homepage</Link></a>
                    </div>
                </div>
            </div>
          <Footer />
      </>
  );
};

export default PageNotFound;
