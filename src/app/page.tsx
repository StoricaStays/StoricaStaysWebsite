export default function Home() {
  return (
<>
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
                    src="img/hero-slider/CKC04015-HDR.jpg"
                    alt="Image"
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
                    src="img/hero-slider/CKC03767.jpg"
                    alt="Image"
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
                    src="img/hero-slider/CKC03841-HDR.jpg"
                    alt="Image"
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
    
           {/* Booking Start  */}
           {/* <div
            className="container-fluid booking pb-5 wow fadeIn"
            data-wow-delay="0.1s"
          >
            <div className="container">
              <div className="bg-white shadow" style={{padding: "35px"}}>
                <div className="row g-2">
                  <div className="col-md-10">
                    <div className="row g-2">
                      <div className="col-md-3">
                        <div className="date" id="date1" data-target-input="nearest">
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            placeholder="Check in"
                            data-target="#date1"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <div className="date" id="date2" data-target-input="nearest">
                          <input
                            type="text"
                            className="form-control datetimepicker-input"
                            placeholder="Check out"
                            data-target="#date2"
                            data-toggle="datetimepicker"
                          />
                        </div>
                      </div>
                      <div className="col-md-3">
                        <select className="form-select">
                          <option selected>Adult</option>
                          <option value="1">Adult 1</option>
                          <option value="2">Adult 2</option>
                          <option value="3">Adult 3</option>
                        </select>
                      </div>
                      <div className="col-md-3">
                        <select className="form-select">
                          <option selected>Child</option>
                          <option value="1">Child 1</option>
                          <option value="2">Child 2</option>
                          <option value="3">Child 3</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <button className="btn btn-primary w-100">Submit</button>
                  </div>
                </div>
              </div>
            </div>
          </div>  */}
           {/* Booking End  */}
    
           {/* About Start  */}
          <div className="container-xxl py-5" id="about">
            <div className="container">
              <div className="row g-5 align-items-center">
                <div className="col-lg-6">
                  <h6 className="section-title text-start text-primary text-uppercase">
                    About Us
                  </h6>
                  <h1 className="mb-4">
                    Welcome to
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
                   {/* <div className="row g-3 pb-4">
                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.1s">
                      <div className="border rounded p-1">
                        <div className="border rounded text-center p-4">
                          <i className="fa fa-hotel fa-2x text-primary mb-2"></i>
                          <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                          <p className="mb-0">Rooms</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.3s">
                      <div className="border rounded p-1">
                        <div className="border rounded text-center p-4">
                          <i className="fa fa-users-cog fa-2x text-primary mb-2"></i>
                          <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                          <p className="mb-0">Staffs</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-4 wow fadeIn" data-wow-delay="0.5s">
                      <div className="border rounded p-1">
                        <div className="border rounded text-center p-4">
                          <i className="fa fa-users fa-2x text-primary mb-2"></i>
                          <h2 className="mb-1" data-toggle="counter-up">1234</h2>
                          <p className="mb-0">Clients</p>
                        </div>
                      </div>
                    </div>
                  </div>  */}
                  <a className="btn btn-primary py-3 px-5 mt-2" href="">Explore More</a>
                </div>
                <div className="col-lg-6">
                  <div className="row g-3">
                    <div className="col-6 text-end">
                      <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.1s"
                        src="img/General/CKC03844-HDR.jpg"
                        style={{marginTop: "25%"}}
                      />
                    </div>
                    <div className="col-6 text-start">
                      <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.3s"
                        src="img/General/CKC03886-HDR.jpg"
                      />
                    </div>
                    <div className="col-6 text-end">
                      <img
                        className="img-fluid rounded w-100 wow zoomIn"
                        data-wow-delay="0.5s"
                        src="img/General/CKC03983-HDR.jpg"
                      />
                    </div>
                    <div className="col-6 text-start">
                      <img
                        className="img-fluid rounded w-75 wow zoomIn"
                        data-wow-delay="0.7s"
                        src="img/General/CKC03907-HDR.jpg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* About End  */}
    
           {/* Room Start  */}
          <div className="container-xxl py-5" id="Rooms">
            <div className="container">
              <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
                <h6 className="section-title text-center text-primary text-uppercase">
                  Our Rooms
                </h6>
                <h1 className="mb-5">
                  Explore Our <span className="text-primary text-uppercase">Rooms</span>
                </h1>
              </div>
              <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="img/Heritage Room/IMG_4303.JPG"
                        alt=""
                      />
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">Superior Heritage</h5>
                        <div className="ps-2">
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                        <small
                          ><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                      </div>
    
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-sm btn-primary rounded py-2 px-4"
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#room-heritage-Modal"
                          >View Detail</a>
                        <a
                          className="btn btn-sm btn-dark rounded py-2 px-4"
                          href="tel:+91 6378365775"
                          >Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="img/DLX Double Bed/IMG_4115.JPG"
                        alt=""
                      />
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">Deluxe Double Room</h5>
                        <div className="ps-2">
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                        <small
                          ><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                      </div>
    
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-sm btn-primary rounded py-2 px-4"
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#dlx-room-Modal"
                          >View Detail</a>
                        <a
                          className="btn btn-sm btn-dark rounded py-2 px-4"
                          href="tel:+91 6378365775"
                          >Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="img/4 Bed Dorm/IMG_3748.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">4 Bed Dorm</h5>
                        <div className="ps-2">
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bed text-primary me-2"></i>4 Bed</small>
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                        <small
                          ><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                      </div>
    
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-sm btn-primary rounded py-2 px-4"
                          href=""
                          data-bs-toggle="modal"
                          data-bs-target="#bed-4-room-Modal"
                          >View Detail</a>
                        <a
                          className="btn btn-sm btn-dark rounded py-2 px-4"
                          href="tel:+91 6378365775"
                          >Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="img/8 Bed Dorm/IMG_3754.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">8 Bed Dorm</h5>
                        <div className="ps-2">
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bed text-primary me-2"></i>8 Bed</small>
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                        <small
                          ><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                      </div>
    
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-sm btn-primary rounded py-2 px-4"
                          href=""
                          data-bs-toggle="modal"
                          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                          data-bs-target="#bed-8-room-model"
                          >View Detail</a>
                        <a
                          className="btn btn-sm btn-dark rounded py-2 px-4"
                          href="tel:+91 6378365775"
                          >Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.6s">
                  <div className="room-item shadow rounded overflow-hidden">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="img/3 Bed Dorm/IMG_3612.jpg"
                        alt=""
                      />
                    </div>
                    <div className="p-4 mt-2">
                      <div className="d-flex justify-content-between mb-3">
                        <h5 className="mb-0">3 Bed Dorm</h5>
                        <div className="ps-2">
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                          <small className="fa fa-star text-primary"></small>
                        </div>
                      </div>
                      <div className="d-flex mb-3">
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bed text-primary me-2"></i>3 Bed</small>
                        <small className="border-end me-3 pe-3"
                          ><i className="fa fa-bath text-primary me-2"></i>1 Bath</small>
                        <small
                          ><i className="fa fa-wifi text-primary me-2"></i>Wifi</small>
                      </div>
    
                      <div className="d-flex justify-content-between">
                        <a
                          className="btn btn-sm btn-primary rounded py-2 px-4"
                          href=""
                          data-bs-toggle="modal"
                          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                          data-bs-target="#bed-3-room-model"
                          >View Detail</a>
                        <a
                          className="btn btn-sm btn-dark rounded py-2 px-4"
                          href="tel:+91 6378365775"
                          >Book Now</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* Room End  */}
           {/* room-heritage Model Start */}
          <div
            className="modal fade"
            id="room-heritage-Modal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Room&apos;s Images</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                   {/* 16:9 aspect ratio  */}
                  <div className="ratio ratio-4x3">
                    <div
                      id="room-heritage-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/Heritage Room/IMG_4302.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/Heritage Room/IMG_4303.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item active">
                          <img
                            className="w-100"
                            src="img/Heritage Room/IMG_3589.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/Heritage Room/IMG_4304.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/Heritage Room/IMG_4305.JPG"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#room-heritage-carousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#room-heritage-carousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* room-heritage Model End  */}
    
           {/* dlx room- Model Start */}
          <div
            className="modal fade"
            id="dlx-room-Modal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Room&apos;s Images</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                   {/* 16:9 aspect ratio  */}
                  <div className="ratio ratio-4x3">
                    <div
                      id="dlx-room-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4020.PNG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4111.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4112.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4113.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4115.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4116.JPG"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/DLX Double Bed/IMG_4121.JPG"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#dlx-room-carousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#dlx-room-carousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* dlx -room- Model End  */}
    
           {/* 4-bed-room-Modal Model Start */}
          <div
            className="modal fade"
            id="bed-4-room-Modal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Room&apos;s Images</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                   {/* 16:9 aspect ratio  */}
                  <div className="ratio ratio-4x3">
                    <div
                      id="bed-4-room-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="w-100"
                            src="img/4 Bed Dorm/IMG_3746.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/4 Bed Dorm/IMG_3748.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/4 Bed Dorm/IMG_3749.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/4 Bed Dorm/IMG_3750.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/4 Bed Dorm/IMG_3752.jpeg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#bed-4-room-carousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#bed-4-room-carousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* 4-bed-room-carousel Model End  */}
    
           {/* 8-bed-room-model Model Start */}
          <div
            className="modal fade"
            id="bed-8-room-model"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Room&apos;s Images</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                   {/* 16:9 aspect ratio  */}
                  <div className="ratio ratio-4x3">
                    <div
                      id="#bed-8-room-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_3754.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_3755.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_3756.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_3757.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_3758.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_3759.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/8 Bed Dorm/IMG_4638.JPG"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#bed-8-room-carousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#bed-8-room-carousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* 8 bed room- Model End  */}
    
           {/* 3-bed-room-model Model Start */}
          <div
            className="modal fade"
            id="bed-3-room-model"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content rounded-0">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Room&apos;s Images</h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">
                   {/* 16:9 aspect ratio  */}
                  <div className="ratio ratio-4x3">
                    <div
                      id="bed-3-room-carousel"
                      className="carousel slide"
                      data-bs-ride="carousel"
                    >
                      <div className="carousel-inner">
                        <div className="carousel-item active">
                          <img
                            className="w-100"
                            src="img/3 Bed Dorm/IMG_3611.jpeg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/3 Bed Dorm/IMG_3612.jpg"
                            alt="Image"
                          />
                        </div>
                        <div className="carousel-item">
                          <img
                            className="w-100"
                            src="img/3 Bed Dorm/IMG_3614.jpg"
                            alt="Image"
                          />
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#bed-3-room-carousel"
                        data-bs-slide="prev"
                      >
                        <span
                          className="carousel-control-prev-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Previous</span>
                      </button>
                      <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#bed-3-room-carousel"
                        data-bs-slide="next"
                      >
                        <span
                          className="carousel-control-next-icon"
                          aria-hidden="true"
                        ></span>
                        <span className="visually-hidden">Next</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
           {/* 3 bed room Model End  */}
    
           {/* Video Start  */}
           {/* <div className="container-xxl py-5 px-0 wow zoomIn" data-wow-delay="0.1s">
            <div className="row g-0">
              <div className="col-md-6 bg-dark d-flex align-items-center">
                <div className="p-5">
                  <h1 className="text-white mb-4">Discover A Brand Luxurious Hotel</h1>
                  <p className="text-white mb-4">
                    Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit.
                    Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,
                    sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                  <a href="" className="btn btn-primary py-md-3 px-md-5 me-3"
                    >Our Rooms</a
                  >
                  <a href="" className="btn btn-light py-md-3 px-md-5">Book A Room</a>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video">
                  <button
                    type="button"
                    className="btn-play"
                    data-bs-toggle="modal"
                    data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
                    data-bs-target="#videoModal"
                  >
                    <span></span>
                  </button>
                </div>
              </div>
            </div>
          </div>  */}
    
    
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
                  ></iframe>
                </div>
                <div className="col-md-6">
                  <div className="wow fadeInUp" data-wow-delay="0.2s">
                    <div className="position-relative">
                      <img
                        className="img-fluid"
                        src="img/General/CKC03792-HDR.jpg"
                        alt=""
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
