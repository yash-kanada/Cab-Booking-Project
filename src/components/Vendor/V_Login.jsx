import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import axios from 'axios';
import { toast } from 'react-toastify';

function V_Login() {
    const navigate = useNavigate();
    const [data, setData] = useState("")
    const [phno, setPhno] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if(data.success === 1){
            localStorage.setItem("session_vid", JSON.stringify(data.Id))
        }else{
            toast.error(data.message)
        }
    }, [data])


    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:4040/vender/login", {phno, password})
            console.log("Vendor login:", res)
            if (res.data?.success === 1) {
                setData(res.data)
                navigate("/")
                toast.success(res.data.message)
            } else {
                toast.error(res.data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
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
                                value={phno}
                                onChange={(e) => setPhno(e.target.value)}
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
