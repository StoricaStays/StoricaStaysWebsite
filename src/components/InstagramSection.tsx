'use client';

import { useState } from 'react';
import { trackInstagramReelPlay, trackSocialClick } from '../utils/gtm';
import SectionHeading from './SectionHeading';

interface InstagramReel {
  id: string;
  image: string;
  alt: string;
  likes: string;
  views: string;
  caption: string;
  delay: string;
  reelUrl: string;
  embedUrl: string;
}

const instagramReels: InstagramReel[] = [
  {
    id: '1',
    image: '/img/reels/reel 1.png',
    alt: 'Heritage vibes at Storica Stays',
    likes: '1,140',
    views: '65.5K',
    caption: 'Heritage vibes at Storica Stays! #JodhpurHeritage',
    delay: '0.1s',
    reelUrl: 'https://www.instagram.com/reel/DEO3wOSTOqd/?igsh=c2pubDJydzc4MWd0',
    embedUrl: 'https://www.instagram.com/reel/DEO3wOSTOqd/embed',
  },
  {
    id: '2',
    image: '/img/reels/reel 2.png',
    alt: 'Rooftop views at Storica Stays',
    likes: '4,837',
    views: '468K',
    caption: 'Experience the premium stay at Storica Stays. Rooftop dinners with a view.',
    delay: '0.2s',
    reelUrl: 'https://www.instagram.com/reel/DJt2kxsBfZi/?igsh=NjVybHlzN3B4emhy',
    embedUrl: 'https://www.instagram.com/reel/DJt2kxsBfZi/embed',
  },
  {
    id: '3',
    image: '/img/reels/reel 3.png',
    alt: 'Traditional architecture at Storica Stays',
    likes: '888',
    views: '114K',
    caption: 'Magical lighting at Mehrangarh fort. Heritage stays, redefined.',
    delay: '0.3s',
    reelUrl: 'https://www.instagram.com/reel/DJRgUTGhxz6/?igsh=MWlyMTI2aWxmZGt6Yw==',
    embedUrl: 'https://www.instagram.com/reel/DJRgUTGhxz6/embed',
  },
];

interface ReelCardProps {
  reel: InstagramReel;
}

const ReelCard = ({ reel }: ReelCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => {
    setShowModal(true);
    trackInstagramReelPlay(reel.id, reel.caption);
  };

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="col-lg-4 col-md-6" data-reveal style={{ transitionDelay: reel.delay }}>
        <button
          type="button"
          className="border-0 p-0 w-100 bg-transparent instagram-card"
          onClick={handleOpen}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              handleOpen();
            }
          }}
          aria-label={`Play Instagram reel: ${reel.caption}`}
        >
          <img src={reel.image} alt={reel.alt} loading="lazy" />
          <span className="play">
            <i className="fas fa-play" style={{ marginLeft: '4px' }}></i>
          </span>
          <span className="overlay">
            <span>
              <i className="fas fa-heart me-1"></i> {reel.likes}
            </span>
            <span>
              <i className="fas fa-eye me-1"></i> {reel.views}
            </span>
          </span>
        </button>
      </div>

      {showModal && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
          style={{ background: 'rgba(20,14,8,0.9)', zIndex: 1100, backdropFilter: 'blur(4px)' }}
          role="dialog"
          aria-modal="true"
          aria-label="Instagram reel"
          onClick={closeModal}
          onKeyDown={(e) => {
            if (e.key === 'Escape') closeModal();
          }}
          tabIndex={-1}
        >
          <div className="position-relative" onClick={(e) => e.stopPropagation()}>
            <div className="position-absolute top-0 end-0 m-3" style={{ zIndex: 5 }}>
              <button
                type="button"
                className="btn btn-brass p-2"
                aria-label="Close"
                onClick={closeModal}
              >
                <i className="fa fa-times"></i>
              </button>
            </div>
            <div style={{ width: 'min(420px, 92vw)', aspectRatio: '9/16' }}>
              <iframe
                src={reel.embedUrl}
                title="Instagram Reel"
                width="100%"
                height="100%"
                frameBorder="0"
                scrolling="no"
                allow="encrypted-media"
                style={{ border: 'none', borderRadius: '12px' }}
              ></iframe>
            </div>
            <div className="text-center mt-3">
              <a
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost-light"
              >
                <i className="fab fa-instagram me-2"></i> View on Instagram
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function InstagramSection() {
  return (
    <section className="section section-dark" id="instagram">
      <div className="container">
        <SectionHeading
          eyebrow="Follow Our Journey"
          title="Moments from Instagram"
          lead="Glimpses of heritage stays, rooftop sunsets and everything in between."
          align="center"
        />
        <div className="row g-4">
          {instagramReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>
        <div className="text-center mt-5" data-reveal>
          <a
            href="https://www.instagram.com/storicastays"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-brass"
            onClick={() => trackSocialClick('instagram', 'instagram_section')}
          >
            <i className="fab fa-instagram me-2"></i> Follow @storicastays
          </a>
        </div>
      </div>
    </section>
  );
}