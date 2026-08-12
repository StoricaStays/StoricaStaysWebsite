import RoomCard from './RoomCard';
import { Room, jodhpurRooms } from '../data/rooms';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

interface RoomsSectionProps {
  rooms?: Room[];
  title?: string;
  subtitle?: string;
  sectionId?: string;
  showPhone?: boolean;
  phone?: string;
  roomsLink?: string;
}

export default function RoomsSection({
  rooms = jodhpurRooms,
  title = "Our Rooms",
  subtitle = "Explore Our Rooms",
  sectionId = "Rooms",
  showPhone = true,
  phone = "+91 6378365775",
  roomsLink = ""
}: RoomsSectionProps = {}) {
  const subtitleWords = subtitle.split(' ');
  const subtitleLead = subtitleWords.slice(0, -1).join(' ');
  const subtitleLast = subtitleWords.slice(-1)[0];

  return (
    <div className="py-20 sm:py-28 bg-sand-50" id={sectionId}>
      <Container>
        <SectionHeading
          eyebrow={title}
          title={<>{subtitleLead}{subtitleLead ? ' ' : ''}<span className="text-primary-600">{subtitleLast}</span></>}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rooms.map((room: Room) => (
            <RoomCard
              key={room.id}
              title={room.title}
              image={room.image}
              alt={room.alt}
              bedCount={room.bedCount}
              bathCount={room.bathCount}
              galleryImages={room.galleryImages}
              phone={showPhone ? phone : undefined}
            />
          ))}
        </div>

        {roomsLink && (
          <div className="text-center mt-10">
            <Button href={roomsLink} size="lg">Show More Rooms</Button>
          </div>
        )}
      </Container>
    </div>
  );
}
