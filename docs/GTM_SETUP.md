# Google Tag Manager Setup for Storica Stays Website

This document explains how to set up Google Tag Manager triggers for tracking user interactions on the Storica Stays website.

## Events Being Tracked

### 1. Call Now Button Clicks

- **Event Name**: `call_now_click`
- **Event Category**: `engagement`
- **Additional Data**:
  - `room_type`: The name of the room (e.g., "Heritage Room", "3 Bed Dorm")
  - `phone_number`: The phone number being called
  - `event_label`: Same as room_type
  - `value`: 1

### 2. Gallery Opens

- **Event Name**: `gallery_open`
- **Event Category**: `engagement`
- **Additional Data**:
  - `gallery_type`: Type of gallery (e.g., "room_gallery", "property_gallery")
  - `room_type`: The name of the room (if applicable)
  - `event_label`: Same as gallery_type
  - `value`: 1

### 3. Instagram Reel Plays

- **Event Name**: `instagram_reel_play`
- **Event Category**: `social_engagement`
- **Additional Data**:
  - `reel_id`: The ID of the reel
  - `event_label`: The reel caption/description
  - `value`: 1

### 4. Phone Number Clicks (Layout)

- **Event Name**: `phone_click`
- **Event Category**: `contact`
- **Additional Data**:
  - `phone_number`: The phone number being called
  - `click_location`: Where the click occurred (header, footer, floating)
  - `event_label`: Same as click_location
  - `value`: 1

### 5. WhatsApp Clicks

- **Event Name**: `whatsapp_click`
- **Event Category**: `contact`
- **Additional Data**:
  - `phone_number`: The WhatsApp number
  - `click_location`: Where the click occurred (header, footer, floating)
  - `event_label`: Same as click_location
  - `value`: 1

### 6. Email Clicks

- **Event Name**: `email_click`
- **Event Category**: `contact`
- **Additional Data**:
  - `email_address`: The email address
  - `click_location`: Where the click occurred (header, footer)
  - `event_label`: Same as click_location
  - `value`: 1

### 7. Social Media Clicks

- **Event Name**: `social_click`
- **Event Category**: `social_engagement`
- **Additional Data**:
  - `social_platform`: The platform (instagram, facebook, etc.)
  - `click_location`: Where the click occurred (header, footer)
  - `event_label`: Same as social_platform
  - `value`: 1

## GTM Configuration Steps

### Step 1: Create Variables

1. Go to Variables in GTM
2. Create new User-Defined Variables:
   - `DLV - Room Type` (Data Layer Variable: `room_type`)
   - `DLV - Phone Number` (Data Layer Variable: `phone_number`)
   - `DLV - Gallery Type` (Data Layer Variable: `gallery_type`)
   - `DLV - Reel ID` (Data Layer Variable: `reel_id`)

### Step 2: Create Triggers

1. **Call Now Trigger**:

   - Trigger Type: Custom Event
   - Event Name: `call_now_click`

2. **Gallery Open Trigger**:

   - Trigger Type: Custom Event
   - Event Name: `gallery_open`

3. **Instagram Reel Play Trigger**:

   - Trigger Type: Custom Event
   - Event Name: `instagram_reel_play`

4. **Phone Click Trigger**:

   - Trigger Type: Custom Event
   - Event Name: `phone_click`

5. **WhatsApp Click Trigger**:

   - Trigger Type: Custom Event
   - Event Name: `whatsapp_click`

6. **Email Click Trigger**:

   - Trigger Type: Custom Event
   - Event Name: `email_click`

7. **Social Click Trigger**:
   - Trigger Type: Custom Event
   - Event Name: `social_click`

### Step 3: Create Tags

1. **Google Analytics 4 Event Tags** (if using GA4):

   - Tag Type: Google Analytics: GA4 Event
   - Event Name: Use the respective event names
   - Event Parameters: Map the custom variables to GA4 parameters

2. **Facebook Pixel Events** (if using Facebook Pixel):
   - Tag Type: Custom HTML or Facebook Pixel
   - Event: Custom events for lead generation tracking

### Step 4: Test the Implementation

1. Use GTM Preview mode
2. Click on "Call Now" buttons and verify events fire
3. Open galleries and verify events fire
4. Play Instagram reels and verify events fire
5. Click on phone numbers, WhatsApp links, email links, and social media links to verify events fire

## Conversion Tracking

These events can be used for:

- **Call Now clicks**: Lead generation tracking
- **Gallery opens**: Engagement measurement
- **Instagram reel plays**: Social media engagement
- **Phone number clicks**: Contact method effectiveness
- **WhatsApp clicks**: WhatsApp engagement
- **Email clicks**: Email engagement
- **Social media clicks**: Social media engagement

## Data Structure Example

```javascript
// Call Now Event
{
  event: 'call_now_click',
  event_category: 'engagement',
  event_label: 'Heritage Room',
  room_type: 'Heritage Room',
  phone_number: '+91-XXXXXXXXXX',
  value: 1
}

// Gallery Open Event
{
  event: 'gallery_open',
  event_category: 'engagement',
  event_label: 'room_gallery',
  gallery_type: 'room_gallery',
  room_type: 'Heritage Room',
  value: 1
}

// Instagram Reel Play Event
{
  event: 'instagram_reel_play',
  event_category: 'social_engagement',
  event_label: 'Heritage vibes at Storica Stays! 🏛️ #JodhpurHeritage',
  reel_id: '1',
  value: 1
}

// Phone Click Event
{
  event: 'phone_click',
  event_category: 'contact',
  event_label: 'header',
  phone_number: '+91-XXXXXXXXXX',
  click_location: 'header',
  value: 1
}

// WhatsApp Click Event
{
  event: 'whatsapp_click',
  event_category: 'contact',
  event_label: 'footer',
  phone_number: '+91-XXXXXXXXXX',
  click_location: 'footer',
  value: 1
}

// Email Click Event
{
  event: 'email_click',
  event_category: 'contact',
  event_label: 'footer',
  email_address: 'info@storicastays.com',
  click_location: 'footer',
  value: 1
}

// Social Click Event
{
  event: 'social_click',
  event_category: 'social_engagement',
  event_label: 'instagram',
  social_platform: 'instagram',
  click_location: 'header',
  value: 1
}
```

## Notes

- All events include proper error handling and only fire when the respective window objects are available
- Data attributes are also added to HTML elements for additional CSS selector-based tracking if needed
- The implementation is TypeScript-safe with proper type declarations
