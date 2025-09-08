import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Chat() {
    const messages = [
        { sender: "vendor", text: "Hello, how can I help you?", time: "10:30 AM", date: "2025-08-19", img: "/images/vendor.jpg" },
        { sender: "user", text: "I want to book a cab.", time: "10:32 AM", date: "2025-08-19", img: "/images/user.jpg" },
        { sender: "vendor", text: "Sure, please share your location.", time: "10:35 AM", date: "2025-08-19", img: "/images/vendor.jpg" },
    ];

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            <div className="flex-grow-1" >
                <div className="card shadow-lg">
                    <div className="card-header d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <img
                                src="/home-page-img/about-section-img.jpg"
                                alt="Profile"
                                className="rounded-circle me-3"
                                width="40"
                                height="40"
                            />
                            <h5 className="mb-0 ">Vendor Name</h5>
                        </div>
                    </div>

                    <div className="card-body" style={{ height: "500px", overflowY: "auto" }}>
                        {/* Chat Date */}
                        <div className="text-center text-muted small mb-3">Today</div>

                        {/* Vendor Message */}
                        <div className="d-flex mb-3">
                            <img
                                src="/home-page-img/about-section-img.jpg"
                                alt="Vendor"
                                className="rounded-circle me-2"
                                width="32"
                                height="32"
                            />
                            <div>
                                <div className="bg-light rounded p-2">
                                    <p className="mb-1">Hello! How can I help you?</p>
                                </div>
                                <small className="text-muted">10:15 AM</small>
                            </div>
                        </div>

                        {/* User Message */}
                        <div className="d-flex justify-content-end mb-3">
                            <div className="text-end">
                                <div className="bg-primary text-white rounded p-2">
                                    <p className="mb-1">I need a cab for tomorrow.</p>
                                </div>
                                <small className="text-muted">10:16 AM</small>
                            </div>
                            <img
                                src="/home-page-img/about-section-img.jpg"
                                alt="User"
                                className="rounded-circle ms-2"
                                width="32"
                                height="32"
                            />
                        </div>
                    </div>

                    {/* Input Box */}
                    <div className="card-footer d-flex">
                        <input
                            type="text"
                            className="form-control me-2"
                            placeholder="Type your message..."
                        />
                        <button className="btn btn-custom d-flex align-items-center">
                            <i className="bi bi-send-fill me-1"></i> Send
                        </button>
                    </div>
                </div>
            </div>


            <Footer />
        </div>
    );
}

export default Chat;
