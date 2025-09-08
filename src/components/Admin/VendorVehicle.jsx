import React from 'react'

function VendorVehicle() {
    return (
        <>
            <h2 className="fw-bold mb-4 ">Vehicle</h2>
            <p className="text-muted fw-semibold mb-4">Total Cars: <span className="text-primary">1</span></p>
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
    )
}

export default VendorVehicle
