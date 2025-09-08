import { useLocation, useNavigate } from 'react-router-dom';
import '../custom.scss';


function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top py-1">
      <div className="container-fluid ps-0 px-md-2">


        <span
          className="navbar-brand d-flex align-items-center crsptr"
          onClick={() => navigate('/')}
        >
          <i className="bi bi bi-car-front-fill fs-3 text-white me-2" style={{ fontSize: '1.7rem' }}></i>
          <span className="fw-bold text-white fs-5">QuickCab</span>
        </span>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>


        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">


          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
            <li className="nav-item">
              <span className={`nav-link ${location.pathname === '/' ? 'active text-white fw-bold' : 'text-white'} crsptr px-3`} onClick={() => navigate('/')}>Home</span>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${location.pathname === '/about' ? 'active text-white fw-bold' : 'text-white'} crsptr px-3`} onClick={() => navigate('/about')}>About Us</span>
            </li>
            <li className="nav-item">
              <span className={`nav-link ${location.pathname === '/contact' ? 'active text-white fw-bold' : 'text-white'} crsptr px-3`} onClick={() => navigate('/contact')}>Contact Us</span>
            </li>
          </ul>

          
          {/* <div>
            <button className='btn btn-outline-light me-3' >Login</button>
            <button className='btn btn-outline-light'>Register</button>
          </div> */}

          <div className="dropdown text-end">
            <a
              className="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="/home-page-img/about-section-img.jpg"
                alt="user"
                width="32"
                height="32"
                className="rounded-circle me-2"
              />
              <span className="text-white">Vendor</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end text-small mt-2">
              <li className='crsptr li-custom'>
                <span className="dropdown-item" onClick={() => navigate('/edit-profile')}>
                  <i className="bi bi-person me-2"></i> Edit Profile
                </span>
              </li>
              <li className='crsptr li-custom '>
                <span className="dropdown-item" onClick={() => navigate('/change-password')}>
                  <i className="bi bi-shield-lock me-2"></i> Change Password
                </span>
              </li>
              <li className='crsptr li-custom '>
                <span className="dropdown-item" onClick={() => navigate('/v-ride-inquiry')}>
                  <i className="bi bi-chat-left-text me-2"></i> Ride Inquiry
                </span>
              </li>
              <li className='crsptr li-custom '>
                <span className="dropdown-item" onClick={() => navigate('/add-ride')}>
                  <i className="bi bi-plus-circle me-2"></i> Add Ride
                </span>
              </li>
              <li className='crsptr li-custom '>
                <span className="dropdown-item" onClick={() => navigate('/my-vehicle')}>
                  <i className="bi bi-car-front me-2"></i> My Vehicle
                </span>
              </li>
              <li><hr className="dropdown-divider" /></li>
              <li className='crsptr li1-custom '>
                <span className="dropdown-item" onClick={() => navigate('/u-login')}>
                  <i className="bi bi-box-arrow-right me-2"></i> Logout
                </span>
              </li>
            </ul>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Header;
