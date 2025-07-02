// Google Tag Manager utility functions

// Extend Window interface for GTM tracking
declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: Record<string, unknown>[];
  }
}

export interface GTMEvent {
  event: string;
  event_category?: string;
  event_label?: string;
  room_type?: string;
  phone_number?: string;
  value?: number;
  [key: string]: unknown;
}

/**
 * Track an event with Google Tag Manager
 * @param eventData - Event data to send to GTM
 */
export const trackGTMEvent = (eventData: GTMEvent): void => {
  if (typeof window === "undefined") return;

  // Push to dataLayer for GTM
  if (window.dataLayer) {
    window.dataLayer.push(eventData);
  }

  // Also send via gtag if available
  if (window.gtag && eventData.event) {
    const { event, ...parameters } = eventData;
    window.gtag("event", event, parameters);
  }
};

/**
 * Track call button clicks
 * @param roomType - The type/name of the room
 * @param phoneNumber - The phone number being called
 */
export const trackCallNowClick = (
  roomType: string,
  phoneNumber: string
): void => {
  trackGTMEvent({
    event: "call_now_click",
    event_category: "engagement",
    event_label: roomType,
    room_type: roomType,
    phone_number: phoneNumber,
    value: 1,
  });
};

/**
 * Track gallery opens
 * @param galleryType - Type of gallery (room, property, etc.)
 * @param roomType - The type/name of the room (if applicable)
 */
export const trackGalleryOpen = (
  galleryType: string,
  roomType?: string
): void => {
  trackGTMEvent({
    event: "gallery_open",
    event_category: "engagement",
    event_label: galleryType,
    gallery_type: galleryType,
    room_type: roomType,
    value: 1,
  });
};

/**
 * Track Instagram reel plays
 * @param reelId - The ID of the reel
 * @param reelCaption - Caption/description of the reel
 */
export const trackInstagramReelPlay = (
  reelId: string,
  reelCaption: string
): void => {
  trackGTMEvent({
    event: "instagram_reel_play",
    event_category: "social_engagement",
    event_label: reelCaption,
    reel_id: reelId,
    value: 1,
  });
};
