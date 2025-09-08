import Header from '../Header'
import Footer from '../Footer'

function V_Ride_Booking() {
    const rideData = {
        pickup: 'Ahmedabad',
        drop: 'Surat',
        date: '2025-08-06',
        time: '10:30 AM',
        price: 1500,
        availableSeats: 3,
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Header />

            {/* Main Content */}
            <main className="container my-5 flex-grow-1">

                {/* Ride Info Section */}
                <section className=" p-4 rounded-4  mb-4">
                    <div className="text-center fs-3 fw-bold mb-2">
                        {rideData.pickup} <i className="bi bi-arrow-left-right mx-2"></i> {rideData.drop}
                    </div>

                    <div className="text-center text-muted mb-1">
                        <i className="bi bi-calendar-event me-2"></i>{rideData.date}
                        <span className="mx-3">|</span>
                        <i className="bi bi-clock me-2"></i>{rideData.time}
                    </div>

                    <div className="text-center text-muted">
                        <i className="bi bi-currency-rupee me-2"></i>{rideData.price}
                        <span className="mx-3">|</span>
                        <i className="bi bi-person-fill me-2"></i>{rideData.availableSeats} seats
                    </div>
                </section>

                <hr className="my-5" />

                {/* Inquiry Table */}
                <section>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="fw-semibold">Total Inquiry: 0</h4>
                    </div>

                    <div className="table-responsive">
                        <table className="table-custom text-center align-middle mb-0">
                            <thead >
                                <tr>
                                    <th>Index</th>
                                    <th>Profile</th>
                                    <th>First Name</th>
                                    <th>Last Name</th>
                                    <th>Email</th>
                                    <th>Phone</th>
                                    <th>Chat</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img src="/home-page-img/about-section-img.jpg" alt="Profile" className="rounded-circle" width="40" height="40" />
                                    </td>
                                    <td>Rahul</td>
                                    <td>Verma</td>
                                    <td>rahul@example.com</td>
                                    <td>9876543210</td>
                                    <td>
                                        <button className="btn btn-custom btn-sm">
                                        Chat
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

export default V_Ride_Booking
