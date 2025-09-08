import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function A_Register() {

    const navigate = useNavigate()

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        console.log('Registered details:', { firstName, lastName, email, password });
        // Add your registration logic here (API call etc.)
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("/home-page-img/home-page-poster.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div
                className="card p-4"
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    borderRadius: '12px',
                }}
            >
                <h3 className="text-center mb-3 text-white">Admin Register</h3>

                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label className="form-label text-white">First Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={firstName}
                            onChange={(e) => setFirstName(e.target.value)}
                            placeholder="Enter first name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-white">Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                            placeholder="Enter last name"
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label text-white">Email</label>
                        <input
                            type="email"
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter admin email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label text-white">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter password"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-custom w-100">
                        Register
                    </button>

                    <div className="mt-3  text-center text-white" style={{ fontSize: '0.9rem' }}>
                        Already have an account?{' '}
                        <span className="text-decoration-underline crsptr" onClick={() => navigate('/a-login')}>Login</span>
                    </div>

                </form>
            </div>
        </div>
    );
}

export default A_Register;
