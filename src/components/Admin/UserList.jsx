import React from "react";
import { useNavigate } from "react-router-dom";

function UserList() {

    const navigate = useNavigate()

    const data = [
        { "firstName": "John", "lastName": "Doe", "phno": "+91 9876543210" },
        { "firstName": "Alice", "lastName": "Smith", "phno": "+91 9123456789" }
    ]

    return (
        <div className="container-fluid">
            {/* Header row: Title + Search */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="fw-bold mb-2 mb-md-0">User List</h2>
                <div className="input-group" style={{ width: "250px" }}>
                    <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search users..."
                    />
                </div>

            </div>

            {/* Table */}
            <div className="table-responsive shadow rounded">
                <table className="table table-custom align-middle table-hover mb-0">
                    <thead className="table-dark text-center">
                        <tr className="">
                            <th scope="col">Index</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Phone No</th>
                            <th scope="col">Profile</th>
                            <th scope="col" className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {data.map((user, i) => (
                            <tr key={i} >
                                <td>{i + 1}</td>
                                <td>{user.firstName}</td>
                                <td>{user.lastName}</td>
                                <td>{user.phno}</td>
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
                                    <button className="btn btn-sm btn-success me-3" onClick={()=> navigate('/admin/user-detail')}>
                                        {/* <i className="bi bi-eye"></i> */}
                                        Details
                                    </button>
                                    <button className="btn btn-sm btn-warning me-3 mt-2 mt-md-0">
                                        {/* <i className="bi bi-slash-circle"></i>  */}
                                        Block
                                    </button>
                                    <button className="btn btn-sm btn-danger me-3 me-md-0 mt-2 mt-lg-0 ">
                                        {/* <i className="bi bi-trash"></i>  */}
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

export default UserList;
