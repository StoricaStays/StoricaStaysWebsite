'use client';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  platform: 'Google' | 'Booking.com' | 'TripAdvisor' | 'Hostelworld';
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment: 'Amazing heritage hostel with stunning fort views! The rooftop restaurant is absolutely beautiful. Staff was very helpful and the dormitory was clean and comfortable.',
    date: 'December 2024',
    platform: 'Google'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Perfect location in the old town of Jodhpur. The heritage architecture is breathtaking and the atmosphere is so peaceful. Highly recommend for backpackers!',
    date: 'February 2025',
    platform: 'Booking.com'
  },
  {
    id: '3',
    name: 'Marco Silva',
    rating: 4,
    comment: 'Great value for money! The heritage room was spacious and clean. Love the traditional Rajasthani architecture. The rooftop views are incredible.',
    date: 'December 2024',
    platform: 'Hostelworld'
  },
  {
    id: '4',
    name: 'Priya Sharma',
    rating: 5,
    comment: 'Such a unique experience staying in this heritage building! The staff went above and beyond to make our stay comfortable. The location is perfect for exploring Jodhpur.',
    date: 'January 2025',
    platform: 'TripAdvisor'
  },
  {
    id: '5',
    name: 'David Thompson',
    rating: 5,
    comment: 'Incredible place! The blend of heritage architecture with modern amenities is perfect. The fort views from the rooftop are unforgettable. Will definitely come back!',
    date: 'January 2025',
    platform: 'Google'
  },
  {
    id: '6',
    name: 'Anita Gupta',
    rating: 4,
    comment: 'Beautiful hostel in the heart of old Jodhpur. The heritage charm is well preserved. Clean rooms, friendly staff, and great location for sightseeing.',
    date: 'July 2025',
    platform: 'Booking.com'
  }
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="d-flex">
      {[1, 2, 3, 4, 5].map((star) => (
        <small
          key={star}
          className={`fa fa-star ${star <= rating ? 'text-primary' : 'text-muted'}`}
        ></small>
      ))}
    </div>
  );
};

const PlatformBadge = ({ platform }: { platform: string }) => {
  const getBadgeClass = (platform: string) => {
    switch (platform) {
      case 'Google':
        return 'badge bg-danger';
      case 'Booking.com':
        return 'badge bg-primary';
      case 'TripAdvisor':
        return 'badge bg-success';
      case 'Hostelworld':
        return 'badge bg-warning text-dark';
      default:
        return 'badge bg-secondary';
    }
  };

  return <span className={getBadgeClass(platform)}>{platform}</span>;
};

export default function ReviewsSection() {
  return (
    <>
      {/* Reviews Start */}
      <div className="container-xxl py-5" id="Reviews">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">
              Guest Reviews
            </h6>
            <h1 className="mb-5">
              What Our <span className="text-primary text-uppercase">Guests</span> Say
            </h1>
          </div>
          <div className="row g-4">
            {reviews.map((review, index) => (
              <div 
                key={review.id} 
                className="col-lg-4 col-md-6 wow fadeInUp" 
                data-wow-delay={`${0.1 + index * 0.1}s`}
              >
                <div className="testimonial-item bg-light rounded p-4 h-100">
                  <div className="d-flex align-items-center mb-3">
                    <div className="flex-shrink-0">
                      <div 
                        className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                        style={{ width: '50px', height: '50px' }}
                      >
                        <span className="text-white fw-bold">
                          {review.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-1">{review.name}</h5>
                      <div className="d-flex align-items-center">
                        <StarRating rating={review.rating} />
                        <small className="text-muted ms-2">({review.rating}/5)</small>
                      </div>
                    </div>
                  </div>
                  <p className="mb-3">&ldquo;{review.comment}&rdquo;</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <small className="text-muted">{review.date}</small>
                    <PlatformBadge platform={review.platform} />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Overall Rating Summary */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="bg-primary rounded p-4 text-center wow fadeInUp" data-wow-delay="0.1s">
                <div className="row align-items-center">
                  <div className="col-md-3">
                    <h2 className="text-white mb-0">4.8/5</h2>
                    <div className="d-flex justify-content-center mt-2">
                      <StarRating rating={5} />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <h4 className="text-white mb-2">Excellent Rating</h4>
                    <p className="text-white mb-0">
                      Based on 200+ verified guest reviews across multiple platforms
                    </p>
                  </div>
                  <div className="col-md-3">
                    <a 
                      href="https://www.google.com/travel/hotels/entity/CgsI5fWw4_Ot5cTvARAB/reviews?q=storica%20stays&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958594%2C72958624%2C72959982%2C72963671%2C72972040%2C73016630&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaSQorEicyJTB4Mzk0MThkMDAzNTFkZGY4MzoweGVmODk5NTZmM2M2YzNhZTUaABIaEhQKBwjpDxAHGAwSBwjpDxAHGA0YATICEAAqCQoFOgNJTlIaAA&qs=CAE4AkIJCeU6bDxvlYnvQgkJ5TpsPG-Vie8&ictx=111&utm_campaign=sharing&utm_medium=link&utm_source=htls" 
                      className="btn btn-light py-2 px-4"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Write a Review
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Reviews End */}
    </>
  );
}
