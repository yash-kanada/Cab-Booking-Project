import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function CabSearch() {

    const navigate = useNavigate()

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <div className="container my-5 flex-grow-1">
                {/* Title Section */}
                <div className="text-center mb-4">
                    <h2 className="fw-bold d-flex justify-content-center align-items-center  gap-3">
                        Ahmedabad
                        <i className="bi bi-arrow-right text-primary"></i>
                        Surat
                    </h2>

                    <p className="text-muted">Date: 2025-08-19</p>
                    <h5 className="mt-3">
                        Rides Available: <span className="fw-bold text-success">1</span>
                    </h5>
                </div>

                <div className='row gap-5  justify-content-center'>

                    <div className="card shadow p-3 mb-4 col-md-5">
                        <div className="row g-3 align-items-center">

                            {/* Left Side - Car Image & Name */}
                            <div className="col-lg-6 text-center">
                                <img
                                    src="/public/home-page-img/about-section-img.jpg"
                                    alt="Car"
                                    className="img-fluid rounded mb-2"
                                />
                                <h5 className="fw-bold">Toyota Innova</h5>
                            </div>

                            {/* Right Side - Ride Details */}
                            <div className="col-lg-6">
                                <div className="d-flex flex-column h-100 justify-content-between align-items-center align-items-md-start text-center text-md-start">

                                    {/* Vendor & Ride Info */}
                                    <div>
                                        <h6 className="mb-1"><strong>Vendor:</strong> John Doe</h6>
                                        <p className="mb-1"><strong>Ride Time:</strong> 10:30 AM</p>
                                        <p className="mb-1"><strong>Location:</strong> CG Road, Ahmedabad</p>
                                        <p className="mb-1"><strong>Price:</strong> ₹1200</p>
                                        <p className="text-success"><strong>Seats Available:</strong> 4</p>
                                    </div>

                                    {/* Button */}
                                    <div className="">
                                        <button className="btn btn-custom" onClick={()=>navigate('/ride-detail')}>View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card shadow p-3 mb-4 col-md-5">
                        <div className="row g-3 align-items-center">

                            {/* Left Side - Car Image & Name */}
                            <div className="col-lg-6 text-center">
                                <img
                                    src="/public/home-page-img/about-section-img.jpg"
                                    alt="Car"
                                    className="img-fluid rounded mb-2"
                                />
                                <h5 className="fw-bold">Toyota Innova</h5>
                            </div>

                            {/* Right Side - Ride Details */}
                            <div className="col-lg-6">
                                <div className="d-flex flex-column h-100 justify-content-between align-items-center align-items-md-start text-center text-md-start">

                                    {/* Vendor & Ride Info */}
                                    <div>
                                        <h6 className="mb-1"><strong>Vendor:</strong> John Doe</h6>
                                        <p className="mb-1"><strong>Ride Time:</strong> 10:30 AM</p>
                                        <p className="mb-1"><strong>Location:</strong> CG Road, Ahmedabad</p>
                                        <p className="mb-1"><strong>Price:</strong> ₹1200</p>
                                        <p className="text-success"><strong>Seats Available:</strong> 4</p>
                                    </div>

                                    {/* Button */}
                                    <div className="">
                                        <button className="btn btn-custom" onClick={()=>navigate('/ride-detail')} >View Details</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
            <Footer />
        </div>
    )
}

export default CabSearch
