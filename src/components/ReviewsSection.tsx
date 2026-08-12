import SectionHeading from './SectionHeading';

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  platform: 'Google' | 'Booking.com' | 'TripAdvisor' | 'Hostelworld';
}

const reviews: Review[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    rating: 5,
    comment:
      'Amazing heritage hostel with stunning fort views! The rooftop restaurant is absolutely beautiful. Staff was very helpful and the dorm was clean and comfortable.',
    date: 'December 2024',
    platform: 'Google',
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    rating: 5,
    comment:
      'Perfect location in the old town of Jodhpur. The heritage architecture is breathtaking and the atmosphere is so peaceful. Highly recommend for travellers!',
    date: 'February 2025',
    platform: 'Booking.com',
  },
  {
    id: '3',
    name: 'Marco Silva',
    rating: 4,
    comment:
      'Great value for money! The heritage room was spacious and clean. Love the traditional Rajasthani architecture. The rooftop views are incredible.',
    date: 'December 2024',
    platform: 'Hostelworld',
  },
  {
    id: '4',
    name: 'Priya Sharma',
    rating: 5,
    comment:
      'Such a unique experience staying in this heritage building! The staff went above and beyond to make our stay comfortable.',
    date: 'January 2025',
    platform: 'TripAdvisor',
  },
  {
    id: '5',
    name: 'David Thompson',
    rating: 5,
    comment:
      'Incredible place! The blend of heritage architecture with modern amenities is perfect. The fort views from the rooftop are unforgettable. Will definitely come back!',
    date: 'January 2025',
    platform: 'Google',
  },
  {
    id: '6',
    name: 'Anita Gupta',
    rating: 4,
    comment:
      'Beautiful stay in the heart of old Jodhpur. The heritage charm is well preserved. Clean rooms, friendly staff, and great location for sightseeing.',
    date: 'July 2025',
    platform: 'Booking.com',
  },
];

const Stars = ({ rating }: { rating: number }) => (
  <div className="stars" aria-label={`${rating} out of 5 stars`}>
    {[1, 2, 3, 4, 5].map((star) => (
      <i
        key={star}
        className={`fa fa-star ${star <= rating ? '' : 'text-muted'}`}
      ></i>
    ))}
  </div>
);

const platformBadge: Record<string, string> = {
  Google: 'badge-plat badge-google',
  'Booking.com': 'badge-plat badge-booking',
  TripAdvisor: 'badge-plat badge-tripadvisor',
  Hostelworld: 'badge-plat badge-hostelworld',
};

export default function ReviewsSection({
  title = "What Our Guests Say",
}: {
  title?: string;
}) {
  return (
    <section className="section bg-ivory">
      <div className="container">
        <SectionHeading
          eyebrow="Guest Reviews"
          title={title}
          lead="Real stories from travellers who stayed with us in Jodhpur and Udaipur."
          align="center"
        />

        <div className="row g-4">
          {reviews.map((review, index) => (
            <div
              key={review.id}
              className="col-lg-4 col-md-6"
              data-reveal
              style={{ transitionDelay: `${(index % 3) * 0.08}s` }}
            >
              <div className="testimonial-card">
                <div className="quote">&ldquo;</div>
                <Stars rating={review.rating} />
                <p className="comment">{review.comment}</p>
                <div className="d-flex align-items-center justify-content-between">
                  <div className="d-flex align-items-center gap-2">
                    <div className="testimonial-avatar">
                      {review.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')
                        .toUpperCase()}
                    </div>
                    <div className="who">
                      <h6>{review.name}</h6>
                      <small>{review.date}</small>
                    </div>
                  </div>
                  <span className={platformBadge[review.platform]}>{review.platform}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="row mt-5" data-reveal>
          <div className="col-12">
            <div className="rating-banner d-flex flex-column flex-md-row align-items-center gap-4">
              <div className="text-center me-md-4">
                <div className="big">4.8</div>
                <Stars rating={5} />
              </div>
              <div className="flex-grow-1 text-center text-md-start">
                <h4 className="text-ivory mb-1">Excellent Rating</h4>
                <p className="mb-0" style={{ color: 'rgba(250,246,239,0.7)' }}>
                  Based on 300+ verified guest reviews across multiple platforms
                </p>
              </div>
              <a
                href="https://www.google.com/travel/hotels/entity/CgsI5fWw4_Ot5cTvARAB"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-brass"
              >
                Review Us on Google
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}