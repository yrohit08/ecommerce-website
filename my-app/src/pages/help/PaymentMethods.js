import React from 'react';


const PaymentMethods = () => {
    return (
        <>
            <div class="container mt-5">
                <h2>Payment Methods</h2>
                <p>At E-Cart, we offer a variety of secure and easy-to-use payment options. You can choose from the following:</p>
                <ul>
                    <li>Credit/Debit Cards (Visa, MasterCard, American Express)</li>
                    <li>PayPal</li>
                    <li>Apple Pay and Google Pay</li>
                    <li>Bank Transfer</li>
                    <li>Cash on Delivery (available for select locations)</li>
                </ul>
                <p>All transactions are processed securely, ensuring that your information remains private and protected.</p>
            </div>

            <footer class="bg-light text-center py-3">
                <p>&copy; 2024 E-Cart. All rights reserved.</p>
            </footer>
        </>
    )
}

export default PaymentMethods;
