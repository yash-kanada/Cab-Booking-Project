import React, { useState } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { useNavigate } from 'react-router-dom';

function V_Register() {

    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        mobile: '',
        password: '',
        confirmPassword: ''
    });

    const handleChange = (e) => {
        setFormData(prev => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add validations and API call here
        console.log(formData);
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />
            <div className="container py-5 flex-grow-1">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-8 col-lg-6">
                        <div className="card card-custom rounded-3">
                            <div className="card-body p-4">
                                <h4 className="text-center fw-bold text-primary mb-4">Register</h4>
                                <div className="d-flex justify-content-center gap-3 mb-4">
                                    <button type="button" className="btn btn-custom" onClick={() => navigate('/u-register')} > User </button>
                                    <button type="button" className="btn btn-custom" disabled>Vendor</button>
                                </div>

                                <form onSubmit={handleSubmit}>
                                    <div className="row mb-3">
                                        <div className="col">
                                            <label className="form-label fw-semibold">First Name</label>
                                            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="form-control" required />
                                        </div>
                                        <div className="col">
                                            <label className="form-label fw-semibold">Last Name</label>
                                            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="form-control" required />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Email</label>
                                        <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Mobile Number</label>
                                        <input type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Password</label>
                                        <input type="password" name="password" value={formData.password} onChange={handleChange} className="form-control" required />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label fw-semibold">Confirm Password</label>
                                        <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} className="form-control" required />
                                    </div>

                                    <div className="text-center mb-4">
                                        <button type="submit" className="btn btn-custom px-4">Register</button>
                                    </div>
                                    <div className="text-sm font-semibold text-center">
                                        Already have an account?
                                        <span className="text-primary crsptr" onClick={()=>navigate('/v-login')} > {" "} Login</span>
                                    </div>
                                </form>
                            </div>  
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default V_Register;
