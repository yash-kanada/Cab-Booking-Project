import React from "react";
import { useNavigate } from "react-router-dom";

function A_Sidebar() {
  const navigate = useNavigate();

  return (
    <>
    
      <div className="d-lg-none bg-primary text-white p-2">
        <button
          className="btn btn-outline-light"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#adminSidebar"
          aria-expanded="false"
          aria-controls="adminSidebar"
        >
          ☰ Menu
        </button>
      </div>

    
      <div
        className="collapse d-lg-flex flex-column bg-dark text-white p-3"
        id="adminSidebar"
        style={{ minHeight: "100vh" }}
      >

    
        <div
          className="mx-2 text-white"
          role="button"
          onClick={() => navigate("/admin")}
        >
          <span className="fs-3 fw-bold">Admin Panel</span>
        </div>

        <hr />

 
        <ul className="nav nav-pills flex-column sidebar text-lg mb-auto">
          <li className="nav-item">
            <button
              className="nav-link d-flex align-items-center text-start"
              onClick={() => navigate("/admin")}
            >
              <i className="bi bi-speedometer me-4 fs-4"></i>
              <span>Dashboard</span>
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link d-flex align-items-center text-start"
              onClick={() => navigate("/admin/user-list")}
            >
              <i className="bi bi-people-fill me-4 fs-4"></i>
              <span>Users</span>
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link d-flex align-items-center text-start"
              onClick={() => navigate("/admin/vendor-list")}
            >
              <i className="bi bi-people-fill me-4 fs-4"></i>
              <span>Vendors</span>
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link d-flex align-items-center text-start"
              onClick={() => navigate("/admin/verification")}
            >
              <i className="bi bi-shield-check me-4 fs-4"></i>
              <span>Verification</span>
            </button>
          </li>

          <li className="nav-item">
            <button
              className="nav-link d-flex align-items-center text-start"
              onClick={() => navigate("/admin/contact-list")}
            >
              <i className="bi bi-envelope-fill me-4 fs-4"></i>
              <span>Contact Details</span>
            </button>
          </li>
        </ul>

        <hr />

  
        <div className="dropdown">
          <div
            className="d-flex align-items-center text-white text-decoration-none dropdown-toggle crsptr"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img
              src="https://github.com/mdo.png"
              alt="profile"
              width="32"
              height="32"
              className="rounded-circle me-2"
            />
            <strong>Admin</strong>
          </div>
         <ul className="dropdown-menu text-small mt-2">
            <li className='crsptr li-custom'>
                <span className="dropdown-item" onClick={()=>navigate('/admin/profile')}>
                  <i className="bi bi-person me-2"></i> Profile
                </span>
              </li>
            <li className='crsptr li-custom'>
                <span className="dropdown-item" >
                  <i className="bi bi-box-arrow-right me-2"></i> Sign out
                </span>
              </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default A_Sidebar;
