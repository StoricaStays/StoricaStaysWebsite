# Configurable RoomsSection Component

## Overview

The `RoomsSection` component has been refactored to be highly configurable and reusable across different parts of the application. It can display different sets of rooms with customizable titles, styling, and behavior.

## Features

### ✅ **Configurable Props**

- **rooms**: Array of room objects to display
- **title**: Section title (e.g., "Our Rooms", "Featured Rooms")
- **subtitle**: Section subtitle with automatic text highlighting
- **sectionId**: HTML ID for the section (for navigation/anchoring)
- **showPhone**: Whether to show phone buttons or book buttons
- **phone**: Phone number for call buttons
- **containerClass**: CSS classes for the container
- **wow**: Enable/disable WOW.js animations
- **wowDelay**: Animation delay for WOW.js

### ✅ **Room Data Management**

- **Centralized data**: All room configurations in `src/data/rooms.ts`
- **Multiple configurations**: Pre-defined room sets for different use cases
- **Type safety**: Full TypeScript support with `Room` interface

## Room Configurations

### Available Room Sets

#### 1. **mainRooms** (All Rooms)

- Complete collection of all available rooms
- Use for main rooms page or comprehensive listings

#### 2. **featuredRooms** (Highlighted Rooms)

- Subset of premium/popular rooms
- Perfect for homepage or landing pages

#### 3. **dormRooms** (Budget Options)

- Shared dormitory rooms only
- Great for budget-conscious travelers section

#### 4. **premiumRooms** (Luxury Collection)

- High-end heritage and deluxe rooms
- Ideal for luxury accommodation sections

## Component Props

```typescript
interface RoomsSectionProps {
  rooms?: Room[]; // Default: mainRooms
  title?: string; // Default: "Our Rooms"
  subtitle?: string; // Default: "Explore Our Rooms"
  sectionId?: string; // Default: "Rooms"
  showPhone?: boolean; // Default: true
  phone?: string; // Default: "+91 6378365775"
  containerClass?: string; // Default: "container-xxl py-5"
  wow?: boolean; // Default: true
  wowDelay?: string; // Default: "0.1s"
}
```

## Usage Examples

### 1. Default Usage (Main Rooms Page)

```tsx
import RoomsSection from "../components/RoomsSection";

// Uses all default props - shows all rooms with phone buttons
<RoomsSection />;
```

### 2. Featured Rooms (Homepage)

```tsx
import RoomsSection from "../components/RoomsSection";
import { featuredRooms } from "../data/rooms";

<RoomsSection
  rooms={featuredRooms}
  title="Featured Rooms"
  subtitle="Discover Our Premium Stays"
  sectionId="FeaturedRooms"
  containerClass="container-xxl py-3"
/>;
```

### 3. Dorm Rooms Only

```tsx
import RoomsSection from "../components/RoomsSection";
import { dormRooms } from "../data/rooms";

<RoomsSection
  rooms={dormRooms}
  title="Budget Friendly"
  subtitle="Shared Dormitory Rooms"
  sectionId="DormRooms"
  showPhone={false} // Shows "Book Now" buttons instead
  containerClass="container-xxl py-4"
/>;
```

### 4. Custom Room Selection

```tsx
import RoomsSection from "../components/RoomsSection";
import { mainRooms } from "../data/rooms";

// Show only first 2 rooms
<RoomsSection
  rooms={mainRooms.slice(0, 2)}
  title="Quick Stay"
  subtitle="Popular Room Options"
  sectionId="QuickRooms"
  showPhone={false}
  containerClass="container py-3"
  wow={false}
/>;
```

## Button Behavior

### With Phone (`showPhone={true}`)

- **Button Text**: "Call Now"
- **Action**: Makes phone call to provided number
- **GTM Tracking**: Tracks call interactions
- **Use Case**: When direct contact is preferred

### Without Phone (`showPhone={false}`)

- **Button Text**: "Book Now"
- **Action**: Navigates to `/book` page
- **GTM Tracking**: Tracks booking navigation
- **Use Case**: When online booking is preferred

## Styling Options

### Container Classes

```tsx
// Full width with large padding
containerClass = "container-xxl py-5";

// Compact version
containerClass = "container py-3";

// With background
containerClass = "container-xxl py-5 bg-light";

// Custom spacing
containerClass = "container-xxl py-4 my-5";
```

### Animation Control

```tsx
// Enable animations with custom delay
wow={true}
wowDelay="0.2s"

// Disable animations
wow={false}
```

## Adding New Room Configurations

### 1. Define New Room Set

```typescript
// In src/data/rooms.ts
export const customRooms: Room[] = [
  {
    id: "custom-1",
    title: "Custom Room",
    image: "/img/custom/room.jpg",
    alt: "Custom room description",
    bedCount: 2,
    bathCount: 1,
    galleryImages: ["/img/custom/gallery1.jpg"],
    delay: "0.1s",
  },
];
```

### 2. Use New Configuration

```tsx
import { customRooms } from "../data/rooms";

<RoomsSection
  rooms={customRooms}
  title="Special Collection"
  subtitle="Custom Room Selection"
/>;
```

## File Structure

```
src/
├── data/
│   └── rooms.ts                 # Room data and configurations
├── components/
│   ├── RoomsSection.tsx        # Main configurable component
│   └── RoomCard.tsx            # Individual room display
├── examples/
│   └── roomSectionExamples.tsx # Usage examples
└── pages/
    └── rooms/                  # Different room pages
```

## Benefits

### ✅ **Reusability**

- One component for multiple use cases
- Consistent styling and behavior
- Easy to maintain and update

### ✅ **Flexibility**

- Customizable for different sections
- Configurable buttons and actions
- Adaptive styling options

### ✅ **Maintainability**

- Centralized room data
- Type-safe configurations
- Clear separation of concerns

### ✅ **Performance**

- Only loads needed room data
- Conditional rendering
- Optimized for different screen sizes

## Migration from Old Component

### Before (Hard-coded)

```tsx
// Fixed rooms array in component
// Fixed titles and styling
// Single use case only
```

### After (Configurable)

```tsx
// Flexible room selection
// Customizable titles and styling
// Multiple use cases supported
// Backward compatible with defaults
```

The refactored `RoomsSection` maintains backward compatibility while providing extensive customization options for future development needs!
