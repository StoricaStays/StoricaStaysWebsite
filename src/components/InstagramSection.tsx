"use client";

import { useState } from "react";
import { trackInstagramReelPlay } from "../utils/gtm";
import SectionHeading from "./SectionHeading";

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
    id: "1",
    image: "/img/reels/reel 1.png",
    alt: "Heritage vibes at Storica Stays",
    likes: "1,140",
    views: "65.5K",
    caption: "Heritage vibes at Storica Stays! #JodhpurHeritage",
    delay: "0.1s",
    reelUrl: "https://www.instagram.com/reel/DEO3wOSTOqd/?igsh=c2pubDJydzc4MWd0",
    embedUrl: "https://www.instagram.com/reel/DEO3wOSTOqd/embed",
  },
  {
    id: "2",
    image: "/img/reels/reel 2.png",
    alt: "Rooftop views at Storica Stays",
    likes: "4,837",
    views: "468K",
    caption: "Experience the premium stay at Storica Stays.",
    delay: "0.3s",
    reelUrl: "https://www.instagram.com/reel/DJt2kxsBfZi/?igsh=NjVybHlzN3B4emhy",
    embedUrl: "https://www.instagram.com/reel/DJt2kxsBfZi/embed",
  },
  {
    id: "3",
    image: "/img/reels/reel 3.png",
    alt: "Traditional architecture at Storica Stays",
    likes: "888",
    views: "114K",
    caption: "Magical lighting at Mehrangath fort #HeritageStay",
    delay: "0.5s",
    reelUrl: "https://www.instagram.com/reel/DJRgUTGhxz6/?igsh=MWlyMTI2aWxmZGt6Yw==",
    embedUrl: "https://www.instagram.com/reel/DJRgUTGhxz6/embed",
  },
];

const ReelCard = ({ reel, index }: { reel: InstagramReel; index: number }) => {
  const [showModal, setShowModal] = useState(false);

  const handleReelClick = () => {
    setShowModal(true);
    trackInstagramReelPlay(reel.id, reel.caption);
  };

  const closeModal = () => setShowModal(false);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      handleReelClick();
    }
  };

  const handleModalKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Escape") {
      closeModal();
    }
  };

  return (
    <>
      <div className="col-lg-4 col-md-6 mb-4">
        <article className="reel-card ss-reveal is-visible" style={{ transitionDelay: `${index * 90}ms` }}>
          <button
            type="button"
            className="reel-media"
            onClick={handleReelClick}
            onKeyDown={handleKeyDown}
            aria-label={`Play Instagram reel: ${reel.caption}`}
          >
            <img src={reel.image} alt={reel.alt} loading="lazy" />
            <span className="reel-play">
              <i className="fas fa-play" />
            </span>
            <span
              className="position-absolute top-0 end-0 m-3"
              style={{ color: "#fff", fontSize: "1.2rem", zIndex: 3 }}
            >
              <i className="fab fa-instagram" />
            </span>
            <span className="reel-stats">
              <span>
                <i className="fas fa-heart" />
                {reel.likes}
              </span>
              <span>
                <i className="fas fa-eye" />
                {reel.views}
              </span>
            </span>
          </button>
          <p className="reel-caption mb-0">{reel.caption}</p>
        </article>
      </div>

      {showModal && (
        <div
          className="modal fade show d-block"
          style={{ backgroundColor: "rgba(12,27,58,0.85)", zIndex: 1055 }}
          role="dialog"
          aria-labelledby="reel-modal-title"
          aria-hidden="false"
          onKeyDown={handleModalKeyDown}
          tabIndex={-1}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
            <div className="modal-content bg-dark border-0" style={{ borderRadius: "var(--radius-lg)" }}>
              <div className="modal-header border-0 pb-2">
                <h5 id="reel-modal-title" className="text-white">
                  <i className="fab fa-instagram me-2" />
                  Instagram Reel
                </h5>
                <button
                  type="button"
                  className="btn-close btn-close-white"
                  onClick={closeModal}
                  aria-label="Close"
                />
              </div>
              <div className="modal-body p-0">
                <div className="d-flex justify-content-center">
                  <div style={{ width: "100%", maxWidth: "400px", aspectRatio: "9/16" }}>
                    <iframe
                      src={reel.embedUrl}
                      title="Instagram Reel"
                      width="100%"
                      height="100%"
                      frameBorder="0"
                      scrolling="no"
                      style={{ border: "none", borderRadius: "8px", minHeight: "600px" }}
                      allow="encrypted-media"
                    />
                  </div>
                </div>
              </div>
              <div className="modal-footer border-0 pt-2">
                <div className="w-100 text-center">
                  <a
                    href={reel.reelUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ss-btn ss-btn-ghost-light ss-btn-sm"
                  >
                    <i className="fab fa-instagram me-1" />
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
    <section className="ss-section ss-section--tint" id="InstagramReels">
      <div className="container">
        <SectionHeading
          center
          eyebrow="Follow the Journey"
          title={
            <>
              <em>Reels</em> from the Road
            </>
          }
          sub="A glimpse of the authentic heritage experience — straight from our Instagram."
        />
        <div className="row g-4">
          {instagramReels.map((reel, index) => (
            <ReelCard key={reel.id} reel={reel} index={index} />
          ))}
        </div>
        <div className="text-center mt-4">
          <a
            href="https://www.instagram.com/storicastays"
            className="ss-btn ss-btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram me-2" /> Follow @storicastays
          </a>
        </div>
      </div>
    </section>
  );
}
