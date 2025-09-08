import { useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useState } from 'react';

function Home() {
  const navigate = useNavigate();
  const [btn, setbtn] = useState(true)

  return (
    <>
      <Header />

      <section className="position-relative text-white img-fluid" style={{
        height: '96vh',
        backgroundImage: 'url(/home-page-img/home-page-poster.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}>
        <div className="container h-100 d-flex flex-column justify-content-center align-items-start">
          <h1 className="fw-bold display-4">QuickCab – Your Trusted Ride Partner</h1>
          <p className="lead">Book rides in seconds. Safe, reliable and professional cab service at your fingertips.</p>
        </div>

      </section>

      {btn && <section className='mt-4'>
        <div className="container py-4 ">
          <div className="card shadow-lg p-4 bg-white">
            <h4 className="mb-3 fw-bold fs-3 ">Find Your Ride</h4>
            <div className="row g-3 ">
              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control border border-black p-3 bg-light"
                  placeholder="Leaving From"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="text"
                  className="form-control border border-black p-3 bg-light"
                  placeholder="Going To"
                />
              </div>

              <div className="col-md-3">
                <input
                  type="date"
                  className="form-control border border-black p-3 bg-light"
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>

              <div className="col-md-3 d-grid">
                <button className="btn btn-custom" onClick={()=>navigate('/cab-search')}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>

      </section>
}

      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="text-center mb-5">
            <h2 className="fw-bold">Why Thousands Trust QuickCab</h2>
            <p className="fs-5 text-muted">Here’s what makes us stand out in the ride-booking world.</p>
          </div>
          <div className="row gy-4">
            <div className="col-md-6">
              <h5 className="fw-semibold">🚗 Instant Booking</h5>
              <p className="fs-6">Book your ride within seconds using our user-friendly app or website. No waiting, no delays.</p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-semibold">📍 Live Location Tracking</h5>
              <p className="fs-6">Track your cab in real time and know exactly when it will arrive – stay informed at every step.</p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-semibold">💳 Multiple Payment Options</h5>
              <p className="fs-6">We accept UPI, cards, wallets, and cash. Pay the way you like, with ease and safety.</p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-semibold">🛡️ Verified Drivers</h5>
              <p className="fs-6">All drivers are background-checked and trained to ensure you get a safe and professional experience.</p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-semibold">🕒 24/7 Service Availability</h5>
              <p className="fs-6">Day or night, QuickCab is always ready. Just a few taps, and your ride is on the way.</p>
            </div>
            <div className="col-md-6">
              <h5 className="fw-semibold">💬 Dedicated Support</h5>
              <p className="fs-6">Our customer support is always available via chat and phone for help before, during, and after your ride.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white text-dark">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">About QuickCab</h2>
              <p className="fs-5 mb-3">
                QuickCab is your reliable partner for everyday travel — from office commutes to airport pickups. We offer punctual, safe, and affordable rides across the city.
              </p>
              <p className="fs-5 mb-4">
                Our platform makes booking seamless, while our professional drivers and 24/7 support ensure a stress-free experience every time.
              </p>
              <button
                className="btn btn-custom px-4 fw-semibold"
                onClick={() => navigate('/about')}
              >
                Learn More About Us
              </button>
            </div>
            <div className="col-md-6 text-center">
              <img
                src="/home-page-img/about-section-img.jpg"
                alt="About QuickCab"
                className="img-fluid rounded shadow"
                style={{ maxHeight: '360px' }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-primary text-white">
        <div className="container">
          <div className="row align-items-center gx-5">
            <div className="col-md-6 mb-4 mb-md-0">
              <h2 className="fw-bold mb-3">Experience the QuickCab Advantage</h2>
              <p className="fs-5 mb-3">
                Whether you're heading to the airport, office, or weekend getaway, QuickCab guarantees a smooth, professional, and on-time ride.
              </p>
              <p className="fs-5 mb-3">
                Live cab tracking, multiple payment options, and 24/7 support make us the smarter way to travel.
              </p>
              <p className="fs-5">
                Ride with confidence. Ride with QuickCab.
              </p>
            </div>
            <div className="col-md-6 text-center">
              <img src="/home-page-img/hero-illustrate.png" alt="QuickCab Illustration" className="img-fluid " style={{ maxHeight: '320px' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">Why Choose <span className="text-primary">QuickCab</span>?</h2>
          <div className="row g-4">
            <div className="col-md-3">
              <div className="p-4 border rounded h-100 shadow-sm">
                <i className="bi bi-clock-history text-primary fs-1 mb-3"></i>
                <h5>On-Time Guarantee</h5>
                <p className="mb-0">We value your time and ensure every ride arrives punctually.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded h-100 shadow-sm">
                <i className="bi bi-shield-lock-fill text-primary fs-1 mb-3"></i>
                <h5>Safe & Secure</h5>
                <p className="mb-0">Well-trained drivers and 24/7 support for a worry-free journey.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded h-100 shadow-sm">
                <i className="bi bi-currency-rupee text-primary fs-1 mb-3"></i>
                <h5>Affordable Pricing</h5>
                <p className="mb-0">Transparent and budget-friendly rates with no hidden fees.</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="p-4 border rounded h-100 shadow-sm">
                <i className="bi bi-phone-fill text-primary fs-1 mb-3"></i>
                <h5>Easy Booking</h5>
                <p className="mb-0">Book your ride in seconds using our user-friendly platform.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-white">
        <div className="container text-center">
          <h2 className="fw-bold mb-5">What Our Riders Say</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="card p-4 border-0 shadow h-100">
                <p className="fst-italic">"QuickCab is super reliable. Booked at 5am and they arrived right on time!"</p>
                <h6 className="mt-3 fw-semibold text-primary">– Priya Sharma</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border-0 shadow h-100">
                <p className="fst-italic">"Clean cars, polite drivers, and good rates. Highly recommend!"</p>
                <h6 className="mt-3 fw-semibold text-primary">– Rakesh Mehta</h6>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card p-4 border-0 shadow h-100">
                <p className="fst-italic">"QuickCab made my daily office commute stress-free."</p>
                <h6 className="mt-3 fw-semibold text-primary">– Nidhi Verma</h6>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />

    </>
  );
}

export default Home;
