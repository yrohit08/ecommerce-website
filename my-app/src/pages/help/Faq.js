import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';


const Faq = () => {
    return (
        <>
        <Header />
            <div class="container mt-5">
                <h2>Frequently Asked Questions (FAQ)</h2>

                <div class="accordion" id="faqAccordion">
                    <div class="card">
                        <div class="card-header" id="headingOne">
                            <h2 class="mb-0">
                                <button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    How do I track my order?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#faqAccordion">
                            <div class="card-body">
                                Once your order is shipped, you will receive an email with a tracking number. You can use this number to track your order via our website.
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingTwo">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    What are the shipping charges?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#faqAccordion">
                            <div class="card-body">
                                Standard shipping is free for orders over $50. Express and same-day delivery options are available for an additional charge, which is calculated at checkout.
                            </div>
                        </div>
                    </div>

                    <div class="card">
                        <div class="card-header" id="headingThree">
                            <h2 class="mb-0">
                                <button class="btn btn-link collapsed" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    How do I return a product?
                                </button>
                            </h2>
                        </div>
                        <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#faqAccordion">
                            <div class="card-body">
                                To return a product, please contact our customer service team. We will provide you with a return shipping label and instructions.
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <footer class="bg-light text-center py-3">
                <p>&copy; 2024 E-Cart. All rights reserved.</p>
            </footer>
            <Footer />
        </>
    )
}

export default Faq;
