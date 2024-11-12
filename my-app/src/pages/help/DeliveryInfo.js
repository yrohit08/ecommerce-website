import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

const DeliveryInfo = () => {
    return (
        <>
        <Header />
            <div class="container mt-5">
                <h2>Delivery Information</h2>
                <p>We aim to deliver your orders as quickly as possible. The estimated delivery time for most products is 5-7 business days.</p>
                <ul>
                    <li><strong>Standard Delivery:</strong> 5-7 business days</li>
                    <li><strong>Express Delivery:</strong> 2-3 business days (additional charges may apply)</li>
                    <li><strong>Same-Day Delivery:</strong> Available in select locations (order before 12 PM)</li>
                </ul>
                <p>Delivery times may vary depending on your location and the availability of the products. For more information, please check the delivery options during checkout.</p>
            </div>

            <footer class="bg-light text-center py-3">
                <p>&copy; 2024 E-Cart. All rights reserved.</p>
            </footer>
            <Footer />
        </>
    )
}

export default DeliveryInfo;
