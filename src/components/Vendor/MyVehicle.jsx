import React, { useState } from 'react'
import Header from '../Header'
import Footer from '../Footer'

function MyVehicle() {
    const [isMyVehicle, setIsMyVehicle] = useState(true)

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
            <div className="container py-5 flex-grow-1">

                {/* Toggle Buttons */}
                <div className="d-flex justify-content-center mb-4 gap-3">
                    <button
                        className={`btn btn-custom ${isMyVehicle ? 'active' : ''}`}
                        disabled={isMyVehicle}
                        onClick={() => setIsMyVehicle(true)}
                    >
                        My Vehicles
                    </button>
                    <button
                        className={`btn btn-custom ${!isMyVehicle ? 'active' : ''}`}
                        disabled={!isMyVehicle}
                        onClick={() => setIsMyVehicle(false)}
                    >
                        Add Vehicle
                    </button>
                </div>

                {/* My Vehicles Section */}
                {isMyVehicle && (
                    <>
                        <p className="text-muted fw-semibold mb-3">Total Cars: <span className="text-primary">1</span></p>
                        <div className="row">
                            <div className="col-md-6 col-lg-4 mb-4">
                                <div className="card card-custom rounded-3">
                                    <img
                                        src="/public/home-page-img/home-page-poster.jpg"
                                        alt="Car"
                                        className="card-img-top p-3"
                                        style={{ height: '250px', objectFit: 'cover' }}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title fw-bold mb-1">Swift Dzire</h5>
                                        <p className="card-text text-muted">Vehicle No: GJ01AB1234</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Add Vehicle Section */}
                {!isMyVehicle && (
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6">
                            <div className=" card card-custom  rounded-3">  
                                <div className="card-body p-4">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Vehicle Brand</label>
                                            <select className="form-select" required>
                                                <option value="">Select brand</option>
                                                <option>Toyota</option>
                                                <option>Honda</option>
                                                <option>Maruti</option>
                                                <option>Hyundai</option>
                                            </select>
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Vehicle Number</label>
                                            <input type="text" className="form-control" placeholder="e.g., GJ01AB1234" required />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Vehicle Image</label>
                                            <input type="file" className="form-control" accept="image/*" required />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">PUC Image</label>
                                            <input type="file" className="form-control" accept="image/*" required />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">Insurance Document</label>
                                            <input type="file" className="form-control" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" required />
                                        </div>

                                        <div className="mb-3">
                                            <label className="form-label fw-semibold">RC Document</label>
                                            <input type="file" className="form-control" accept=".jpg,.jpeg,.png,.pdf,.doc,.docx" required />
                                        </div>

                                        <div className="text-center">
                                            <button type="submit" className="btn btn-custom px-4">Add Vehicle</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <Footer />
        </div>
    )
}

export default MyVehicle
