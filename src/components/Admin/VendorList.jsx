import React from "react";
import { useNavigate } from "react-router-dom";

function VendorList() {

    const navigate = useNavigate()

    const data = [
        { "firstName": "Michael", "lastName": "Scott", "phno": "+91 9876000000" },
        { "firstName": "Dwight", "lastName": "Schrute", "phno": "+91 9123400000" }
    ]

    return (
        <div className="container-fluid">
            {/* Header row: Title + Search */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="fw-bold mb-2 mb-md-0">Vendor List</h2>
                <div className="input-group" style={{ width: "250px" }}>
                    <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search vendors..."
                    />
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive shadow rounded">
                <table className="table table-custom align-middle table-hover mb-0">
                    <thead className="table-dark text-center">
                        <tr>
                            <th scope="col">Index</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Profile</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {data.map((vendor, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{vendor.firstName}</td>
                                <td>{vendor.lastName}</td>
                                <td>{vendor.phno}</td>
                                <td>
                                    <img
                                        src="/home-page-img/about-section-img.jpg"
                                        alt="profile"
                                        className="rounded-circle"
                                        width="40"
                                        height="40"
                                    />
                                </td>
                                <td className="text-center">



                                    <button className="btn btn-sm btn-success me-1 me-lg-3 mt-2 mt-lg-0" onClick={()=>navigate('/admin/vendor-detail')}>
                                        Details
                                    </button>
                                    <button className="btn btn-sm text-light me-1 me-lg-3 mt-2 mt-lg-0" onClick={()=>navigate('/admin/vendor-vehicle')} style={{ backgroundColor: "#0d6efd" }}>
                                        Vehicle
                                    </button>
                                    <button className="btn btn-sm btn-warning me-1 me-lg-3 mt-2 mt-lg-0">
                                        Block
                                    </button>
                                    <button className="btn btn-sm btn-danger me-1 me-lg-3 mt-2 mt-lg-0">
                                        Delete
                                    </button>

                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default VendorList;
