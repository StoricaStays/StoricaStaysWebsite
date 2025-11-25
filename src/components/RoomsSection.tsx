import RoomCard from './RoomCard';
import { Room, jodhpurRooms } from '../data/rooms';

interface RoomsSectionProps {
  // Optional props for customization
  rooms?: Room[];
  title?: string;
  subtitle?: string;
  sectionId?: string;
  showPhone?: boolean;
  phone?: string;
  containerClass?: string;
  wow?: boolean;
  wowDelay?: string;
}

export default function RoomsSection({
  rooms = jodhpurRooms,
  title = "Our Rooms",
  subtitle = "Explore Our Rooms",
  sectionId = "Rooms",
  showPhone = true,
  phone = "+91 6378365775",
  containerClass = "container-xxl py-5",
  wow = true,
  wowDelay = "0.1s"
}: RoomsSectionProps = {}) {
  return (
    <>
      {/* Room Start */}
      <div className={containerClass} id={sectionId}>
        <div className="container">
          <div className={`text-center ${wow ? 'wow fadeInUp' : ''}`} data-wow-delay={wowDelay}>
            <h6 className="section-title text-center text-primary text-uppercase">
              {title}
            </h6>
            <h1 className="mb-5">
              {subtitle.split(' ').slice(0, -1).join(' ')}{' '}
              <span className="text-primary text-uppercase">
                {subtitle.split(' ').slice(-1)[0]}
              </span>
            </h1>
          </div>
          <div className="row g-4">
            {rooms.map((room: Room) => (
              <RoomCard
                key={room.id}
                title={room.title}
                image={room.image}
                alt={room.alt}
                bedCount={room.bedCount}
                bathCount={room.bathCount}
                galleryImages={room.galleryImages}
                delay={room.delay}
                phone={showPhone ? phone : undefined}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Room End */}
    </>
  );
}
