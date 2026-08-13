import RoomCard from "./RoomCard";
import SectionHeading from "./SectionHeading";
import { Room, jodhpurRooms } from "../data/rooms";

interface RoomsSectionProps {
  rooms?: Room[];
  title?: string;
  subtitle?: string;
  sub?: string;
  sectionId?: string;
  showPhone?: boolean;
  phone?: string;
  containerClass?: string;
  roomsLink?: string;
  badge?: string;
}

export default function RoomsSection({
  rooms = jodhpurRooms,
  title = "Our Rooms",
  subtitle = "Explore Our Rooms",
  sub = "A folio of heritage spaces — from cosy dorms to lake-view suites, every room keeps the story of the haveli alive.",
  sectionId = "Rooms",
  showPhone = true,
  phone = "+91 6378365775",
  containerClass = "ss-section",
  roomsLink = "",
  badge,
}: RoomsSectionProps = {}) {
  return (
    <section className={containerClass} id={sectionId}>
      <div className="container">
        <SectionHeading
          center
          eyebrow={title}
          title={
            <>
              {subtitle.split(" ").slice(0, -1).join(" ")}{" "}
              <em>{subtitle.split(" ").slice(-1)[0]}</em>
            </>
          }
          sub={sub}
        />
        <div className="row g-4 ss-room-grid">
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
              badge={badge}
            />
          ))}
        </div>
        {roomsLink ? (
          <div className="text-center mt-5">
            <a href={roomsLink} className="ss-btn ss-btn-ghost">
              View all rooms <i className="fa fa-arrow-right" />
            </a>
          </div>
        ) : null}
      </div>
    </section>
  );
}
