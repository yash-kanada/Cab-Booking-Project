import React from 'react'
import Header from '../Header'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

function U_Ride_Inquiry() {

    const navigate = useNavigate()

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <div className="container py-4 flex-grow-1 ">
                <h4 className="fw-bold mt-3 mb-4 pb-2 ms-0 ms-xl-5">
                    Total Ride Enquiry: <span className=" text-primary">3</span>
                </h4>


                <div className="row g-3 justify-content-center gap-4 mb-4">

                    <div className="col-12 col-md-6 col-xl-5 ">
                        <div className="border rounded shadow-lg d-flex flex-column justify-content-between h-100" style={{ minHeight: "230px" }}>

                            <small className="text-muted pe-3 pt-3 text-end" style={{ fontSize: "0.8rem" }}>20-08-2025 | 10:30 AM</small>

                            {/* Card Body */}
                            <div className="p-3 d-flex justify-content-between align-items-center flex-wrap">

                                {/* Car Image + Name */}
                                <div className="text-center">
                                    <img
                                        src="/public/home-page-img/about-section-img.jpg"
                                        alt="Car"
                                        style={{ width: "100px", height: "auto", objectFit: "cover" }}
                                        className="rounded mb-1"
                                    />
                                    <div className="fw-semibold fs-6">Swift Dzire</div>
                                </div>

                                {/* Vendor Name + Mobile */}
                                <div className="text-center mb-2">
                                    <div className="fw-semibold lh-base" style={{ fontSize: "1.15rem" }}>
                                        {/* <i className="bi bi-person-fill me-1"></i> */}
                                        Rakesh Kumar
                                    </div>
                                    <div className="text-muted fw-semibold" style={{ fontSize: "0.93rem" }}>
                                        {/* <i className="bi bi-telephone-fill me-1"></i> */}
                                        9876543210
                                    </div>
                                </div>

                                {/* Chat Button + DateTime */}
                                <div className="text-end  d-flex flex-column align-items-end mb-2">

                                    <button className="btn btn-custom btn-sm" onClick={()=>navigate('/chat')}>Chat</button>
                                </div>
                            </div>

                            <div className="border-top px-3 py-2 bg-light">
                                <div className="row text-center align-items-center">
                                    {/* From */}
                                    <div className="col-5">
                                        <div className="text-muted small">From</div>
                                        <div className="fw-semibold">Delhi</div>
                                    </div>

                                    {/* Icon Center */}
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-circle-fill fs-4 text-primary"></i>
                                    </div>

                                    {/* To */}
                                    <div className="col-5">
                                        <div className="text-muted small">To</div>
                                        <div className="fw-semibold">Jaipur</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-5 ">
                        <div className="border rounded shadow-lg d-flex flex-column justify-content-between h-100" style={{ minHeight: "230px" }}>

                            <small className="text-muted pe-3 pt-3 text-end" style={{ fontSize: "0.8rem" }}>20-08-2025 | 10:30 AM</small>

                            {/* Card Body */}
                            <div className="p-3 d-flex justify-content-between align-items-center flex-wrap">

                                {/* Car Image + Name */}
                                <div className="text-center">
                                    <img
                                        src="/public/home-page-img/about-section-img.jpg"
                                        alt="Car"
                                        style={{ width: "100px", height: "auto", objectFit: "cover" }}
                                        className="rounded mb-1"
                                    />
                                    <div className="fw-semibold fs-6">Swift Dzire</div>
                                </div>

                                {/* Vendor Name + Mobile */}
                                <div className="text-center mb-2">
                                    <div className="fw-semibold lh-base" style={{ fontSize: "1.2rem" }}>
                                        {/* <i className="bi bi-person-fill me-1"></i> */}
                                        Rakesh Kumar
                                    </div>
                                    <div className="text-muted fw-semibold" style={{ fontSize: "0.93rem" }}>
                                        {/* <i className="bi bi-telephone-fill me-1"></i> */}
                                        9876543210
                                    </div>
                                </div>

                                {/* Chat Button + DateTime */}
                                <div className="text-end  d-flex flex-column align-items-end mb-2">

                                    <button className="btn btn-custom btn-sm ">Chat</button>
                                </div>
                            </div>

                            <div className="border-top px-3 py-2 bg-light">
                                <div className="row text-center align-items-center">
                                    {/* From */}
                                    <div className="col-5">
                                        <div className="text-muted small">From</div>
                                        <div className="fw-semibold">Delhi</div>
                                    </div>

                                    {/* Icon Center */}
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-circle-fill fs-4 text-primary"></i>
                                    </div>

                                    {/* To */}
                                    <div className="col-5">
                                        <div className="text-muted small">To</div>
                                        <div className="fw-semibold">Jaipur</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-6 col-xl-5 ">
                        <div className="border rounded shadow-lg d-flex flex-column justify-content-between h-100" style={{ minHeight: "230px" }}>

                            <small className="text-muted pe-3 pt-3 text-end" style={{ fontSize: "0.8rem" }}>20-08-2025 | 10:30 AM</small>

                            {/* Card Body */}
                            <div className="p-3 d-flex justify-content-between align-items-center flex-wrap">

                                {/* Car Image + Name */}
                                <div className="text-center">
                                    <img
                                        src="/public/home-page-img/about-section-img.jpg"
                                        alt="Car"
                                        style={{ width: "100px", height: "auto", objectFit: "cover" }}
                                        className="rounded mb-1"
                                    />
                                    <div className="fw-semibold fs-6">Swift Dzire</div>
                                </div>

                                {/* Vendor Name + Mobile */}
                                <div className="text-center mb-2">
                                    <div className="fw-semibold lh-base" style={{ fontSize: "1.2rem" }}>
                                        {/* <i className="bi bi-person-fill me-1"></i> */}
                                        Rakesh Kumar
                                    </div>
                                    <div className="text-muted fw-semibold" style={{ fontSize: "0.93rem" }}>
                                        {/* <i className="bi bi-telephone-fill me-1"></i> */}
                                        9876543210
                                    </div>
                                </div>

                                {/* Chat Button + DateTime */}
                                <div className="text-end  d-flex flex-column align-items-end mb-2">

                                    <button className="btn btn-custom btn-sm ">Chat</button>
                                </div>
                            </div>

                            <div className="border-top px-3 py-2 bg-light">
                                <div className="row text-center align-items-center">
                                    {/* From */}
                                    <div className="col-5">
                                        <div className="text-muted small">From</div>
                                        <div className="fw-semibold">Delhi</div>
                                    </div>

                                    {/* Icon Center */}
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-circle-fill fs-4 text-primary"></i>
                                    </div>

                                    {/* To */}
                                    <div className="col-5">
                                        <div className="text-muted small">To</div>
                                        <div className="fw-semibold">Jaipur</div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                    
                    <div className="col-12 col-md-6 col-xl-5 ">
                        <div className="border rounded shadow-lg d-flex flex-column justify-content-between h-100" style={{ minHeight: "230px" }}>

                            <small className="text-muted pe-3 pt-3 text-end" style={{ fontSize: "0.8rem" }}>20-08-2025 | 10:30 AM</small>

                            {/* Card Body */}
                            <div className="p-3 d-flex justify-content-between align-items-center flex-wrap">

                                {/* Car Image + Name */}
                                <div className="text-center">
                                    <img
                                        src="/public/home-page-img/about-section-img.jpg"
                                        alt="Car"
                                        style={{ width: "100px", height: "auto", objectFit: "cover" }}
                                        className="rounded mb-1"
                                    />
                                    <div className="fw-semibold fs-6">Swift Dzire</div>
                                </div>

                                {/* Vendor Name + Mobile */}
                                <div className="text-center mb-2">
                                    <div className="fw-semibold lh-base" style={{ fontSize: "1.2rem" }}>
                                        {/* <i className="bi bi-person-fill me-1"></i> */}
                                        Rakesh Kumar
                                    </div>
                                    <div className="text-muted fw-semibold" style={{ fontSize: "0.93rem" }}>
                                        {/* <i className="bi bi-telephone-fill me-1"></i> */}
                                        9876543210
                                    </div>
                                </div>

                                {/* Chat Button + DateTime */}
                                <div className="text-end  d-flex flex-column align-items-end mb-2">

                                    <button className="btn btn-custom btn-sm ">Chat</button>
                                </div>
                            </div>

                            <div className="border-top px-3 py-2 bg-light">
                                <div className="row text-center align-items-center">
                                    {/* From */}
                                    <div className="col-5">
                                        <div className="text-muted small">From</div>
                                        <div className="fw-semibold">Delhi</div>
                                    </div>

                                    {/* Icon Center */}
                                    <div className="col-2">
                                        <i className="bi bi-arrow-right-circle-fill fs-4 text-primary"></i>
                                    </div>

                                    {/* To */}
                                    <div className="col-5">
                                        <div className="text-muted small">To</div>
                                        <div className="fw-semibold">Jaipur</div>
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

export default U_Ride_Inquiry
