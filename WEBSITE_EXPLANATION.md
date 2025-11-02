# IEDC BOOTCAMP CEC Website - Complete Beginner's Guide

## 📚 Table of Contents
1. [What is This Website?](#what-is-this-website)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [File-by-File Explanation](#file-by-file-explanation)
5. [How Everything Works Together](#how-everything-works-together)
6. [Design Choices](#design-choices)
7. [How to Make Changes](#how-to-make-changes)

---

## What is This Website?

This is a modern, interactive website for **IEDC BOOTCAMP CEC** (Innovation and Entrepreneurship Development Cell at College of Engineering Chengannur). It showcases:
- Information about the organization
- Upcoming events and workshops
- Team members and their roles
- Latest news and updates
- Contact information

The website uses a stunning **dark theme** with **vibrant green and gold colors** and smooth animations.

---

## Technologies Used

### 1. **Next.js** (Framework)
- **What it is**: A React-based framework for building websites
- **Why we use it**: Makes websites fast, SEO-friendly, and easy to deploy
- **Version**: 14.2.33

### 2. **React** (Library)
- **What it is**: A JavaScript library for building user interfaces
- **Why we use it**: Makes it easy to create interactive components
- **Version**: 18.2.0

### 3. **JavaScript** (Programming Language)
- **What it is**: The language that makes websites interactive
- **Why we use it**: Required for React and Next.js

### 4. **CSS** (Styling)
- **What it is**: Language for styling and designing web pages
- **Why we use it**: Makes the website look beautiful with colors, animations, and layouts

### 5. **HTML** (Structure)
- **What it is**: The basic structure of web pages
- **Why we use it**: React generates HTML automatically

---

## Project Structure

```
iedc-bootcamp-cec/
├── app/                          # Main application folder
│   ├── layout.js                 # Root layout (wraps all pages)
│   ├── page.js                   # Homepage content
│   ├── page.module.css           # Styles for homepage
│   └── globals.css               # Global styles
├── node_modules/                 # Installed packages (auto-generated)
├── public/                       # Static files (images, etc.)
├── .next/                        # Build output (auto-generated)
├── package.json                  # Project configuration
├── package-lock.json             # Locked dependencies
├── next.config.js                # Next.js configuration
├── .gitignore                    # Files to ignore in Git
├── README.md                     # Project overview
├── DEPLOYMENT.md                 # Deployment instructions
├── QUICKSTART.md                 # Quick start guide
└── PROJECT_SUMMARY.md            # Project summary
```

---

## File-by-File Explanation

### 📄 **package.json**
**Purpose**: Configuration file that defines your project

**What's inside**:
```json
{
  "name": "iedc-bootcamp-cec",           // Project name
  "version": "1.0.0",                    // Version number
  "scripts": {
    "dev": "next dev",                   // Start development server
    "build": "next build",               // Build for production
    "start": "next start"                // Start production server
  },
  "dependencies": {
    "next": "14.2.33",                   // Next.js framework
    "react": "18.2.0",                   // React library
    "react-dom": "18.2.0"                // React DOM renderer
  }
}
```

**For beginners**: Think of this as a recipe card that tells your computer what ingredients (packages) are needed and how to cook (run) your website.

---

### 📄 **next.config.js**
**Purpose**: Configuration for Next.js framework

**What's inside**:
```javascript
const nextConfig = {}
module.exports = nextConfig
```

**For beginners**: This file tells Next.js how to behave. Currently, it's using default settings (empty configuration).

---

### 📄 **app/layout.js**
**Purpose**: The root layout that wraps every page

**What's inside**:
```javascript
import './globals.css'  // Import global styles

export const metadata = {
  title: 'IEDC BOOTCAMP CEC',
  description: 'Innovation and Entrepreneurship Development Cell...'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
```

**For beginners**: 
- This is like the frame of a picture - it surrounds everything
- `metadata`: Sets the browser tab title and description
- `{children}`: Where the actual page content goes
- Every page you create will be wrapped in this layout

---

### 📄 **app/globals.css**
**Purpose**: Global styles that apply to the entire website

**What's inside**:
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html, body {
  max-width: 100vw;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
```

**For beginners**:
- `*`: Applies to ALL elements
- `margin: 0; padding: 0;`: Removes default spacing
- `scroll-behavior: smooth;`: Makes scrolling smooth instead of jumpy
- These styles affect the entire website

---

### 📄 **app/page.js** (MAIN FILE)
**Purpose**: The homepage - contains all the content and structure

**Structure breakdown**:

#### 1. **Imports and Setup**
```javascript
'use client'  // Tells Next.js this runs in the browser
import { useState, useEffect } from 'react'
import styles from './page.module.css'
```

**For beginners**:
- `'use client'`: Needed for interactive features
- `useState`: Lets us store and change data (like menu open/closed)
- `useEffect`: Runs code when page loads
- `styles`: Imports our CSS styles

#### 2. **State Management**
```javascript
const [menuOpen, setMenuOpen] = useState(false)
const [scrolled, setScrolled] = useState(false)
const [activeCard, setActiveCard] = useState(null)
```

**For beginners**:
- `menuOpen`: Tracks if mobile menu is open (true/false)
- `scrolled`: Tracks if user has scrolled down
- `activeCard`: Tracks which event card is being hovered
- These help make the website interactive

#### 3. **Scroll Detection**
```javascript
useEffect(() => {
  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])
```

**For beginners**:
- Watches when user scrolls
- If scrolled more than 50 pixels, changes navigation bar style
- Adds a shadow effect to navbar when scrolling

#### 4. **Data Arrays**

**Events Data**:
```javascript
const events = [
  {
    id: 1,
    title: 'Startup Weekend',
    date: 'December 15-17, 2025',
    description: 'A 54-hour event...',
    image: '🚀'
  },
  // More events...
]
```

**For beginners**:
- Stores all event information in one place
- Easy to add/remove/edit events
- Each event has: id, title, date, description, and emoji icon

**Team Data**:
```javascript
const team = [
  { name: 'Vimal Vinod V', role: 'Program Manager', image: '📋' },
  { name: 'Mahadevan Reji', role: 'Web Manager', image: '💻' },
  // More team members...
]
```

**For beginners**:
- Lists all team members
- Each person has: name, role, and emoji representing their job
- Icons chosen to match their role (💻 for Web Manager, 🎬 for Video Editor, etc.)

**Blog Data**:
```javascript
const blogs = [
  {
    id: 1,
    title: 'IEDC Bootcamp Registration Open',
    date: 'Nov 1, 2025',
    excerpt: 'Join us for an intensive bootcamp...'
  },
  // More blog posts...
]
```

#### 5. **Page Sections**

The page is divided into sections:

**a) Navigation Bar**
```javascript
<nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
```
- Fixed at top of page
- Changes style when scrolling
- Contains logo and menu links

**b) Hero Section**
```javascript
<section id="home" className={styles.hero}>
```
- First thing visitors see
- Large title and description
- Call-to-action buttons
- Statistics (500+ Students, 50+ Events, 20+ Startups)

**c) About Section**
```javascript
<section className={styles.about}>
```
- Explains what IEDC is
- Mission and vision

**d) Events Section**
```javascript
<section id="events" className={styles.events}>
```
- Shows upcoming events
- Uses `.map()` to display all events from array
- Each event is a card with hover effects

**e) Team Section**
```javascript
<section id="team" className={styles.team}>
```
- Displays team members
- Shows name, role, and icon
- Hover effects on cards

**f) Blog Section**
```javascript
<section id="blog" className={styles.blog}>
```
- Latest updates and news
- Each post has date, title, and excerpt

**g) Contact Section**
```javascript
<section id="contact" className={styles.contact}>
```
- Call-to-action to join
- Large button

**h) Footer**
```javascript
<footer className={styles.footer}>
```
- Contact information
- Quick links
- Copyright notice

---

### 📄 **app/page.module.css** (STYLING FILE)
**Purpose**: Makes the website look beautiful

**Key Concepts**:

#### 1. **Color Scheme**
```css
/* Main Colors */
Background: #000000 (Black)
Text: #ffffff (White)
Primary Accent: #00ff7f (Neon Green)
Secondary Accent: #ffd700 (Gold)
Light Green: #22c55e
```

#### 2. **Animations**
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}
```
**For beginners**: Makes elements move up and down smoothly

```css
@keyframes shimmer {
  0% { background-position: -1000px 0; }
  100% { background-position: 1000px 0; }
}
```
**For beginners**: Creates a shimmering/glowing effect

```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```
**For beginners**: Makes elements fade in from bottom

#### 3. **Gradients**
```css
background: linear-gradient(135deg, #00ff7f, #ffd700, #22c55e);
```
**For beginners**: 
- Creates smooth color transitions
- `135deg`: Diagonal direction
- Colors blend from green → gold → green

#### 4. **Hover Effects**
```css
.eventCard:hover {
  transform: translateY(-15px) scale(1.02);
  box-shadow: 0 30px 60px rgba(0, 255, 127, 0.3);
}
```
**For beginners**:
- When you hover mouse over event card:
  - Moves up 15 pixels
  - Grows slightly (1.02 = 2% bigger)
  - Adds green glowing shadow

#### 5. **Responsive Design**
```css
@media (max-width: 768px) {
  .heroTitle { font-size: 3rem; }
  .navLinks { flex-direction: column; }
}
```
**For beginners**:
- Changes styles for mobile devices
- `max-width: 768px`: Applies to screens smaller than 768px
- Makes text smaller, stacks menu vertically

---

## How Everything Works Together

### 1. **When You Visit the Website**:

```
User types URL
    ↓
Next.js loads layout.js (frame)
    ↓
Next.js loads page.js (content)
    ↓
React renders all components
    ↓
CSS styles are applied
    ↓
JavaScript makes it interactive
    ↓
Website appears in browser!
```

### 2. **When You Scroll**:

```
User scrolls down
    ↓
JavaScript detects scroll position
    ↓
If scrolled > 50px, set scrolled = true
    ↓
CSS adds shadow to navigation bar
    ↓
Smooth visual feedback!
```

### 3. **When You Hover Over a Card**:

```
Mouse enters card area
    ↓
CSS :hover selector activates
    ↓
Card moves up, grows, and glows
    ↓
Smooth transition animation
    ↓
Visual feedback to user!
```

---

## Design Choices

### Why Dark Theme?
- **Modern**: Trendy and professional
- **Eye-friendly**: Easier to read in low light
- **Highlights colors**: Green and gold pop more on black

### Why Green and Gold?
- **Green**: Represents growth, innovation, nature
- **Gold**: Represents excellence, achievement, premium quality
- **Contrast**: Both colors stand out beautifully on black

### Why These Animations?
- **Subtle**: Not distracting
- **Professional**: Smooth and polished
- **Engaging**: Keeps users interested
- **Feedback**: Shows elements are interactive

### Why This Layout?
- **Hero First**: Grabs attention immediately
- **Logical Flow**: About → Events → Team → Blog → Contact
- **Card-based**: Easy to scan and read
- **Responsive**: Works on all devices

---

## How to Make Changes

### Change Colors:
1. Open `app/page.module.css`
2. Find color codes (e.g., `#00ff7f`)
3. Replace with new color
4. Save and refresh browser

### Add a New Event:
1. Open `app/page.js`
2. Find the `events` array
3. Add new object:
```javascript
{
  id: 4,
  title: 'Your Event Name',
  date: 'Event Date',
  description: 'Event description...',
  image: '🎉'
}
```
4. Save and refresh

### Add a New Team Member:
1. Open `app/page.js`
2. Find the `team` array
3. Add new object:
```javascript
{ 
  name: 'Person Name', 
  role: 'Their Role', 
  image: '👤' 
}
```
4. Save and refresh

### Change Text:
1. Open `app/page.js`
2. Find the text you want to change
3. Edit it directly in the JSX
4. Save and refresh

### Modify Animations:
1. Open `app/page.module.css`
2. Find `@keyframes` rules
3. Adjust timing or effects
4. Save and refresh

---

## Common Terms Explained

**Component**: A reusable piece of UI (like a card or button)

**State**: Data that can change (like menu open/closed)

**Props**: Data passed to components (like event title)

**Hook**: Special React function (useState, useEffect)

**CSS Module**: CSS file that only affects one component

**Gradient**: Smooth transition between colors

**Transform**: Move, rotate, or scale elements

**Transition**: Smooth animation between states

**Responsive**: Adapts to different screen sizes

**Deploy**: Put website online for everyone to see

---

## Development Commands

### Start Development Server:
```bash
npm run dev
```
- Opens website at http://localhost:3000
- Auto-reloads when you make changes
- For development only

### Build for Production:
```bash
npm run build
```
- Creates optimized version
- Minifies code
- Prepares for deployment

### Start Production Server:
```bash
npm start
```
- Runs the built version
- Faster than dev mode
- For production use

---

## Deployment Process

### 1. Push to GitHub:
```bash
git add .
git commit -m "Your message"
git push origin main
```

### 2. Deploy on Vercel:
1. Go to vercel.com
2. Import your GitHub repository
3. Click "Deploy"
4. Wait 2-3 minutes
5. Your site is live!

### 3. Automatic Updates:
- Every time you push to GitHub
- Vercel automatically rebuilds
- Changes go live in minutes

---

## Troubleshooting

### Website not loading?
- Check if dev server is running (`npm run dev`)
- Check for errors in terminal
- Try clearing browser cache (Ctrl + Shift + R)

### Styles not applying?
- Make sure CSS file is imported
- Check for typos in className
- Verify CSS syntax

### Changes not showing?
- Save all files
- Refresh browser (Ctrl + R)
- Check if dev server reloaded

### Build errors?
- Read error message carefully
- Check for missing semicolons or brackets
- Verify all imports are correct

---

## Best Practices

### Code Organization:
- Keep related code together
- Use meaningful variable names
- Add comments for complex logic
- Break large components into smaller ones

### Performance:
- Optimize images before adding
- Minimize animations
- Use CSS instead of JavaScript when possible
- Keep components simple

### Maintenance:
- Commit changes regularly
- Write descriptive commit messages
- Test on different devices
- Keep dependencies updated

---

## Resources for Learning

### Next.js:
- Official Docs: https://nextjs.org/docs
- Learn Next.js: https://nextjs.org/learn

### React:
- Official Docs: https://react.dev
- React Tutorial: https://react.dev/learn

### CSS:
- MDN Web Docs: https://developer.mozilla.org/en-US/docs/Web/CSS
- CSS Tricks: https://css-tricks.com

### JavaScript:
- MDN JavaScript: https://developer.mozilla.org/en-US/docs/Web/JavaScript
- JavaScript.info: https://javascript.info

---

## Summary

Your website is built with:
- **Next.js** (framework) + **React** (library) + **JavaScript** (language)
- **CSS** for beautiful styling with green/gold theme
- **Animations** for smooth, engaging interactions
- **Responsive design** that works on all devices
- **Modular structure** that's easy to maintain

Everything works together to create a modern, professional website that showcases IEDC BOOTCAMP CEC in the best possible way!

---

**Need Help?** 
- Check the documentation files (README.md, QUICKSTART.md, DEPLOYMENT.md)
- Read error messages carefully
- Search online for specific issues
- Ask for help in developer communities

**Happy Coding! 🚀**
