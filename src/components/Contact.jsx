import React from 'react';
import Header from './Header';
import Footer from './Footer';

function Contact() {
    return (
        <div className="contact-page">
            <Header />

            {/* Hero Poster */}
            <section
                className="d-flex align-items-center justify-content-center text-white text-center"
                style={{
                    backgroundImage: "url('/about-img/about-poster.jpg')",
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    height: '96vh',
                }}
            >
                <div className="bg-dark bg-opacity-50 p-4 rounded">
                    <h1 className="display-4 fw-bold">Contact Us</h1>
                    <p className="lead">Your ride. Our responsibility.</p>
                </div>
            </section>


            {/* Contact Info Cards */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="row g-4 text-center">
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-geo-alt-fill fs-1 text-primary mb-3"></i>
                                    <h5 className="fw-bold">Our Office</h5>
                                    <p>123 Teal Road, QuickCab HQ, Mumbai, India</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-envelope-fill fs-1 text-primary mb-3"></i>
                                    <h5 className="fw-bold">Email Us</h5>
                                    <p>support@quickcab.in</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card h-100 shadow-sm border-0">
                                <div className="card-body">
                                    <i className="bi bi-telephone-fill fs-1 text-primary mb-3"></i>
                                    <h5 className="fw-bold">Call Us</h5>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Contact Form and Map Section */}
            <section className="py-5 bg-white text-dark">
                <div className="container">
                    <div className="row gx-5 gy-5 align-items-stretch">

                        {/* Contact Form */}
                        <div className="col-lg-6 d-flex">
                            <div className="w-100 d-flex flex-column justify-content-between">
                                <h3 className="mb-4 fw-bold text-primary">Send Us a Message</h3>
                                <form className="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div className="flex-grow-1">
                                        <div className="row">
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold">First Name</label>
                                                <input type="text" className="form-control" placeholder="Your first name" />
                                            </div>
                                            <div className="col-md-6 mb-3">
                                                <label className="form-label fw-semibold">Last Name</label>
                                                <input type="text" className="form-control" placeholder="Your last name" />
                                            </div>
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Email</label>
                                            <input type="email" className="form-control" placeholder="you@example.com" />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Mobile Number</label>
                                            <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" />
                                        </div>
                                        <div>
                                            <label className="form-label fw-semibold">Message</label>
                                            <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
                                        </div>
                                    </div>
                                    <div className="mt-3">
                                        <button type="submit" className="btn btn-custom px-4 fw-semibold w-100">Send Message</button>
                                    </div>
                                </form>
                            </div>
                        </div>

                        {/* Map */}
                        <div className="col-lg-6 d-flex">
                            <div className="w-100 d-flex flex-column justify-content-between">
                                <h3 className="mb-4 fw-bold text-primary">Our Location</h3>
                                <div className="flex-grow-1">
                                    <iframe
                                        title="Google Map"
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.1160988268!2d72.7411012624073!3d19.082522317263154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b63b3586e4f5%3A0xf28f96a71fd2c6f0!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1692285530839!5m2!1sen!2sin"
                                        width="100%"
                                        height="100%"
                                        style={{ border: 0, minHeight: '400px' }}
                                        allowFullScreen=""
                                        loading="lazy"
                                    ></iframe>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}

export default Contact;
