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
    bedCount: 2,
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
    id: 'heritage2',
    title: 'Superior Heritage 2',
    image: '/img/heritage_room_2/thumbnail.jpeg',
    alt: 'Heritage room interior',
    bedCount: 2,
    bathCount: 1,
    galleryImages: [
      '/img/heritage_room_2/Heritage room (1).jpeg',
      '/img/heritage_room_2/Heritage room (2).jpeg',
      '/img/heritage_room_2/Heritage room (3).jpeg',
      '/img/heritage_room_2/Heritage room (4).jpeg',
      '/img/heritage_room_2/Heritage room (5).jpeg',
      '/img/heritage_room_2/Heritage room (6).jpeg',
      '/img/heritage_room_2/IMG_3589.jpeg',
    ],
    delay: '0.1s'
  },
  {
    id: 'dlx-double',
    title: 'Deluxe Double Room',
    image: '/img/DLX Double Bed/IMG_4115.JPG',
    alt: 'Deluxe double room',
    bedCount: 2,
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
