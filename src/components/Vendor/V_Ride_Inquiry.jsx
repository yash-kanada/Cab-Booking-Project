import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

function V_Ride_Inquiry() {

    const navigate = useNavigate()

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <div className="container py-5 flex-grow-1 ">
                <h4 className="fw-bold mb-5 ms-0 ms-xl-5">
                    Total Your Ride : <span className="text-primary">4</span>
                </h4>

                <div className="row g-4 justify-content-center gap-4">
                    {[1, 2, 3, 4].map((item, index) => (
                        <div className="col-12 col-sm-10 col-md-6 col-lg-5 " key={index}>
                            
                            <div className="card card-custom S rounded-2 p-3 crsptr" style={{ minHeight: '160px' }} onClick={()=>navigate('/v-ride-booking')} >
                                <div className="d-flex justify-content-between align-items-start mb-3"  >
                                    <div className="d-flex">
                                        <img
                                            src="public/home-page-img/about-section-img.jpg"
                                            alt="Car"
                                            className="rounded me-3"
                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                        />
                                        <div>
                                            <h5 className="mb-1 fw-semibold">Varna</h5>
                                            <p className="mb-0 text-muted small">Car No: GJ 01 AB 5555</p>
                                        </div>
                                    </div>
                                    <small className="text-muted mt-1">2025-06-14</small>
                                </div>

                                {/* Divider */}
                                <hr className="my-2" />

                                {/* Route Info */}
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="text-center">
                                        <small className="text-muted d-block">From</small>
                                        <span className="fw-medium text-capitalize">Rajkot</span>
                                    </div>
                                    <i className="bi bi-arrow-left-right fs-4 text-secondary"></i>
                                    <div className="text-center">
                                        <small className="text-muted d-block">To</small>
                                        <span className="fw-medium text-capitalize">Ahmedabad</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </div>

    )
}

export default V_Ride_Inquiry
