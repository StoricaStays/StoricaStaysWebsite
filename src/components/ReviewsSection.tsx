"use client";

import SectionHeading from "./SectionHeading";

interface Review {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar?: string;
  platform: "Google" | "Booking.com" | "TripAdvisor" | "Hostelworld";
}

const reviews: Review[] = [
  {
    id: "1",
    name: "Rajesh Kumar",
    rating: 5,
    comment:
      "Amazing heritage hostel with stunning fort views! The rooftop restaurant is absolutely beautiful. Staff was very helpful and the dormitory was clean and comfortable.",
    date: "December 2024",
    platform: "Google",
  },
  {
    id: "2",
    name: "Sarah Johnson",
    rating: 5,
    comment:
      "Perfect location in the old town of Jodhpur. The heritage architecture is breathtaking and the atmosphere is so peaceful. Highly recommend for backpackers!",
    date: "February 2025",
    platform: "Booking.com",
  },
  {
    id: "3",
    name: "Marco Silva",
    rating: 4,
    comment:
      "Great value for money! The heritage room was spacious and clean. Love the traditional Rajasthani architecture. The rooftop views are incredible.",
    date: "December 2024",
    platform: "Hostelworld",
  },
  {
    id: "4",
    name: "Priya Sharma",
    rating: 5,
    comment:
      "Such a unique experience staying in this heritage building! The staff went above and beyond to make our stay comfortable. The location is perfect for exploring Jodhpur.",
    date: "January 2025",
    platform: "TripAdvisor",
  },
  {
    id: "5",
    name: "David Thompson",
    rating: 5,
    comment:
      "Incredible place! The blend of heritage architecture with modern amenities is perfect. The fort views from the rooftop are unforgettable. Will definitely come back!",
    date: "January 2025",
    platform: "Google",
  },
  {
    id: "6",
    name: "Anita Gupta",
    rating: 4,
    comment:
      "Beautiful hostel in the heart of old Jodhpur. The heritage charm is well preserved. Clean rooms, friendly staff, and great location for sightseeing.",
    date: "July 2025",
    platform: "Booking.com",
  },
];

const StarRating = ({ rating }: { rating: number }) => {
  return (
    <span className="review-stars" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <i
          key={star}
          className={`fa fa-star ${star <= rating ? "" : "muted"}`}
          style={{ opacity: star <= rating ? 1 : 0.28 }}
        />
      ))}
    </span>
  );
};

const PlatformBadge = ({ platform }: { platform: string }) => {
  const badgeClass =
    platform === "Google"
      ? "platform-badge--google"
      : platform === "Booking.com"
        ? "platform-badge--booking"
        : platform === "TripAdvisor"
          ? "platform-badge--tripadvisor"
          : "platform-badge--hostelworld";
  return <span className={`platform-badge ${badgeClass}`}>{platform}</span>;
};

export default function ReviewsSection() {
  return (
    <section className="ss-section" id="Reviews">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Guest Stories"
          title={
            <>
              What Our <em>Guests</em> Say
            </>
          }
          sub="Stories from the rooftop, the dorm bunks, and the blue lanes beyond."
        />
        <div className="row g-4">
          {reviews.map((review, index) => (
            <div key={review.id} className="col-lg-4 col-md-6">
              <figure className="review-card ss-reveal is-visible" style={{ transitionDelay: `${index * 80}ms` }}>
                <div className="review-card-head">
                  <span className="review-avatar">
                    {review.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                  <div>
                    <h4 className="review-name">{review.name}</h4>
                    <StarRating rating={review.rating} />
                  </div>
                </div>
                <blockquote>{review.comment}</blockquote>
                <figcaption className="review-card-foot">
                  <span>
                    <i className="fa fa-calendar-o me-1" /> {review.date}
                  </span>
                  <PlatformBadge platform={review.platform} />
                </figcaption>
              </figure>
            </div>
          ))}
        </div>

        <div className="ss-rating-band mt-5 wow fadeInUp">
          <div className="row align-items-center">
            <div className="col-md-3 text-center">
              <div className="ss-stat" style={{ padding: 0, background: "transparent", border: "none" }}>
                <b>4.8 / 5</b>
                <StarRating rating={5} />
              </div>
            </div>
            <div className="col-md-6 text-center">
              <h4 className="text-white mb-2" style={{ fontFamily: "var(--font-display)" }}>
                Excellent — rated by our guests
              </h4>
              <p className="text-white mb-0" style={{ opacity: 0.85 }}>
                Based on 300+ verified reviews across Google, Booking.com, TripAdvisor &amp;
                Hostelworld
              </p>
            </div>
            <div className="col-md-3 text-center">
              <a
                href="https://www.google.com/travel/hotels/entity/CgsI5fWw4_Ot5cTvARAB/reviews?q=storica%20stays&hl=en-IN&gl=in&cs=1"
                className="ss-btn ss-btn-saffron ss-btn-sm"
                target="_blank"
                rel="noopener noreferrer"
              >
                Write a Review
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
