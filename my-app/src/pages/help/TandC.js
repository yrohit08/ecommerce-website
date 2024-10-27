import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const TandC = () => {
    return (
        <>
         <Header />

            <div class="container mt-5">
                <h2>Terms and Conditions</h2>
                <p>Welcome to E-Cart! These terms and conditions outline the rules and regulations for the use of our website.</p>
                <h4>Usage of the Website</h4>
                <p>By accessing this website, you agree to abide by these terms and conditions. If you do not agree to any part, please do not use our website.</p>
                <h4>Intellectual Property</h4>
                <p>The content, design, and intellectual property on this site belong to E-Cart. Unauthorized use is strictly prohibited.</p>
                <h4>Purchases</h4>
                <p>When placing an order on E-Cart, you are agreeing to provide accurate and up-to-date information. We reserve the right to refuse or cancel any order at our discretion.</p>
                <p>For more detailed terms and conditions, please <a href="contact.html">contact us</a>.</p>
            </div>

            <footer class="bg-light text-center py-3">
                <p>&copy; 2024 E-Cart. All rights reserved.</p>
            </footer>
            <Footer />
        </>
    )
}

export default TandC;
