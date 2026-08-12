import { Landmark, UtensilsCrossed, MapPin, Wifi, Clock, ShieldCheck, Hotel, Star, Headphones } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/ui/SectionHeading';
import Button from '../../components/ui/Button';
import Card from '../../components/ui/Card';

const STATS = [
  { icon: Hotel, value: '5', label: 'Room Types' },
  { icon: Headphones, value: '24/7', label: 'Support' },
  { icon: Star, value: '4.8', label: 'Rating' },
];

const FEATURES = [
  {
    icon: Landmark,
    title: 'Heritage Property',
    description: 'Authentic Rajasthani architecture and traditional design, restored and cared for in the old towns of Jodhpur and Udaipur.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Rooftop Restaurant',
    description: 'Local and international cuisine served with fort and lake views from our rooftop restaurants.',
  },
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'In the heart of the old town, walking distance to forts, lakes, markets, and major attractions.',
  },
  {
    icon: Wifi,
    title: 'Free WiFi',
    description: 'Complimentary high-speed internet throughout the property, so you stay connected on the road.',
  },
  {
    icon: Clock,
    title: '24/7 Reception',
    description: 'Friendly staff on hand around the clock for check-in, travel tips, and anything you need.',
  },
  {
    icon: ShieldCheck,
    title: 'Safe & Secure',
    description: 'Secure lockers, CCTV surveillance, and well-lit common areas throughout the property.',
  },
];

export default function About() {
  return (
    <div>
      {/* Story */}
      <div className="py-20 sm:py-28" id="about">
        <Container className="grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <SectionHeading
              align="left"
              eyebrow="About Us"
              title={<>Welcome to <span className="text-primary-600">Storica Stays</span></>}
            />
            <p className="mt-6 font-sans text-sand-700 leading-relaxed">
              Nestled amidst the timeless beauty of Jodhpur and Udaipur, Storica Stays invites
              you to experience an unforgettable journey. With stunning fort views from its
              rooftop restaurant, this heritage property promises a unique blend of comfort
              and adventure.
            </p>
            <p className="mt-4 font-sans text-sand-700 leading-relaxed">
              Discover cosy dormitory rooms and private rooms designed to provide a peaceful
              oasis in the heart of each city&apos;s vibrant old town. Our heritage properties
              combine traditional Rajasthani architecture with modern amenities to ensure your
              stay is both authentic and comfortable.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-6 max-w-sm">
              {STATS.map(({ icon: Icon, value, label }) => (
                <div key={label}>
                  <Icon size={20} className="text-primary-600" />
                  <p className="mt-2 font-display text-2xl text-ink-900">{value}</p>
                  <p className="font-sans text-xs text-sand-500">{label}</p>
                </div>
              ))}
            </div>

            <Button href="/#Contact" size="lg" className="mt-10">Contact Us</Button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src="/img/General/CKC03844-HDR.jpg"
              alt="Storica Stays heritage property"
              className="col-span-2 h-64 w-full rounded-2xl object-cover"
            />
            <img
              src="/img/General/CKC03886-HDR.jpg"
              alt="Rooftop restaurant view"
              className="h-40 w-full rounded-2xl object-cover"
            />
            <img
              src="/img/General/CKC03983-HDR.jpg"
              alt="Heritage architecture"
              className="h-40 w-full rounded-2xl object-cover"
            />
          </div>
        </Container>
      </div>

      {/* Features */}
      <div className="py-20 sm:py-28 bg-sand-50">
        <Container>
          <SectionHeading
            eyebrow="Our Features"
            title={<>Why Choose <span className="text-primary-600">Storica Stays</span></>}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {FEATURES.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="p-6">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 font-display text-lg text-ink-900">{title}</h3>
                <p className="mt-2 font-sans text-sm text-sand-600 leading-relaxed">{description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </div>
    </div>
  );
}
