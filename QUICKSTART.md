# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```

### 3. Open in Browser
Visit [http://localhost:3000](http://localhost:3000)

## 📝 Making Changes

### Update Events
Edit `app/page.js` - find the `events` array and modify:
```javascript
const events = [
  {
    id: 1,
    title: 'Your Event Name',
    date: 'Event Date',
    description: 'Event description...',
    image: '🚀' // Use any emoji
  }
]
```

### Update Team Members
Edit `app/page.js` - find the `team` array:
```javascript
const team = [
  { 
    name: 'Member Name', 
    role: 'Their Role', 
    image: '👨‍💼' 
  }
]
```

### Update Blog Posts
Edit `app/page.js` - find the `blogs` array:
```javascript
const blogs = [
  {
    id: 1,
    title: 'Post Title',
    date: 'Date',
    excerpt: 'Short description...'
  }
]
```

### Change Colors
Edit `app/page.module.css` - look for gradient colors:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 🎨 Customization Tips

- **Logo**: Change text in `.logo` class
- **Hero Text**: Edit `heroContent` section in `app/page.js`
- **Footer Info**: Update footer section in `app/page.js`
- **Fonts**: Modify `font-family` in `app/page.module.css`

## 📦 Build for Production
```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel
See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

Quick deploy:
1. Push to GitHub
2. Connect to Vercel
3. Auto-deploy! ✨

## 🛠️ Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000 (Windows)
netstat -ano | findstr :3000
taskkill /PID <PID> /F
```

**Changes not showing?**
- Hard refresh: Ctrl + Shift + R
- Clear browser cache
- Restart dev server

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [CSS Modules](https://github.com/css-modules/css-modules)

---

Need help? Check the full [README.md](./README.md)
