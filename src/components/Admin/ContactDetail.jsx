import React from "react";
import { useParams } from "react-router-dom";

const ContactDetail = () => {
    // const { id } = useParams();

    // Temporary static data (replace with API fetch)
    const contact = {
        id: "id",
        firstName: "John",
        lastName: "Doe",
        email: "john@example.com",
        phno: "+91 9876543210",
        message: "This is the full message for John Doe. It can be very long and should display completely here."
    };

    return (
        <div className="container mt-4">
            <h2 className="fw-bold mb-4">Contact Details</h2>
            <div className="card bg-light shadow p-4">
                <p><strong>ID:</strong> {contact.id}</p>
                <p><strong>First Name:</strong> {contact.firstName}</p>
                <p><strong>Last Name:</strong> {contact.lastName}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phno}</p>
                <p><strong>Message:</strong> {contact.message}</p>
            </div>
        </div>
    );
};

export default ContactDetail;
