import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

function V_Login() {
    const navigate = useNavigate();
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        // login logic here
    };

    return (
        <div className='d-flex flex-column min-vh-100'>
            <Header />

            <div className="container py-5 d-flex flex-grow-1 justify-content-center align-items-center ">

                <div className="card card-custom p-4" style={{ maxWidth: '420px', width: '100%' }}>
                    <h4 className="text-center fw-bold text-primary mb-4">Login</h4>
                    <div className="d-flex justify-content-center gap-3 mb-4">
                        <button type="button" className="btn btn-custom" onClick={() => navigate('/u-login')} > User </button>
                        <button type="button" className="btn btn-custom" disabled>Vendor</button>
                    </div>
                    <form onSubmit={handleLogin}>
                        <div className="mb-3">
                            <label className="form-label">Mobile Number</label>
                            <input
                                type="tel"
                                className="form-control"
                                value={mobile}
                                onChange={(e) => setMobile(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        <button type="submit" className="btn btn-custom w-100">Login</button>


                        <div className="text-center mt-3">
                            <span className="text-primary d-block mb-2 crsptr">
                                Forgot Password?
                            </span>
                            <span className="text-muted">
                                Don’t have an account?{' '}
                                <span className="text-primary crsptr" onClick={() => navigate('/v-register')}>
                                    Register
                                </span>
                            </span>
                        </div>

                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default V_Login;
