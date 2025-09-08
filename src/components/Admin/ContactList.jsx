import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

function ContactList() {

const navigate = useNavigate()

    const data = [
        {
            firstName: "John",
            lastName: "Doe",
            email: "john.doe@example.com",
            phno: "+91 9876543210",
            message: "This is a sample message that is quite long and needs truncation for display in the table."
        },
        {
            firstName: "Jane",
            lastName: "Smith",
            email: "jane.smith@example.com",
            phno: "+91 9123456789",
            message: "Quick inquiry about your services."
        }
    ];

    const truncateMessage = (msg, length = 30) => {
        return msg.length > length ? msg.substring(0, length) + "..." : msg;
    };

    return (
        <div className="container-fluid">
            {/* Header row */}
            <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
                <h2 className="fw-bold mb-2 mb-md-0">Contact Details</h2>
                <div className="input-group" style={{ width: "250px" }}>
                    <span className="input-group-text bg-white">
                        <i className="bi bi-search"></i>
                    </span>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search contacts..."
                    />
                </div>
            </div>

            {/* Table */}
            <div className="table-responsive shadow rounded">
                <table className="table table-custom align-middle table-hover mb-0">
                    <thead className="table-dark text-center">
                        <tr>
                            <th>Index</th>
                            <th>First Name</th>
                            <th>Email</th>
                            <th>Phone No</th>
                            <th>Message</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center">
                        {data.map((item, i) => (
                            <tr key={i}>
                                <td>{i + 1}</td>
                                <td>{item.firstName}</td>
                                <td>{item.email}</td>
                                <td>{item.phno}</td>
                                <td className="text-start">{truncateMessage(item.message)}</td>
                                <td>
                                    <button className="btn btn-sm btn-success" onClick={()=>navigate('/admin/contact-detail')}>Details</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ContactList;
