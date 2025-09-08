import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

function Add_Ride() {
    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />

            <div className="container py-5 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card card-custom rounded-4 p-4">
                            <h4 className="mb-4 text-primary fw-bold text-center">Add New Ride</h4>

                            <form>
                                <div className="mb-3">
                                    <label className="form-label fw-semibold">From</label>
                                    <input type="text" className="form-control" placeholder="Enter starting location" />
                                </div>

                                <div className="mb-3">
                                    <label className="form-label fw-semibold">To</label>
                                    <input type="text" className="form-control" placeholder="Enter destination" />
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">Date</label>
                                        <input type="date" className="form-control" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">Time</label>
                                        <input type="time" className="form-control" />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">Price (₹)</label>
                                        <input type="number" className="form-control" placeholder="Enter price" />
                                    </div>
                                    <div className="col-md-6 mb-3">
                                        <label className="form-label fw-semibold">Available Seats</label>
                                        <select className="form-select">
                                            <option disabled selected>Select seats</option>
                                            <option value="1">1 seat</option>
                                            <option value="2">2 seats</option>
                                            <option value="3">3 seats</option>
                                            <option value="4">4 seats</option>
                                            <option value="5">5 seats</option>
                                            <option value="6">6 seats</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="mb-4">
                                    <label className="form-label fw-semibold">Select Car</label>
                                    <select className="form-select">
                                        <option disabled selected>Select a car</option>
                                        <option value="swift">Swift</option>
                                        <option value="innova">Innova</option>
                                        <option value="ertiga">Ertiga</option>
                                        <option value="baleno">Baleno</option>
                                    </select>
                                </div>

                                <button type="submit" className="btn btn-custom w-100 fw-semibold">
                                    Add Ride
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    )
}

export default Add_Ride
