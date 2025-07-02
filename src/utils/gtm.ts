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

/**
 * Track phone number clicks
 * @param phoneNumber - The phone number being called
 * @param location - Where the click occurred (header, footer, floating, etc.)
 */
export const trackPhoneClick = (
  phoneNumber: string,
  location: string
): void => {
  trackGTMEvent({
    event: "phone_click",
    event_category: "contact",
    event_label: location,
    phone_number: phoneNumber,
    click_location: location,
    value: 1,
  });
};

/**
 * Track WhatsApp clicks
 * @param phoneNumber - The WhatsApp number
 * @param location - Where the click occurred (header, footer, floating, etc.)
 */
export const trackWhatsAppClick = (
  phoneNumber: string,
  location: string
): void => {
  trackGTMEvent({
    event: "whatsapp_click",
    event_category: "contact",
    event_label: location,
    phone_number: phoneNumber,
    click_location: location,
    value: 1,
  });
};

/**
 * Track email clicks
 * @param email - The email address
 * @param location - Where the click occurred (header, footer, etc.)
 */
export const trackEmailClick = (email: string, location: string): void => {
  trackGTMEvent({
    event: "email_click",
    event_category: "contact",
    event_label: location,
    email_address: email,
    click_location: location,
    value: 1,
  });
};

/**
 * Track social media clicks
 * @param platform - The social platform (instagram, facebook, etc.)
 * @param location - Where the click occurred (header, footer, etc.)
 */
export const trackSocialClick = (platform: string, location: string): void => {
  trackGTMEvent({
    event: "social_click",
    event_category: "social_engagement",
    event_label: platform,
    social_platform: platform,
    click_location: location,
    value: 1,
  });
};
