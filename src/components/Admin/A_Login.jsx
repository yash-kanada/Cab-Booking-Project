import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function A_Login() {

    const navigate = useNavigate()

    const [data, setData] = useState()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (data?.success === 1) {
            sessionStorage.setItem("session_id", data.Id)
            sessionStorage.setItem("last_login", data.time)
        } else {
            toast.error(data?.message)
        }
    }, [data])

    useEffect(() => {
        localStorage.clear()
    }, [])

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4040/admin/login", { email, password })
            console.log("admin login:", res.data)
            if (res.data?.success === 1) {
                setData(res.data)
                navigate("/admin")
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    };

    return (
        <div
            className="d-flex justify-content-center align-items-center"
            style={{
                minHeight: '100vh',
                backgroundImage: 'url("/home-page-img/home-page-poster.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
            }}
        >
            <div
                className="card p-4 "
                style={{
                    maxWidth: '400px',
                    width: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.0)',
                    borderRadius: '12px',
                }}
            >
                <h3 className="text-center mb-3 text-white">Admin Login</h3>

                <form onSubmit={handleLogin}>
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

                    <div className="mb-3">
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

                    <div className="d-flex justify-content-between align-items-center mb-3 text-white">
                        <div className="text-decoration-underline  crsptr" style={{ fontSize: '0.9rem' }}>
                            Forgot Password?
                        </div>
                        <div style={{ fontSize: '0.9rem' }}>
                            Don't have an account?{' '}
                            <span className='text-decoration-underline crsptr' onClick={() => navigate('/a-register')} >Register</span>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-custom w-100">
                        Login
                    </button>
                </form>

            </div>
        </div>
    );
}

export default A_Login;
