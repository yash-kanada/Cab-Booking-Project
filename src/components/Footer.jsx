import React from 'react';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();

    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-2 footer mb-0">
            <div className="col-md-4 d-flex align-items-center ms-1 ms-md-3">
                <span
                    className="navbar-brand d-flex align-items-center crsptr me-0 me-md-2"
                    onClick={() => navigate('/')}
                >
                    <i className="bi bi bi-car-front-fill fs-4 text-white me-2" style={{ fontSize: '1.7rem' }}></i>
                </span>
                <span className="mb-2 mb-md-0 mt-2 mt-md-0 text-white">© 2025 QuickCab</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex  me-md-3 mt-2 mt-md-0">
                <li className="ms-1 ms-md-3" >  
                    <a href="#">
                        <lord-icon
                            src="https://cdn.lordicon.com/tgyvxauj.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ "width": "30px", "height": "30px" }}>
                        </lord-icon>
                    </a>
                </li>
                <li className="ms-1 ms-md-3">
                    <a href="#">
                        <lord-icon
                            src="https://cdn.lordicon.com/bfoumeno.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ "width": "30px", "height": "30px" }}>
                        </lord-icon>
                    </a>
                </li>
                <li className="ms-1 ms-md-3">
                    <a href="#">
                        <lord-icon
                            src="https://cdn.lordicon.com/qgebwute.json"
                            trigger="hover"
                            stroke="bold"
                            state="hover-draw"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ "width": "30px", "height": "30px" }}>
                        </lord-icon>
                    </a>
                </li>
                <li className="ms-1 ms-md-3">
                    <a href="#">
                        <lord-icon
                            src="https://cdn.lordicon.com/rbsqvtgo.json"
                            trigger="hover"
                            stroke="bold"
                            colors="primary:#ffffff,secondary:#ffffff"
                            style={{ "width": "30px", "height": "30px" }}>
                        </lord-icon>
                    </a>
                </li>
            </ul>
        </footer>

    );
}

export default Footer;
