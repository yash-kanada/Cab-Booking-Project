import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
    // const { id } = useParams();

    // Dummy user data (replace with API call)
    const user = {
        id: "id",
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@example.com",
        phone: "+91 9876543210",
        address: "123, Main Street, New Delhi, India",
        profilePic: "https://via.placeholder.com/150",
        role: "User",
        profileId: "USR-12345",
        createdAt: "7/4/2025, 11:47:51 AM",
        lastLogin: "7/4/2025, 11:48:55 AM",
        loginStatus: "0"
    };

    return (
        <div className="container mt-4">
            <h2 className="fw-bold mb-4 text-center text-md-start">User Details</h2>

            <div className="row">
                {/* Personal Information Section */}
                <div className="col-md-6 mb-4">
                    <div className="card bg-white shadow-lg border-0">
                        <div className="card-header bg-primary text-white text-center fs-5 fw-bold">
                            Personal Information
                        </div>
                        <div className="card-body text-center">
                            <img
                                src="/home-page-img/about-section-img.jpg"
                                alt="Profile"
                                className="rounded-circle mb-3"
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                            <h3 className="fw-bold">{user.firstName} {user.lastName}</h3>
                            <p className="mb-1"><strong>Email:</strong> {user.email}</p>
                            <p className="mb-1"><strong>Phone:</strong> {user.phone}</p>
                            <p><strong>Address:</strong> {user.address}</p>
                        </div>
                    </div>
                </div>

                {/* Contact Details Section */}
                <div className="col-md-6 mb-4">

                    <div className="card border-0 shadow-lg">
                        <div className="card-header bg-secondary text-white text-center fs-5 fw-bold">Contact Details</div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Account Role:</strong>
                                <span>{user.role}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Profile ID:</strong>
                                <span>{user.id}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Created At:</strong>
                                <span>{user.createdAt}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Last Login:</strong>
                                <span>{user.lastLogin}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Email</strong>
                                <span>{user.email}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Phone </strong>
                                <span>{user.phone}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Login Status:</strong>
                                {user.loginStatus == "0" ? <span className="text-success">Activate</span> : <span className="text-danger">Deactivate</span>}
                        </li>
                    </ul>
                </div>



            </div>

        </div>
        </div >
    );
};

export default UserDetail;
