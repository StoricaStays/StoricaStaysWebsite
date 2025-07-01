import RoomCard from './RoomCard';

interface Room {
  id: string;
  title: string;
  image: string;
  alt: string;
  bedCount: number;
  bathCount: number;
  galleryImages: string[];
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
    galleryImages: [
      '/img/Heritage Room/IMG_4302.JPG',
      '/img/Heritage Room/IMG_3589.jpeg',
      '/img/Heritage Room/IMG_4304.JPG',
      '/img/Heritage Room/IMG_4305.JPG'
    ],
    delay: '0.1s'
  },
  {
    id: 'dlx-double',
    title: 'Deluxe Double Room',
    image: '/img/DLX Double Bed/IMG_4115.JPG',
    alt: 'Deluxe double room',
    bedCount: 3,
    bathCount: 1,
    galleryImages: [
      '/img/DLX Double Bed/IMG_4111.JPG',
      '/img/DLX Double Bed/IMG_4112.JPG',
      '/img/DLX Double Bed/IMG_4113.JPG',
      '/img/DLX Double Bed/IMG_4116.JPG',
      '/img/DLX Double Bed/IMG_4121.JPG'
    ],
    delay: '0.3s'
  },
  {
    id: '4-bed-dorm',
    title: '4 Bed Dorm',
    image: '/img/4 Bed Dorm/IMG_3748.jpeg',
    alt: '4 bed dormitory',
    bedCount: 4,
    bathCount: 1,
    galleryImages: [
      '/img/4 Bed Dorm/IMG_3746.jpeg',
      '/img/4 Bed Dorm/IMG_3749.jpeg',
      '/img/4 Bed Dorm/IMG_3750.jpeg',
      '/img/4 Bed Dorm/IMG_3752.jpeg'
    ],
    delay: '0.6s'
  },
  {
    id: '8-bed-dorm',
    title: '8 Bed Dorm',
    image: '/img/8 Bed Dorm/IMG_3754.jpeg',
    alt: '8 bed dormitory',
    bedCount: 8,
    bathCount: 1,
    galleryImages: [
      '/img/8 Bed Dorm/IMG_3755.jpeg',
      '/img/8 Bed Dorm/IMG_3756.jpeg',
      '/img/8 Bed Dorm/IMG_3757.jpeg',
      '/img/8 Bed Dorm/IMG_3759.jpeg',
      '/img/8 Bed Dorm/IMG_4638.JPG'
    ],
    delay: '0.6s'
  },
  {
    id: '3-bed-dorm',
    title: '3 Bed Dorm',
    image: '/img/3 Bed Dorm/IMG_3612.jpg',
    alt: '3 bed dormitory',
    bedCount: 3,
    bathCount: 1,
    galleryImages: [
      '/img/3 Bed Dorm/IMG_3611.jpeg',
      '/img/3 Bed Dorm/IMG_3612.jpg',
      '/img/3 Bed Dorm/IMG_3614.jpg'
    ],
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
                galleryImages={room.galleryImages}
                delay={room.delay}
                phone={phone}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Room End */}
    </>
  );
}
