import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  return (
    <div className="container-xxl bg-white p-0">
        {/* About Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6">
                <h6 className="section-title text-start text-primary text-uppercase">
                  About Us
                </h6>
                <h1 className="mb-4">
                  Welcome to{" "}
                  <span className="text-primary text-uppercase">Storica Stays</span>
                </h1>
                <p className="mb-4">
                  Nestled amidst the timeless beauty of Jodhpur, Storica Stays
                  invites you to experience an unforgettable journey. With
                  stunning fort views from its rooftop restaurant, this heritage
                  backpacker hostel promises a unique blend of comfort and
                  adventure.
                </p>
                <p className="mb-4">
                  Discover cosy dormitory rooms and a private double
                  bedroom, designed to provide a peaceful oasis in the heart of
                  the city&apos;s vibrant old town. Our heritage property combines
                  traditional Rajasthani architecture with modern amenities to
                  ensure your stay is both authentic and comfortable.
                </p>
                <div className="row g-3 pb-4">
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                        <h2 className="mb-1">5</h2>
                        <p className="mb-0">Room Types</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                        <h2 className="mb-1">24/7</h2>
                        <p className="mb-0">Support</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                    <div className="border rounded p-1">
                      <div className="border rounded text-center p-4">
                        <i className="fa fa-star fa-2x text-primary mb-2"></i>
                        <h2 className="mb-1">4.8</h2>
                        <p className="mb-0">Rating</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Link className="btn btn-primary py-3 px-5 mt-2" href="/#Contact">Contact Us</Link>
              </div>
              <div className="col-lg-6">
                <div className="row g-3">
                  <div className="col-6 text-end">
                    <Image
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.1s"
                      src="/img/General/CKC03844-HDR.jpg"
                      style={{marginTop: "25%"}}
                      alt="Storica Stays Heritage Property"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <Image
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.3s"
                      src="/img/General/CKC03886-HDR.jpg"
                      alt="Rooftop Restaurant View"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-6 text-end">
                    <Image
                      className="img-fluid rounded w-100 wow zoomIn"
                      data-wow-delay="0.5s"
                      src="/img/General/CKC03983-HDR.jpg"
                      alt="Heritage Architecture"
                      width={800}
                      height={600}
                    />
                  </div>
                  <div className="col-6 text-start">
                    <Image
                      className="img-fluid rounded w-75 wow zoomIn"
                      data-wow-delay="0.7s"
                      src="/img/General/CKC03907-HDR.jpg"
                      alt="Traditional Decor"
                      width={800}
                      height={600}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* About End */}

        {/* Features Start */}
        <div className="container-xxl py-5">
          <div className="container">
            <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="section-title text-center text-primary text-uppercase">Our Features</h6>
              <h1 className="mb-5">Why Choose <span className="text-primary text-uppercase">Storica Stays</span></h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-fort-awesome text-primary mb-4"></i>
                    <h5>Heritage Property</h5>
                    <p>Experience authentic Rajasthani architecture and traditional design in our beautifully restored heritage building.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-utensils text-primary mb-4"></i>
                    <h5>Rooftop Restaurant</h5>
                    <p>Enjoy delicious local and international cuisine with stunning fort views from our rooftop restaurant.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-map-marker-alt text-primary mb-4"></i>
                    <h5>Prime Location</h5>
                    <p>Located in the heart of Jodhpur&apos;s old town, walking distance to major attractions and markets.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-wifi text-primary mb-4"></i>
                    <h5>Free WiFi</h5>
                    <p>Stay connected with complimentary high-speed internet access throughout the property.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-concierge-bell text-primary mb-4"></i>
                    <h5>24/7 Reception</h5>
                    <p>Our friendly staff is available round the clock to assist you with any needs or travel arrangements.</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                <div className="service-item rounded pt-3 h-100">
                  <div className="p-4">
                    <i className="fa fa-3x fa-shield-alt text-primary mb-4"></i>
                    <h5>Safe & Secure</h5>
                    <p>Your safety is our priority with secure lockers, CCTV surveillance, and well-lit common areas.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Features End */}


      </div>
  );
}
