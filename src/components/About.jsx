import React from 'react'
import Header from './Header'
import Footer from './Footer'

function About() {
    return (
        <div>
            <Header />
          
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
                    <h1 className="display-4 fw-bold">About Us</h1>
                    <p className="lead">Your ride. Our responsibility.</p>
                </div>
            </section>

            <section className="py-5 bg-white">
                <div className="container text-center">
                    <h2 className="fw-bold mb-5">Why QuickCab?</h2>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <i className="bi bi-clock-history text-primary fs-1"></i>
                            <h5 className="mt-3">Punctuality</h5>
                            <p className="text-muted">Every ride arrives right on time.</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-shield-check text-primary fs-1"></i>
                            <h5 className="mt-3">Safety First</h5>
                            <p className="text-muted">Background-checked drivers, every time.</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-wallet2 text-primary fs-1"></i>
                            <h5 className="mt-3">Affordable Rates</h5>
                            <p className="text-muted">Transparent pricing with no hidden charges.</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-phone text-primary fs-1"></i>
                            <h5 className="mt-3">Easy Booking</h5>
                            <p className="text-muted">Book from mobile or desktop in seconds.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-primary text-white">
                <div className="container text-center">
                    <h2 className="fw-bold mb-4">Our Mission & Vision</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <p className="fs-5">
                                QuickCab aims to be India’s most reliable mobility solution by providing fast, safe, and affordable rides.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-light text-dark">
                <div className="container">
                    <h2 className="fw-bold text-center mb-5">Powered by People & Technology</h2>
                    <div className="row align-items-center">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="/about-img/team.jpg"
                                className="img-fluid rounded shadow"
                                alt="QuickCab Technology Team"
                            />
                        </div>
                        <div className="col-md-6">
                            <ul className="list-unstyled fs-5">
                                <li className="mb-3">
                                    <i className="bi bi-people-fill text-primary me-2 fs-4"></i>
                                    Dedicated support and operations team
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-cpu-fill text-primary me-2 fs-4"></i>
                                    Real-time route optimization with smart algorithms
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-shield-lock-fill text-primary me-2 fs-4"></i>
                                    Secure platform built with user safety in mind
                                </li>
                                <li className="mb-3">
                                    <i className="bi bi-phone-fill text-primary me-2 fs-4"></i>
                                    Seamless experience across all devices
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-primary text-white">
                <div className="container">
                    <div className="row align-items-center gx-5">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <img
                                src="/about-img/story-abstract.png"
                                alt="QuickCab Story"
                                className="img-fluid"
                            />
                        </div>
                        <div className="col-md-6">
                            <h2 className="fw-bold mb-3">Our Story</h2>
                            <p className="fs-5">
                                QuickCab was born from a vision to make commuting stress-free for everyone.
                                Starting with just a few drivers, we’ve grown into a trusted platform connecting thousands of riders with reliable cabs every day.
                            </p>
                            <p className="fs-5">
                                We’re driven by technology and guided by human values, constantly improving our service to keep up with your expectations.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-5 bg-white text-dark">
                <div className="container text-center">
                    <h2 className="fw-bold mb-5">Driving Impact</h2>
                    <div className="row g-4">
                        <div className="col-md-3">
                            <i className="bi bi-car-front-fill text-primary fs-1 mb-2"></i>
                            <h5>10,000+</h5>
                            <p className="text-muted">Successful Rides</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-person-check-fill text-primary fs-1 mb-2"></i>
                            <h5>5,000+</h5>
                            <p className="text-muted">Happy Customers</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-geo-alt-fill text-primary fs-1 mb-2"></i>
                            <h5>50+ Cities</h5>
                            <p className="text-muted">Expanding Reach</p>
                        </div>
                        <div className="col-md-3">
                            <i className="bi bi-clock-fill text-primary fs-1 mb-2"></i>
                            <h5>24/7</h5>
                            <p className="text-muted">Available Service</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>

    )
}

export default About
