# Design Document

## Overview

The IEDC BOOTCAMP CEC website will be built using Next.js 14 with the App Router, leveraging React Server Components for optimal performance. The design follows a modern, clean aesthetic with a focus on usability and visual appeal. The website will use Tailwind CSS for styling, ensuring responsive design across all devices.

### Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel
- **Version Control**: Git

### Design Principles

1. **Simplicity**: Clean layouts with clear information hierarchy
2. **Responsiveness**: Mobile-first approach ensuring great experience on all devices
3. **Performance**: Optimized images and code splitting for fast load times
4. **Accessibility**: Semantic HTML and proper contrast ratios
5. **Visual Appeal**: Modern design with smooth animations and professional aesthetics

## Architecture

### Project Structure

```
iedc-bootcamp-website/
├── app/
│   ├── layout.tsx          # Root layout with navigation and footer
│   ├── page.tsx            # Homepage
│   ├── events/
│   │   └── page.tsx        # Events page
│   ├── team/
│   │   └── page.tsx        # Team page
│   ├── updates/
│   │   └── page.tsx        # Updates/Blog page
│   └── about/
│       └── page.tsx        # About page
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   ├── Hero.tsx            # Hero section component
│   ├── EventCard.tsx       # Event card component
│   ├── TeamCard.tsx        # Team member card component
│   └── UpdateCard.tsx      # Update/announcement card component
├── data/
│   ├── events.ts           # Events data
│   ├── team.ts             # Team members data
│   └── updates.ts          # Updates data
├── public/
│   └── images/             # Static images
└── styles/
    └── globals.css         # Global styles and Tailwind imports

```

### Routing Strategy

Using Next.js App Router with file-based routing:
- `/` - Homepage with hero and overview sections
- `/events` - Events and workshops listing
- `/team` - Team members showcase
- `/updates` - Updates and announcements
- `/about` - About IEDC BOOTCAMP CEC

## Components and Interfaces

### 1. Layout Components

#### Navbar Component
```typescript
interface NavbarProps {
  // No props needed - static navigation
}
```

Features:
- Logo/branding on the left
- Navigation links (Home, Events, Team, Updates, About)
- Mobile hamburger menu for small screens
- Sticky positioning for easy access
- Active link highlighting

#### Footer Component
```typescript
interface FooterProps {
  // No props needed - static content
}
```

Features:
- Social media links (Instagram, LinkedIn, Twitter, etc.)
- Quick links to main pages
- Contact information
- Copyright notice

### 2. Page Components

#### Hero Component
```typescript
interface HeroProps {
  title: string;
  subtitle: string;
  ctaText?: string;
  ctaLink?: string;
}
```

Features:
- Large heading with IEDC BOOTCAMP CEC branding
- Compelling subtitle about innovation and entrepreneurship
- Optional call-to-action button
- Background gradient or image
- Responsive text sizing

#### EventCard Component
```typescript
interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  venue: string;
  time: string;
  image?: string;
}

interface EventCardProps {
  event: Event;
}
```

Features:
- Event title and date prominently displayed
- Brief description
- Venue and timing information
- Optional event image
- Hover effects for interactivity

#### TeamCard Component
```typescript
interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  email?: string;
  linkedin?: string;
  github?: string;
}

interface TeamCardProps {
  member: TeamMember;
}
```

Features:
- Profile photo (circular or rounded square)
- Name and role
- Social media/contact links
- Hover effects revealing additional info
- Consistent card sizing

#### UpdateCard Component
```typescript
interface Update {
  id: string;
  title: string;
  date: string;
  content: string;
  author?: string;
}

interface UpdateCardProps {
  update: Update;
}
```

Features:
- Update title and date
- Content preview or full content
- Author attribution if available
- Clean, readable typography

## Data Models

### Events Data Structure
```typescript
// data/events.ts
export const events: Event[] = [
  {
    id: "1",
    title: "Startup Bootcamp 2024",
    date: "2024-12-15",
    description: "Intensive 3-day bootcamp on startup fundamentals",
    venue: "CEC Auditorium",
    time: "9:00 AM - 5:00 PM",
    image: "/images/events/bootcamp.jpg"
  },
  // More events...
];
```

### Team Data Structure
```typescript
// data/team.ts
export const coordinators: TeamMember[] = [
  {
    id: "1",
    name: "John Doe",
    role: "Chief Coordinator",
    photo: "/images/team/john.jpg",
    email: "john@example.com",
    linkedin: "https://linkedin.com/in/johndoe"
  },
  // More coordinators...
];

export const studentLeads: TeamMember[] = [
  // Student leads...
];
```

### Updates Data Structure
```typescript
// data/updates.ts
export const updates: Update[] = [
  {
    id: "1",
    title: "Registration Open for Winter Bootcamp",
    date: "2024-11-01",
    content: "We're excited to announce that registrations are now open...",
    author: "IEDC Team"
  },
  // More updates...
];
```

## Design System

### Color Palette

