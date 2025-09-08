import React from "react";
import { useParams } from "react-router-dom";

const VendorDetail = () => {
    // const { id } = useParams();

    // Dummy user data (replace with API call)
    const vendor = {
        "_id": "id",
        "firstName": "John",
        "lastName": "vendor",
        "phno": "+91 9876543210",
        "email": "radha@gmail.com",
        "createAt": "6/7/2025, 2:57:21 PM",
        "address": "",
        "profile": null,
        "dob": null,
        "LoginStatus": "0",
        "lastLoggin": "6/7/2025, 2:57:29 PM",
        "aadharNo": "123",
        "aadharimg": null,
        "lienceno": 123,
        "lienceImg": null,
        "lienceExpirydate": null,
        "verification": "Verified",
    };

    return (
        <div className="container mt-4">
            <h2 className="fw-bold mb-4 text-center text-md-start">Vendor Details</h2>

            <div className="row">
                {/* Personal Information Section */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow-lg border-0">
                        <div className="card-header bg-primary text-white text-center fs-5 fw-bold">
                            Personal Information
                        </div>
                        <div className="card-body bg-white text-center">
                            <img
                                src="/home-page-img/about-section-img.jpg"
                                alt="Profile"
                                className="rounded-circle mb-3"
                                style={{ width: "100px", height: "100px", objectFit: "cover" }}
                            />
                            <h3 className="fw-bold">{vendor.firstName} {vendor.lastName}</h3>
                            <p className="mb-1"><strong>Email:</strong> {vendor.email}</p>
                            <p className="mb-1"><strong>Phone:</strong> {vendor.phno}</p>
                            <p className="mb-1"><strong>Birthday:</strong> {vendor.phone == null ? "null" : vendor.phone}</p>
                            <p><strong>Address:</strong> {vendor.address == "" ? "null" : vendor.address}</p>
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
                                <span>vendor</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Profile ID:</strong>
                                <span>{vendor._id}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Created At:</strong>
                                <span>{vendor.createAt}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Last Login:</strong>
                                <span>{vendor.lastLoggin == null ? "null" : vendor.lastLoggin}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Aadhar No:</strong>
                                <span>{vendor.aadharNo == null ? "null"
                                    : <> {vendor.aadharNo} <i className="bi bi-eye-fill"></i></>}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Lience No:</strong>
                                <span>{vendor.lienceno == null ? "null"
                                    : <> {vendor.lienceno} <i className="bi bi-eye-fill"></i>
                                    </>}
                                </span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>LienceExpiry Date:</strong>
                                <span>{vendor.lienceExpirydate == null ? "null" : vendor.lienceExpirydate}</span>
                            </li>
                            <li className="list-group-item d-flex justify-content-between me-0">
                                <strong>Document Verification:</strong>
                                <div>
                                    {vendor.verification == null ? "Not Upload" : (
                                        <span className={`${
                                            vendor.verification == "Pending" ? "text-warning"
                                            : vendor.verification == "Rejected" ? "text-danger"
                                            : vendor.verification == "Verified" ? "text-success" : ""
                                        }`}>
                                            {vendor.verification}
                                        </span>
                                    )}
                                        
                                </div>
                                {/* <span>{vendor.verification == null ? "Document Not Upload" : vendor.verification}</span> */}
                            </li>
                            <li className="list-group-item d-flex justify-content-between">
                                <strong>Login Status:</strong>
                                {vendor.loginStatus == "0" ? <span className="text-success">Activate</span> : <span className="text-danger">Deactivate</span>}
                            </li>
                        </ul>
                    </div>



                </div>

            </div>
        </div >
    );
};

export default VendorDetail;
