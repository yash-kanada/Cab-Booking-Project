import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const A_Profile = () => {
    const [activeTab, setActiveTab] = useState('personal');

    return (
        <>
            <div className="container-fluid ">
            <h2 className="mb-4 fw-bold ">Admin Profile</h2>

                <div className="text-center mb-4 ">
                    <button
                        className={`btn ${activeTab === 'personal' ? 'btn-custom' : 'btn-outline-custom'} mx-2 mb-2 mb-sm-0`}
                        onClick={() => setActiveTab('personal')}
                    >
                        Personal Details
                    </button>
                    <button
                        className={`btn ${activeTab === 'password' ? 'btn-custom' : 'btn-outline-custom'} mx-2 mb-2 mb-sm-0`}
                        onClick={() => setActiveTab('password')}
                    >
                        Change Password
                    </button>
                </div>

                <div className="card bg-light shadow p-4">
                    {activeTab === 'personal' ? <PersonalDetails /> : <ChangePassword />}
                </div>
            </div>
        </>
    );
};

const PersonalDetails = () => {
    return (
        <div >
            <h4 className="text-center fw-bold text-primary mb-4">Personal Details</h4>
            <div className="row g-3">
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="First Name" />
                </div>
                <div className="col-md-3">
                    <input type="text" className="form-control" placeholder="Last Name" />
                </div>
                <div className="col-md-6">
                    <input type="email" className="form-control" placeholder="Email Address" />
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-custom px-4">Update</button>
            </div>
        </div>
    );
};

const ChangePassword = () => {
    return (
        <div>
            <h4 className="text-center text-primary fw-bold mb-4">Change Password</h4>
            <div className="row g-3">
                <div className="col-md-4">
                    <input type="password" className="form-control" placeholder="Old Password" />
                </div>
                <div className="col-md-4">
                    <input type="password" className="form-control" placeholder="New Password" />
                </div>
                <div className="col-md-4">
                    <input type="password" className="form-control" placeholder="Confirm New Password" />
                </div>
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-custom px-4">Update</button>
            </div>
        </div>
    );
};

export default A_Profile;
