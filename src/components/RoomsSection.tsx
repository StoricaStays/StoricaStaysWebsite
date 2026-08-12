import RoomCard from './RoomCard';
import SectionHeading from './SectionHeading';
import { Room, jodhpurRooms } from '../data/rooms';

interface RoomsSectionProps {
  rooms?: Room[];
  title?: string;
  subtitle?: string;
  lead?: string;
  sectionId?: string;
  showPhone?: boolean;
  phone?: string;
  sectionClass?: string;
  roomsLink?: string;
}

export default function RoomsSection({
  rooms = jodhpurRooms,
  title = "Jodhpur Rooms",
  subtitle = "Explore Our Rooms",
  lead,
  sectionId = "rooms",
  showPhone = true,
  phone = "+91 6378365775",
  sectionClass = "",
  roomsLink = "",
}: RoomsSectionProps) {
  return (
    <>
      <section className={`section ${sectionClass}`} id={sectionId}>
        <div className="container">
          <SectionHeading eyebrow={title} title={subtitle} lead={lead} align="center" />
          <div className="row g-4 mt-1">
            {rooms.map((room: Room) => (
              <RoomCard
                key={room.id + room.title}
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
      </section>
      {roomsLink && (
        <div className="text-center pb-5">
          <a href={roomsLink} className="btn-link-flat">
            View All {title} <i className="fa fa-arrow-right ms-2"></i>
          </a>
        </div>
      )}
    </>
  );
}