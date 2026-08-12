import SectionHeading from './SectionHeading';

interface Attraction {
  image: string;
  name: string;
  description: string;
  tag: string;
}

interface AttractionsStripProps {
  city?: string;
  attractions?: Attraction[];
}

const jodhpurAttractions: Attraction[] = [
  {
    image: '/img/General/CKC03904-HDR.jpg',
    name: 'Mehrangarh Fort',
    description: 'One of India’s grandest forts, towering over the Blue City.',
    tag: 'Fort',
  },
  {
    image: '/img/General/CKC03915-HDR.jpg',
    name: 'Sardar Market',
    description: 'Walk the clock-tower bazaars for spices and handicrafts.',
    tag: 'Bazaar',
  },
  {
    image: '/img/General/CKC03933-HDR.jpg',
    name: 'Jaswant Thada',
    description: 'A serene marble cenotaph with peaceful garden views.',
    tag: 'Memorial',
  },
];

const udaipurAttractions: Attraction[] = [
  {
    image: '/img/udaipur/property/property (1).jpg',
    name: 'Lake Pichola',
    description: 'Sunset boat rides across the lake of Udaipur’s palaces.',
    tag: 'Lake',
  },
  {
    image: '/img/udaipur/property/property (6).jpg',
    name: 'City Palace',
    description: 'A majestic palace complex overlooking the old city.',
    tag: 'Palace',
  },
  {
    image: '/img/udaipur/property/rooftop.jpeg',
    name: 'Jagdish Temple',
    description: 'A 17th-century temple in the heart of the old town.',
    tag: 'Temple',
  },
];

export default function AttractionsStrip({
  city = 'Jodhpur',
  attractions,
}: AttractionsStripProps) {
  const data = attractions || (city === 'Udaipur' ? udaipurAttractions : jodhpurAttractions);
  return (
    <section className="section">
      <div className="container">
        <SectionHeading
          eyebrow={`Around ${city}`}
          title="Discover What’s Nearby"
          lead="Walk out our door and into the story of the city."
          align="center"
        />
        <div className="row g-4">
          {data.map((attr, index) => (
            <div
              key={attr.name}
              className="col-lg-4 col-md-6"
              data-reveal
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="attraction-card">
                <img src={attr.image} alt={attr.name} loading="lazy" />
                <div className="shade"></div>
                <div className="attraction-body">
                  <span className="tag">{attr.tag}</span>
                  <h5>{attr.name}</h5>
                  <p>{attr.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}