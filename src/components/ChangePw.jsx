import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'

function ChangePw() {

    const [showPassword, setShowPassword] = useState({
        current: false,
        newPass: false,
        confirm: false
    })

    const togglePassword = (field) => {
        setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }))
        console.log(showPassword.prev)
    }

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />
=
            <div className="container py-5 d-flex flex-grow-1 justify-content-center align-items-center ">


                <div className="row w-100">
                    <div className="col-12 col-sm-10 col-md-8 col-lg-6 mx-auto">
                        <div className="card card-custom  rounded-2">
                            <div className="card-body p-4">
                                <h3 className="text-center text-primary fw-bold mb-4">Change Password</h3>

                                <form>
                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Current Password</label>

                                        <div className="position-relative">
                                            <input
                                                type={showPassword.current ? 'text' : 'password'}
                                                className="form-control pe-5"
                                                placeholder="Enter current password"
                                            />
                                            <i
                                                className={`bi ${showPassword.current ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => togglePassword('current')}
                                            ></i>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">New Password</label>

                                        <div className="position-relative">
                                            <input
                                                type={showPassword.newPass ? 'text' : 'password'}
                                                className="form-control pe-5"
                                                placeholder="Enter new password"
                                            />
                                            <i
                                                className={`bi ${showPassword.newPass ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => togglePassword('newPass')}
                                            ></i>
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Confirm New Password</label>

                                        <div className="position-relative">
                                            <input
                                                type={showPassword.confirm ? 'text' : 'password'}
                                                className="form-control pe-5"
                                                placeholder="Enter new password"
                                            />
                                            <i
                                                className={`bi ${showPassword.confirm ? 'bi-eye-slash' : 'bi-eye'} position-absolute top-50 end-0 translate-middle-y me-3`}
                                                style={{ cursor: 'pointer' }}
                                                onClick={() => togglePassword('confirm')}
                                            ></i>
                                        </div>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-custom fw-semibold">
                                            Update Password
                                        </button>
                                    </div>
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

export default ChangePw
