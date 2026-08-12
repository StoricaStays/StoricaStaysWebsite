'use client';

import { Star } from "lucide-react";
import Container from "./ui/Container";
import SectionHeading from "./ui/SectionHeading";
import Card from "./ui/Card";
import Button from "./ui/Button";

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

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        size={14}
        className={star <= rating ? "fill-primary-500 text-primary-500" : "text-sand-300"}
      />
    ))}
  </div>
);

const platformClasses: Record<Review["platform"], string> = {
  Google: "bg-red-50 text-red-600",
  "Booking.com": "bg-primary-50 text-primary-700",
  TripAdvisor: "bg-green-50 text-green-700",
  Hostelworld: "bg-amber-50 text-amber-700",
};

const PlatformBadge = ({ platform }: { platform: Review["platform"] }) => (
  <span className={`rounded-full px-3 py-1 text-xs font-medium ${platformClasses[platform]}`}>
    {platform}
  </span>
);

export default function ReviewsSection() {
  return (
    <div className="py-20 sm:py-28 bg-sand-50" id="Reviews">
      <Container>
        <SectionHeading eyebrow="Guest Reviews" title={<>What Our <span className="text-primary-600">Guests</span> Say</>} />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <Card key={review.id} className="p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary-600 text-sm font-semibold text-white">
                  {review.name.split(' ').map((n) => n[0]).join('').toUpperCase()}
                </div>
                <div>
                  <p className="font-sans text-sm font-semibold text-ink-900">{review.name}</p>
                  <StarRating rating={review.rating} />
                </div>
              </div>
              <p className="font-sans text-sm leading-relaxed text-sand-700">&ldquo;{review.comment}&rdquo;</p>
              <div className="mt-auto flex items-center justify-between pt-2">
                <span className="font-sans text-xs text-sand-500">{review.date}</span>
                <PlatformBadge platform={review.platform} />
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-10 rounded-2xl bg-primary-600 px-8 py-10 text-center sm:text-left sm:flex sm:items-center sm:justify-between gap-8">
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <div>
              <p className="font-display text-4xl text-white">4.8/5</p>
              <div className="flex justify-center sm:justify-start mt-1"><StarRating rating={5} /></div>
            </div>
            <div>
              <p className="font-sans text-lg font-semibold text-white">Excellent Rating</p>
              <p className="font-sans text-sm text-primary-100">Based on 300+ verified guest reviews across multiple platforms</p>
            </div>
          </div>
          <Button
            href="https://www.google.com/travel/hotels/entity/CgsI5fWw4_Ot5cTvARAB/reviews?q=storica%20stays&g2lb=4965990%2C4969803%2C72277293%2C72302247%2C72317059%2C72414906%2C72471280%2C72472051%2C72485658%2C72560029%2C72573224%2C72616120%2C72647020%2C72648289%2C72686036%2C72760082%2C72803964%2C72832976%2C72882230%2C72958594%2C72958624%2C72959982%2C72963671%2C72972040%2C73016630&hl=en-IN&gl=in&cs=1&ssta=1&ts=CAEaSQorEicyJTB4Mzk0MThkMDAzNTFkZGY4MzoweGVmODk5NTZmM2M2YzNhZTUaABIaEhQKBwjpDxAHGAwSBwjpDxAHGA0YATICEAAqCQoFOgNJTlIaAA&qs=CAE4AkIJCeU6bDxvlYnvQgkJ5TpsPG-Vie8&ictx=111&utm_campaign=sharing&utm_medium=link&utm_source=htls"
            target="_blank"
            variant="outline"
            size="md"
            className="mt-6 sm:mt-0 shrink-0"
          >
            Write a Review
          </Button>
        </div>
      </Container>
    </div>
  );
}
