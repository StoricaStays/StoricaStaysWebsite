interface RoomCardProps {
  title: string;
  image: string;
  alt: string;
  bedCount: number;
  bathCount: number;
  modalTarget: string;
  delay: string;
  phone: string;
}

export default function RoomCard({
  title,
  image,
  alt,
  bedCount,
  bathCount,
  modalTarget,
  delay,
  phone
}: RoomCardProps) {
  return (
    <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={delay}>
      <div className="room-item shadow rounded overflow-hidden">
        <div className="position-relative">
          <img
            className="img-fluid"
            src={image}
            alt={alt}
          />
        </div>
        <div className="p-4 mt-2">
          <div className="d-flex justify-content-between mb-3">
            <h5 className="mb-0">{title}</h5>
            <div className="ps-2">
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
              <small className="fa fa-star text-primary"></small>
            </div>
          </div>
          <div className="d-flex mb-3">
            <small className="border-end me-3 pe-3">
              <i className="fa fa-bed text-primary me-2"></i>{bedCount} Bed
            </small>
            <small className="border-end me-3 pe-3">
              <i className="fa fa-bath text-primary me-2"></i>{bathCount} Bath
            </small>
            <small>
              <i className="fa fa-wifi text-primary me-2"></i>Wifi
            </small>
          </div>

          <div className="d-flex justify-content-between">
            <button
              className="btn btn-sm btn-primary rounded py-2 px-4"
              type="button"
              data-bs-toggle="modal"
              data-bs-target={modalTarget}
            >
              View Detail
            </button>
            <a
              className="btn btn-sm btn-dark rounded py-2 px-4"
              href={`tel:${phone}`}
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