Primary colors aligned with innovation and entrepreneurship theme:
- **Primary**: Blue (#2563eb) - Trust, professionalism
- **Secondary**: Purple (#7c3aed) - Creativity, innovation
- **Accent**: Orange (#f97316) - Energy, enthusiasm
- **Neutral**: Gray scale for text and backgrounds
- **Success**: Green (#10b981) for positive actions
- **Background**: White (#ffffff) and Light Gray (#f9fafb)

### Typography

- **Headings**: Inter or Poppins (bold, modern)
- **Body**: Inter or System UI (readable, clean)
- **Sizes**:
  - H1: 3rem (mobile: 2rem)
  - H2: 2.25rem (mobile: 1.75rem)
  - H3: 1.875rem (mobile: 1.5rem)
  - Body: 1rem
  - Small: 0.875rem

### Spacing

Using Tailwind's spacing scale (4px base unit):
- Section padding: 4rem (mobile: 2rem)
- Card padding: 1.5rem
- Element gaps: 1rem to 2rem
- Consistent margins between sections

### Animations

- **Hover effects**: Scale (1.05), shadow increase, color transitions
- **Page transitions**: Fade in on load
- **Duration**: 200-300ms for smooth feel
- **Easing**: ease-in-out for natural motion

## Page Layouts

### Homepage Layout

1. **Hero Section**
   - Full-width background
   - Centered content with title, subtitle, CTA
   - Height: 70vh (mobile: 60vh)

2. **About Preview**
   - Brief introduction to IEDC BOOTCAMP CEC
   - 2-column layout (mobile: stacked)
   - Vision and mission highlights

3. **Featured Events**
   - 3 upcoming events in card grid
   - Link to full events page

4. **Team Preview**
   - Showcase 4-6 key team members
   - Link to full team page

5. **Latest Updates**
   - 3 most recent updates
   - Link to full updates page

### Events Page Layout

- Page title and description
- Grid of event cards (3 columns desktop, 2 tablet, 1 mobile)
- Chronological ordering (upcoming first)
- Each card shows key event details

### Team Page Layout

- Page title
- Section for Coordinators
  - Grid layout (4 columns desktop, 2 tablet, 1 mobile)
- Section for Student Leads
  - Same grid layout
- Consistent card styling for all members

### Updates Page Layout

- Page title
- List of updates (2 columns desktop, 1 mobile)
- Each update shows title, date, content
- Reverse chronological order

### About Page Layout

- Hero section with IEDC branding
- Vision and Mission sections
- What We Do section
- Contact information
- Location/address details

## Responsive Design Strategy

### Breakpoints (Tailwind defaults)

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

### Mobile Optimizations

- Hamburger menu for navigation
- Single column layouts
- Larger touch targets (min 44px)
- Reduced padding and margins
- Optimized image sizes
- Simplified animations

### Desktop Enhancements

- Multi-column grids
- Hover effects and transitions
- Larger images and visual elements
- More whitespace for breathing room

## Performance Optimization

### Image Optimization

- Use Next.js Image component for automatic optimization
- Lazy loading for below-the-fold images
- WebP format with fallbacks
- Responsive image sizes
- Proper width and height attributes

### Code Optimization

- Server Components by default (Next.js 14)
- Client Components only when needed (interactivity)
- Code splitting automatic with App Router
- Minimal JavaScript bundle
- CSS purging with Tailwind

### Loading Strategy

- Static generation for all pages (fast initial load)
- Incremental Static Regeneration if needed for updates
- Optimized fonts with next/font
- Preload critical resources

## Error Handling

### Client-Side Errors

- Graceful fallbacks for missing images (placeholder)
- Error boundaries for component failures
- User-friendly error messages

### Data Errors

- Handle missing or malformed data gracefully
- Default values for optional fields
- Validation for data structures

## Testing Strategy

### Manual Testing

- Test on multiple devices (mobile, tablet, desktop)
- Test on different browsers (Chrome, Firefox, Safari, Edge)
- Verify responsive breakpoints
- Check all navigation links
- Verify image loading
- Test mobile menu functionality

### Performance Testing

- Run Lighthouse audits
- Check Core Web Vitals
- Verify load times on different connections
- Test image optimization

### Accessibility Testing

- Keyboard navigation
- Screen reader compatibility
- Color contrast ratios
- Semantic HTML structure

## Deployment Strategy

### Vercel Deployment

1. Connect GitHub repository to Vercel
2. Configure build settings:
   - Framework: Next.js
   - Build command: `npm run build`
   - Output directory: `.next`
3. Set up automatic deployments on push to main branch
4. Enable preview deployments for branches
5. Configure custom domain if available

### Environment Setup

- No environment variables needed for static content
- All data stored in TypeScript files
- Public assets in `/public` directory

### Git Workflow

1. Make changes locally
2. Test locally with `npm run dev`
3. Commit changes with descriptive messages
4. Push to main branch
5. Vercel automatically deploys
6. Verify deployment on Vercel URL

## Future Enhancements (Out of Scope)

- Content Management System (CMS) integration
- Event registration system
- User authentication
- Dynamic blog with markdown support
- Search functionality
- Newsletter subscription
- Gallery section for event photos
