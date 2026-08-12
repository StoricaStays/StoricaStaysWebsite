'use client';

import { useState } from 'react';
import { Play, Heart, Eye, X } from 'lucide-react';
import { trackInstagramReelPlay } from '../utils/gtm';
import Container from './ui/Container';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';

interface InstagramReel {
  id: string;
  image: string;
  alt: string;
  likes: string;
  views: string;
  caption: string;
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
    caption: 'Heritage vibes at Storica Stays! 🏛️ #JodhpurHeritage',
    reelUrl: 'https://www.instagram.com/reel/DEO3wOSTOqd/?igsh=c2pubDJydzc4MWd0',
    embedUrl: 'https://www.instagram.com/reel/DEO3wOSTOqd/embed'
  },
  {
    id: '2',
    image: '/img/reels/reel 2.png',
    alt: 'Rooftop views at Storica Stays',
    likes: '4,837',
    views: '468K',
    caption: 'Experience the premium stay at Storica Stays.',
    reelUrl: 'https://www.instagram.com/reel/DJt2kxsBfZi/?igsh=NjVybHlzN3B4emhy',
    embedUrl: 'https://www.instagram.com/reel/DJt2kxsBfZi/embed'
  },
  {
    id: '3',
    image: '/img/reels/reel 3.png',
    alt: 'Traditional architecture at Storica Stays',
    likes: '888',
    views: '114K',
    caption: 'Magical lighting at Mehrangath fort 🏠 #HeritageStay',
    reelUrl: 'https://www.instagram.com/reel/DJRgUTGhxz6/?igsh=MWlyMTI2aWxmZGt6Yw==',
    embedUrl: 'https://www.instagram.com/reel/DJRgUTGhxz6/embed'
  }
];

interface ReelCardProps {
  reel: InstagramReel;
}

const ReelCard = ({ reel }: ReelCardProps) => {
  const [showModal, setShowModal] = useState(false);

  const handleReelClick = () => {
    setShowModal(true);
    trackInstagramReelPlay(reel.id, reel.caption);
  };

  const closeModal = () => setShowModal(false);

  const handleModalKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') closeModal();
  };

  return (
    <>
      <button
        type="button"
        onClick={handleReelClick}
        aria-label={`Play Instagram reel: ${reel.caption}`}
        className="group relative block w-full overflow-hidden rounded-2xl bg-ink-900 text-left"
      >
        <img
          src={reel.image}
          alt={reel.alt}
          className="h-[420px] w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/90 via-ink-900/10 to-transparent" />

        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-primary-600">
            <Play size={22} fill="currentColor" className="ml-1" />
          </span>
        </div>

        <div className="absolute top-4 right-4">
          <i className="fab fa-instagram text-white text-xl" aria-hidden="true" />
        </div>

        <div className="absolute bottom-0 inset-x-0 p-4">
          <div className="flex items-center gap-4 text-white text-sm">
            <span className="flex items-center gap-1"><Heart size={14} /> {reel.likes}</span>
            <span className="flex items-center gap-1"><Eye size={14} /> {reel.views}</span>
          </div>
          <p className="mt-1 text-xs text-sand-200 line-clamp-2">{reel.caption}</p>
        </div>
      </button>

      {showModal && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ink-900/85 p-4"
          role="dialog"
          aria-labelledby="reel-modal-title"
          onKeyDown={handleModalKeyDown}
          tabIndex={-1}
        >
          <div className="w-full max-w-sm rounded-2xl bg-ink-900 p-4">
            <div className="flex items-center justify-between pb-3">
              <h5 id="reel-modal-title" className="flex items-center gap-2 font-sans text-sm font-semibold text-white">
                <i className="fab fa-instagram" aria-hidden="true" />
                Instagram Reel
              </h5>
              <button type="button" onClick={closeModal} aria-label="Close" className="text-white">
                <X size={20} />
              </button>
            </div>
            <div style={{ aspectRatio: '9/16' }} className="w-full overflow-hidden rounded-xl">
              <iframe
                src={reel.embedUrl}
                title="Instagram Reel"
                width="100%"
                height="100%"
                scrolling="no"
                style={{ border: 'none' }}
                allow="encrypted-media"
              ></iframe>
            </div>
            <div className="pt-3 text-center">
              <a
                href={reel.reelUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs text-sand-300 hover:text-white"
              >
                <i className="fab fa-instagram mr-1" aria-hidden="true" />
                View on Instagram
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
    <div className="py-20 sm:py-28" id="InstagramReels">
      <Container>
        <SectionHeading
          eyebrow="Follow Our Journey"
          title={<><span className="text-primary-600">Instagram</span> Reels</>}
        />
        <p className="mt-4 mx-auto max-w-xl text-center font-sans text-sand-600">
          Get a glimpse of the authentic heritage experience at Storica Stays through our Instagram content.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {instagramReels.map((reel) => (
            <ReelCard key={reel.id} reel={reel} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button href="https://www.instagram.com/storicastays" target="_blank" size="lg">
            <i className="fab fa-instagram" aria-hidden="true" />
            Follow @storicastays
          </Button>
        </div>
      </Container>
    </div>
  );
}
