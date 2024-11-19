import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import ScrollToTop from './components/scrolltotop/ScrollToTop';


import Department from './pages/department/Department';
import Product from './pages/product/Product';
import ComingSoon from './pages/comingsoon/ComingSoon'
import Cart from './pages/cart/Cart';
import Home from './pages/home/Home';
import DeliveryInfo from './pages/help/DeliveryInfo';
import PaymentMethods from './pages/help/PaymentMethods';
import ReturnPolicy from './pages/help/ReturnPolicy';
import TandC from './pages/help/TandC';
import Faq from './pages/help/Faq';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login'
import './App.css';
import { AuthProvider } from './context/AuthContext';
import Payment from './pages/payment/Payment';
import { BASE_PATH } from './config';
import Profile from './pages/profile/Profile';


const App = () => {
  return (
    <AuthProvider>
    <ProductProvider>
    <ScrollToTop />
      <div className="wrapper">
        <main>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="*" element={<Home />} />
              <Route path="/department/:department" element={<Department />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/comingsoon" element={<ComingSoon />} />
              <Route path="/help/faq" element={<Faq />} />
              <Route path="/help/delivery" element={<DeliveryInfo />} />
              <Route path="/help/paymentinfo" element={<PaymentMethods />} />
              <Route path="/help/returns" element={<ReturnPolicy />} />
              <Route path="/help/tandc" element={<TandC />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/payment" element={<Payment />} />
            </Routes>
          </Router>
        </main>
      </div>
    </ProductProvider>
    </AuthProvider>
  );
};

export default App;
