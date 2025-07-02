'use client';

import { useState } from 'react';

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
    caption: 'Heritage vibes at Storica Stays! 🏛️ #JodhpurHeritage',
    delay: '0.1s',
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
    delay: '0.3s',
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
    delay: '0.5s',
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
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleReelClick();
    }
  };

  const handleModalKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={reel.delay}>
        <div className="instagram-reel-card position-relative overflow-hidden rounded shadow">
          <button
            type="button"
            className="position-relative border-0 p-0 w-100 bg-transparent"
            onClick={handleReelClick}
            onKeyDown={handleKeyDown}
            style={{ cursor: 'pointer' }}
            aria-label={`Play Instagram reel: ${reel.caption}`}
          >
            <img
              className="img-fluid w-100"
              src={reel.image}
              alt={reel.alt}
              style={{ height: '400px', objectFit: 'cover' }}
            />
            
            {/* Play Button Overlay */}
            <div className="position-absolute top-50 start-50 translate-middle">
              <div 
                className="bg-primary rounded-circle d-flex align-items-center justify-content-center"
                style={{ width: '60px', height: '60px', opacity: '0.9' }}
              >
                <i className="fas fa-play text-white" style={{ fontSize: '24px', marginLeft: '4px' }}></i>
              </div>
            </div>
            
            {/* Instagram Icon */}
            <div className="position-absolute top-0 end-0 m-3">
              <i className="fab fa-instagram text-white" style={{ fontSize: '24px' }}></i>
            </div>
            
            {/* Stats Overlay */}
            <div className="position-absolute bottom-0 start-0 w-100 p-3" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.7))' }}>
              <div className="d-flex justify-content-between text-white">
                <span>
                  <i className="fas fa-heart me-1"></i>{' '}
                  {reel.likes}
                </span>
                <span>
                  <i className="fas fa-eye me-1"></i>{' '}
                  {reel.views}
                </span>
              </div>
            </div>
          </button>
          
          <div className="p-3">
            <p className="mb-2 text-muted small">{reel.caption}</p>
          </div>
        </div>
      </div>

      {/* Embedded Reel Modal */}
      {showModal && (
        <div 
          className="modal fade show d-block" 
          style={{ backgroundColor: 'rgba(0,0,0,0.8)', zIndex: 1055 }}
          role="dialog"
          aria-labelledby="reel-modal-title"
          aria-hidden="false"
          onKeyDown={handleModalKeyDown}
          tabIndex={-1}
        >
          <div 
            className="modal-dialog modal-dialog-centered modal-lg" 
            role="document"
          >
            <div className="modal-content bg-dark border-0">
              <div className="modal-header border-0 pb-2">
                <h5 id="reel-modal-title" className="text-white">
                  <i className="fab fa-instagram me-2"></i>
                  Instagram Reel
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-0">
                <div className="d-flex justify-content-center">
                  <div style={{ width: '100%', maxWidth: '400px', aspectRatio: '9/16' }}>
                    <iframe
                      src={reel.embedUrl}
                      title="Instagram Reel"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      style={{ 
                        border: 'none', 
                        borderRadius: '8px',
                        minHeight: '600px'
                      }}
                      allow="encrypted-media"
                    ></iframe>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 pt-2">
                <div className="w-100 text-center">
                  <a 
                    href={reel.reelUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-outline-light btn-sm"
                  >
                    <i className="fab fa-instagram me-1"></i>
                    View on Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default function InstagramSection() {
  return (
    <>
      {/* Instagram Reels Start */}
      <div className="container-xxl py-5" id="InstagramReels">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <h6 className="section-title text-center text-primary text-uppercase">
              Follow Our Journey
            </h6>
            <h1 className="mb-5">
              <span className="text-primary text-uppercase">Instagram</span> Reels
            </h1>
            <p className="mb-5">
              Get a glimpse of the authentic heritage experience at Storica Stays through our Instagram content
            </p>
          </div>
          
          <div className="row g-4 mb-5">
            {instagramReels.map((reel) => (
              <ReelCard key={reel.id} reel={reel} />
            ))}
          </div>
          
          {/* Follow Button */}
          <div className="text-center">
            <a 
              href="https://www.instagram.com/storicastays" 
              className="btn btn-primary py-3 px-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-instagram me-2"></i>{' '}
              Follow @storicastays
            </a>
          </div>
        </div>
      </div>
      {/* Instagram Reels End */}
    </>
  );
}
