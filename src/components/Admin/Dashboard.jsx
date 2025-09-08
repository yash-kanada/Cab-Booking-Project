import React from "react";

function Dashboard() {
  return (
    <div className="container-fluid ">
        <h2 className="mb-4 fw-bold ">Dashboard</h2>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="card shadow-lg p-2 border-0 h-100 w-100">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">Total Users</h5>
                <p className="fs-2 fw-bold text-dark mb-0">0</p>
              </div>
              <div className="bg-primary py-3 px-4 rounded ">
                <i className="bi bi-person-fill text-light display-4"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-lg p-2 border-0 h-100 w-100">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">Total Vendors</h5>
                <p className="fs-2 fw-bold text-dark mb-0">0</p>
              </div>
              <div className="bg-primary py-3 px-4 rounded">
                <i className="bi bi-person-fill text-light display-4"></i>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-md-6">
          <div className="card shadow-lg p-2 border-0 h-100 w-100">
            <div className="card-body d-flex justify-content-between align-items-center">
              <div>
                <h5 className="fw-bold">Pending Verification</h5>
                <p className="fs-2 fw-bold text-dark mb-0">0</p>
              </div>
              <div className="bg-primary py-3 px-4 rounded ">
                <i className="bi bi-shield-fill-check text-light display-4"></i>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Dashboard;
