import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function RideDetail() {

    const [openContact, setopenContact] = useState(false)
    const [showNum, setshowNum] = useState(false)

    const navigate = useNavigate()

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <div className="container my-5 flex-grow-1">

                <div className="text-center mb-4">
                    <img
                        src="/public/home-page-img/about-section-img.jpg"
                        alt="Car"
                        className="img-fluid rounded shadow"
                        style={{ maxHeight: '250px', objectFit: 'cover' }}
                    />
                </div>


                <h3 className="text-center fw-bold mb-5">Toyota Innova</h3>

                {/* <div className="row text-center  g-4 mb-4">
                    <div className="col-6 col-md-3 d-flex align-items-center ">
                        <i className="bi bi-person-circle text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Driver Name</h6>
                            <p className="mb-0 text-muted">John Doe</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-car-front-fill text-primary fs-2"></i>
                        <div className='px-3 text-start' >
                            <h6 className="mt-2">Vehicle Number</h6>
                            <p className="mb-0 text-muted">GJ05 AB 1234</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-people-fill text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Seats Available</h6>
                            <p className="mb-0 text-muted">4</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-currency-rupee text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Fare</h6>
                            <p className="mb-0 text-muted">₹1200</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-geo-alt-fill text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Pickup Location</h6>
                            <p className="mb-0 text-muted">CG Road, Ahmedabad</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-geo text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Drop Location</h6>
                            <p className="mb-0 text-muted">Surat Railway Station</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-calendar-event text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Ride Date</h6>
                            <p className="mb-0 text-muted">2025-08-20</p>
                        </div>
                    </div>

                    <div className="col-6 col-md-3 d-flex align-items-center">
                        <i className="bi bi-clock-fill text-primary fs-2"></i>
                        <div className='px-3 text-start'>
                            <h6 className="mt-2">Ride Time</h6>
                            <p className="mb-0 text-muted">10:30 AM</p>
                        </div>
                    </div>
                </div> */}

                <div className="row text-center g-4 mb-4">
                    <div className="col-6 col-md-3">
                        <i className="bi bi-person-circle text-primary fs-4"></i>
                        <h6 className="mt-2">Driver Name</h6>
                        <p className="mb-0 text-muted">John Doe</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-car-front-fill text-primary fs-4"></i>
                        <h6 className="mt-2">Vehicle Number</h6>
                        <p className="mb-0 text-muted">GJ05 AB 1234</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-people-fill text-primary fs-4"></i>
                        <h6 className="mt-2">Seats Available</h6>
                        <p className="mb-0 text-muted">4</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-currency-rupee text-primary fs-4"></i>
                        <h6 className="mt-2">Fare</h6>
                        <p className="mb-0 text-muted">₹1200</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-geo-alt-fill text-primary fs-4"></i>
                        <h6 className="mt-2">Pickup Location</h6>
                        <p className="mb-0 text-muted">CG Road, Ahmedabad</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-geo text-primary fs-4"></i>
                        <h6 className="mt-2">Drop Location</h6>
                        <p className="mb-0 text-muted">Surat Railway Station</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-calendar-event text-primary fs-4"></i>
                        <h6 className="mt-2">Ride Date</h6>
                        <p className="mb-0 text-muted">2025-08-20</p>
                    </div>

                    <div className="col-6 col-md-3">
                        <i className="bi bi-clock-fill text-primary fs-4"></i>
                        <h6 className="mt-2">Ride Time</h6>
                        <p className="mb-0 text-muted">10:30 AM</p>
                    </div>
                </div>

                <div className="text-center mt-5">
                    <button className="btn btn-custom btn-lg px-5" onClick={() => setopenContact(true)}>
                        View Contact Details
                    </button>
                </div>
            </div>


            {openContact && <div
                className="modal fade show"
                style={{ display: "block", backgroundColor: "rgba(0,0,0,0.5)" }}
                tabIndex="-1"
                role="dialog"
            >
                <div className="modal-dialog modal-dialog-centered modal-lg" style={{ maxWidth: "600px" }} role="document">
                    <div className="modal-content position-relative p-4">

                        <button
                            type="button"
                            className="btn-close position-absolute top-0 end-0 m-3 mt-4"
                            aria-label="Close"
                            onClick={() => setopenContact(false)}
                        ></button>


                        <div className="text-center mb-3">
                            <h4 className="fw-bold  mb-4">Ride Details</h4>
                            <img
                                src="/public/home-page-img/about-section-img.jpg"
                                alt="Driver"
                                className="rounded-circle"
                                width="80"
                                height="80"
                            />
                        </div>

                        <div className="modal-body text-center container">

                            <div className="row justify-content-center g-4 mb-4">
                                <div className="col-4 col-md-3">
                                    <i className="bi bi-person-circle text-primary fs-4"></i>
                                    <h6 className="mt-2">Driver Name</h6>
                                    <p className="mb-0 text-muted">John Doe</p>
                                </div>
                                <div className="col-4 col-md-3">
                                    <i className="bi bi-car-front text-primary fs-4"></i>
                                    <h6 className="mt-2">Vehicle</h6>
                                    <p className="mb-0 text-muted">Toyota Innova</p>
                                </div>
                                <div className="col-4 col-md-3">
                                    <i className="bi bi-clock text-primary fs-4"></i>
                                    <h6 className="mt-2">Ride Time</h6>
                                    <p className="mb-0 text-muted">10:30 AM</p>
                                </div>
                            </div>

                            <div className="row justify-content-center g-4">
                                <div className="col-6 col-md-3">
                                    <i className="bi bi-cash-stack text-primary fs-4"></i>
                                    <h6 className="mt-2">Fare</h6>
                                    <p className="mb-0 text-muted">₹1500</p>
                                </div>
                                <div className="col-6 col-md-4">
                                    <i className="bi bi-telephone text-primary fs-4"></i>
                                    <h6 className="mt-2">Contact</h6>
                                    <p className="mb-0 text-muted">+91 {showNum ? 9876543210 : "xxxxxxxxxx"}</p>
                                </div>
                            </div>

                        </div>



                        <div className="modal-footer border-0 row justify-content-center">
                            {showNum ?
                                <button className="btn text-white col-9 col-md-7 col-lg-6" style={{ backgroundColor: "#0d6efd" }} onClick={() => navigate('/chat')} >Chat Now</button>
                                : <button className="btn btn-custom col-9 col-md-7 col-lg-6" onClick={() => setshowNum(true)}>View Contact</button>}
                        </div>
                    </div>
                </div>
            </div>

            }


            <Footer />
        </div>
    );
}

export default RideDetail;
