import React from 'react'
import Header from './Header'
import Footer from './Footer'

function EditProfile() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />

            <div className="container py-5 flex-grow-1">


                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card card-custom ">
                            <div className="card-body">

                                <h3 className="fw-bold text-primary text-center mb-4">Edit Your Profile</h3>


                                <div className="d-flex justify-content-center mb-5">
                                    <div className="position-relative" style={{ width: "80px", height: "80px" }}>
                                        <img
                                            src="/home-page-img/about-section-img.jpg"
                                            alt="Profile"
                                            className="rounded-circle border border-2 border-teal"
                                            style={{ width: "100%", height: "100%", objectFit: "cover" }}
                                        />
                                        <button
                                            type="button"
                                            className="btn btn-light rounded-circle border p-1 position-absolute d-flex justify-content-center align-items-center"
                                            style={{
                                                bottom: 0,
                                                right: 0,
                                                width: "30px",
                                                height: "30px",
                                                transform: "translate(25%, 25%)",
                                                zIndex: 2
                                            }}
                                        >
                                            <i className="bi bi-camera-fill text-teal fs-6"></i>
                                        </button>
                                    </div>
                                </div>

                                <form>
                                    <div className="row">
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">First Name</label>
                                            <input type="text" className="form-control" placeholder="Enter first name" />
                                        </div>
                                        <div className="col-md-6 mb-3">
                                            <label className="form-label fw-semibold">Last Name</label>
                                            <input type="text" className="form-control" placeholder="Enter last name" />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter email" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Mobile Number</label>
                                        <input type="tel" className="form-control" placeholder="+91 XXXXX XXXXX" />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Address</label>
                                        <textarea className="form-control" rows="3" placeholder="Your address..."></textarea>
                                    </div>

                                    <button type="submit" className="btn btn-custom fw-semibold px-4 mt-3 w-100">Save Changes</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default EditProfile
