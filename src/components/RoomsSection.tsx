import RoomCard from './RoomCard';

interface Room {
  id: string;
  title: string;
  image: string;
  alt: string;
  bedCount: number;
  bathCount: number;
  modalTarget: string;
  delay: string;
}

const rooms: Room[] = [
  {
    id: 'heritage',
    title: 'Superior Heritage',
    image: '/img/Heritage Room/IMG_4303.JPG',
    alt: 'Heritage room interior',
    bedCount: 3,
    bathCount: 1,
    modalTarget: '#room-heritage-Modal',
    delay: '0.1s'
  },
  {
    id: 'dlx-double',
    title: 'Deluxe Double Room',
    image: '/img/DLX Double Bed/IMG_4115.JPG',
    alt: 'Deluxe double room',
    bedCount: 3,
    bathCount: 1,
    modalTarget: '#dlx-room-Modal',
    delay: '0.3s'
  },
  {
    id: '4-bed-dorm',
    title: '4 Bed Dorm',
    image: '/img/4 Bed Dorm/IMG_3748.jpeg',
    alt: '4 bed dormitory',
    bedCount: 4,
    bathCount: 1,
    modalTarget: '#bed-4-room-Modal',
    delay: '0.6s'
  },
  {
    id: '8-bed-dorm',
    title: '8 Bed Dorm',
    image: '/img/8 Bed Dorm/IMG_3754.jpeg',
    alt: '8 bed dormitory',
    bedCount: 8,
    bathCount: 1,
    modalTarget: '#bed-8-room-model',
    delay: '0.6s'
  },
  {
    id: '3-bed-dorm',
    title: '3 Bed Dorm',
    image: '/img/3 Bed Dorm/IMG_3612.jpg',
    alt: '3 bed dormitory',
    bedCount: 3,
    bathCount: 1,
    modalTarget: '#bed-3-room-model',
    delay: '0.6s'
  }
];

export default function RoomsSection() {
  const phone = '+91 6378365775';

  return (
    <>
      {/* Room Start */}
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
            {rooms.map((room) => (
              <RoomCard
                key={room.id}
                title={room.title}
                image={room.image}
                alt={room.alt}
                bedCount={room.bedCount}
                bathCount={room.bathCount}
                modalTarget={room.modalTarget}
                delay={room.delay}
                phone={phone}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Room End */}

      {/* Room Modals Start */}
      {/* Heritage Room Modal */}
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
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/Heritage Room/IMG_4303.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item active">
                      <img
                        className="w-100"
                        src="img/Heritage Room/IMG_3589.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/Heritage Room/IMG_4304.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/Heritage Room/IMG_4305.JPG"
                        alt=""
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

      {/* Deluxe Room Modal */}
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
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/DLX Double Bed/IMG_4111.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/DLX Double Bed/IMG_4112.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/DLX Double Bed/IMG_4113.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/DLX Double Bed/IMG_4115.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/DLX Double Bed/IMG_4116.JPG"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/DLX Double Bed/IMG_4121.JPG"
                        alt=""
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

      {/* 4 Bed Dorm Modal */}
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
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/4 Bed Dorm/IMG_3748.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/4 Bed Dorm/IMG_3749.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/4 Bed Dorm/IMG_3750.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/4 Bed Dorm/IMG_3752.jpeg"
                        alt=""
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

      {/* 8 Bed Dorm Modal */}
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
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/8 Bed Dorm/IMG_3755.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/8 Bed Dorm/IMG_3756.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/8 Bed Dorm/IMG_3757.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/8 Bed Dorm/IMG_3758.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/8 Bed Dorm/IMG_3759.jpeg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/8 Bed Dorm/IMG_4638.JPG"
                        alt=""
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

      {/* 3 Bed Dorm Modal */}
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
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/3 Bed Dorm/IMG_3612.jpg"
                        alt=""
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        className="w-100"
                        src="img/3 Bed Dorm/IMG_3614.jpg"
                        alt=""
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
      {/* Room Modals End */}
    </>
  );
}
