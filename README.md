# IEDC BOOTCAMP CEC Website

A modern, responsive website for the Innovation and Entrepreneurship Development Cell (IEDC) at College of Engineering Chengannur.

## Features

- 🎨 Modern and clean design
- 📱 Fully responsive (mobile-friendly)
- ⚡ Fast-loading with Next.js
- 🎯 Event showcase and registration
- 👥 Team member profiles
- 📝 Blog/Updates section
- 🚀 Optimized for performance

## Tech Stack

- Next.js 14
- React 18
- CSS Modules
- JavaScript

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment on Vercel

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Vercel will automatically detect Next.js and deploy
5. Your site will be live in minutes!

### Quick Deploy Button
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/YOUR_REPO)

## Project Structure

```
├── app/
│   ├── layout.js       # Root layout
│   ├── page.js         # Homepage
│   ├── page.module.css # Styles
│   └── globals.css     # Global styles
├── package.json
├── next.config.js
└── README.md
```

## Sections

- **Hero**: Eye-catching introduction
- **About**: IEDC mission and vision
- **Events**: Upcoming workshops and activities
- **Team**: Coordinators and student leads
- **Blog**: Latest updates and announcements
- **Footer**: Contact information

## Customization

Edit the content in `app/page.js`:
- Update events in the `events` array
- Modify team members in the `team` array
- Add blog posts to the `blogs` array

## License

MIT