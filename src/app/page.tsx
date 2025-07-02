'use client';

import RoomsSection from '../components/RoomsSection';
import ReviewsSection from '../components/ReviewsSection';
import InstagramSection from '../components/InstagramSection';
import PropertyGallery, { PropertyGalleryRef } from '../components/PropertyGallery';
import { useRef } from 'react';
import Head from 'next/head';

export default function Home() {
  const propertyGalleryRef = useRef<PropertyGalleryRef>(null);

  const openPropertyGallery = () => {
    if (propertyGalleryRef.current) {
      propertyGalleryRef.current.openGallery();
    }
  };

  return (
    <>
      <Head>
        {/* LightGallery CSS */}
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lightgallery.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-thumbnail.css" rel="stylesheet" />
        <link href="https://cdn.jsdelivr.net/npm/lightgallery@2.9.0-beta.1/css/lg-zoom.css" rel="stylesheet" />
      </Head>

      <PropertyGallery ref={propertyGalleryRef} />

           {/* Carousel Start  */}
           <div className="container-fluid p-0 mb-5">
            <div
              id="header-carousel"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    className="w-100"
                    src="/img/hero-slider/CKC04015-HDR.jpg"
                    alt="Storica Stays Heritage Hostel"
                    style={{objectFit: "cover"}}
                  />
                  <div
                    className="carousel-caption d-flex flex-column align-items-center justify-content-center"
                  >
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-3 text-white mb-4 animated slideInDown">
                        Most Relaxing Place
                      </h1>
                      <a
                        href="#Rooms"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                      >Our Rooms</a>
                      <a
                        href="tel:+91 6378365775"
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                      >Book A Room</a>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100"
                    src="/img/hero-slider/CKC03767.jpg"
                    alt="Heritage Architecture"
                    style={{objectFit: "cover"}}
                  />
                  <div
                    className="carousel-caption d-flex flex-column align-items-center justify-content-center"
                  >
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-3 text-white mb-4 animated slideInDown">
                        Most Relaxing Place
                      </h1>
                      <a
                        href="#Rooms"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                        >Our Rooms</a
                      >
                      <a
                        href="tel:+91 6378365775"
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                        >Book A Room</a
                      >
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    className="w-100"
                    src="/img/hero-slider/CKC03841-HDR.jpg"
                    alt="Rooftop Restaurant View"
                    style={{objectFit: "cover"}}
                  />
                  <div
                    className="carousel-caption d-flex flex-column align-items-center justify-content-center"
                  >
                    <div className="p-3" style={{ maxWidth: "700px" }}>
                      <h1 className="display-3 text-white mb-4 animated slideInDown">
                        Most Relaxing Place
                      </h1>
                      <a
                        href="#Rooms"
                        className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft"
                        >Our Rooms</a
                      >
                      <a
                        href="tel:+91 6378365775"
                        className="btn btn-light py-md-3 px-md-5 animated slideInRight"
                        >Book A Room</a
                      >
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#header-carousel"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
           {/* Carousel End  */}
      <div className="container-xxl bg-white p-0">
           {/* Spinner Start  */}
           {/* <div
            id="spinner"
            className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
          >
            <div
              className="spinner-border text-primary"
              style={{width: "3rem", height: "3rem"}}
              role="status"
            >
              <span className="sr-only">Loading...</span>
            </div>
          </div>  */}
           {/* Spinner End  */}
    

     
           {/* About Start  */}
          <div className="container-xxl py-5" id="about">
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
                    adventure. Discover cosy dormitory rooms and a private double
                    bedroom, designed to provide a peaceful oasis in the heart of
                    the city&apos;s vibrant old town.
                  </p>
                  <button 
                    className="btn btn-primary py-3 px-5 mt-2" 
                    type="button"
                    onClick={openPropertyGallery}
                  >
                    Property Images
                  </button>
                </div>
                <div className="col-lg-6">
                  <div className="row g-3">
                    <div className="col-6 text-end">
                      <button
                        type="button"
                        className="p-0 border-0 bg-transparent img-fluid rounded w-75 wow zoomIn"
                        style={{ marginTop: "25%" }}
                        onClick={openPropertyGallery}
                        aria-label="Open property gallery"
                      >
                        <img
                          className="img-fluid rounded w-100"
                          data-wow-delay="0.1s"
                          src="/img/General/CKC03844-HDR.jpg"
                          alt="Heritage building exterior"
                          style={{ pointerEvents: "none" }}
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="col-6 text-start">
                      <button
                        type="button"
                        className="p-0 border-0 bg-transparent img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.3s"
                        onClick={openPropertyGallery}
                        aria-label="Open property gallery"
                        style={{ display: "inline-block" }}
                      >
                        <img
                          className="img-fluid rounded w-100"
                          src="/img/General/CKC03886-HDR.jpg"
                          alt="Storica Stays interior courtyard"
                          style={{ pointerEvents: "none" }}
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="col-6 text-end">
                      <button
                        type="button"
                        className="p-0 border-0 bg-transparent img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.5s"
                        onClick={openPropertyGallery}
                        aria-label="Open property gallery"
                        style={{ display: "inline-block" }}
                      >
                        <img
                          className="img-fluid rounded w-100"
                          src="/img/General/CKC03983-HDR.jpg"
                          alt="Traditional architecture details"
                          style={{ pointerEvents: "none" }}
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                    <div className="col-6 text-start">
                      <button
                        type="button"
                        className="p-0 border-0 bg-transparent img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.7s"
                        onClick={openPropertyGallery}
                        aria-label="Open property gallery"
                        style={{ display: "inline-block" }}
                      >
                        <img
                          className="img-fluid rounded w-100"
                          src="/img/General/CKC03907-HDR.jpg"
                          alt="Heritage hostel ambiance"
                          style={{ pointerEvents: "none" }}
                          tabIndex={-1}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* About End  */}
    
           <RoomsSection />

           <InstagramSection />

           <ReviewsSection />
    
         
    
    
           {/* Contact Start  */}
          <div className="container-xxl py-5" id="Contact">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title text-center text-primary text-uppercase">
                  Contact Us
                </h6>
                <h1 className="mb-5">
                  <span className="text-primary text-uppercase">Contact</span> For Any
                  Query
                </h1>
              </div>
              <div className="row g-4">
                <div className="col-12">
                  <div className="row gy-4">
                    <div className="col-md-4">
                      <h6
                        className="section-title text-start text-primary text-uppercase"
                      >
                        Booking
                      </h6>
                      <p>
                        <i className="fa fa-envelope-open text-primary me-2"></i
                        >info@storicastays.com
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h6
                        className="section-title text-start text-primary text-uppercase"
                      >
                        WhatsApp
                      </h6>
                      <p>
                        <i className="fab fa-whatsapp text-primary me-2"></i>
                        <a href="https://wa.me/916378365775">+91 6378365775</a>
                      </p>
                    </div>
                    <div className="col-md-4">
                      <h6
                        className="section-title text-start text-primary text-uppercase"
                      >
                        Call
                      </h6>
                      <p>
                        <i className="fa fa-phone-alt text-primary me-2"></i>
                        <a href="tel:+91 6378365775">+91 6378365775</a>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 wow fadeIn" data-wow-delay="0.1s">
                   {/*                  <iframe
                    className="position-relative rounded w-100 h-100"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                    frameBorder="0"
                    style={{minHeight: "350px", border: "0"}}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex={0}
                  ></iframe>*/}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3576.877455430147!2d73.02044147618096!3d26.29807238623277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418d00351ddf83%3A0xef89956f3c6c3ae5!2sStorica%20Stays!5e0!3m2!1sen!2sin!4v1741427350058!5m2!1sen!2sin"
                    className="w-100 w-sm-auto"
                    width="600"
                    height="450"
                    style={{border: "0"}}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Storica Stays Location Map"
                  ></iframe>
                </div>
                <div className="col-md-6">
                  <div className="wow fadeInUp" data-wow-delay="0.2s">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="/img/General/CKC03792-HDR.jpg"
                        alt="Storica Stays heritage building"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* Contact End  */}
    
        </div>
      </>
    );

}
