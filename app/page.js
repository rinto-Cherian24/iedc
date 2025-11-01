'use client'
import { useState } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)

  const events = [
    {
      id: 1,
      title: 'Startup Weekend',
      date: 'December 15-17, 2025',
      description: 'A 54-hour event where participants pitch ideas, form teams, and build startups.',
      image: '🚀'
    },
    {
      id: 2,
      title: 'Tech Talk Series',
      date: 'Every Friday',
      description: 'Weekly sessions with industry experts sharing insights on technology and innovation.',
      image: '💡'
    },
    {
      id: 3,
      title: 'Hackathon 2025',
      date: 'January 20-21, 2025',
      description: '24-hour coding marathon to solve real-world problems with innovative solutions.',
      image: '💻'
    }
  ]

  const team = [
    { name: 'Rajesh Kumar', role: 'Chief Coordinator', image: '👨‍💼' },
    { name: 'Priya Menon', role: 'Technical Lead', image: '👩‍💻' },
    { name: 'Arun Krishnan', role: 'Events Manager', image: '👨‍🎓' },
    { name: 'Sneha Nair', role: 'Marketing Head', image: '👩‍🎨' }
  ]

  const blogs = [
    {
      id: 1,
      title: 'IEDC Bootcamp Registration Open',
      date: 'Nov 1, 2025',
      excerpt: 'Join us for an intensive bootcamp on entrepreneurship and innovation...'
    },
    {
      id: 2,
      title: 'Success Story: Alumni Startup Raises $1M',
      date: 'Oct 28, 2025',
      excerpt: 'Our alumni-founded startup secures seed funding from top investors...'
    },
    {
      id: 3,
      title: 'Workshop on Product Development',
      date: 'Oct 25, 2025',
      excerpt: 'Learn the fundamentals of building products that users love...'
    }
  ]

  return (
    <div className={styles.container}>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.navContent}>
          <div className={styles.logo}>IEDC BOOTCAMP CEC</div>
          <button 
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#blog">Updates</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <h1>Welcome to IEDC BOOTCAMP CEC</h1>
          <p>Empowering Innovation & Entrepreneurship at College of Engineering Chengannur</p>
          <button className={styles.ctaButton}>Join Us Today</button>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.about}>
        <div className={styles.sectionContent}>
          <h2>About IEDC BOOTCAMP</h2>
          <p>
            The Innovation and Entrepreneurship Development Cell (IEDC) at CEC is dedicated to 
            fostering a culture of innovation and entrepreneurship among students. We provide 
            resources, mentorship, and opportunities to transform ideas into reality.
          </p>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className={styles.events}>
        <div className={styles.sectionContent}>
          <h2>Upcoming Events & Workshops</h2>
          <div className={styles.eventsGrid}>
            {events.map(event => (
              <div key={event.id} className={styles.eventCard}>
                <div className={styles.eventIcon}>{event.image}</div>
                <h3>{event.title}</h3>
                <p className={styles.eventDate}>{event.date}</p>
                <p>{event.description}</p>
                <button className={styles.registerButton}>Register Now</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className={styles.team}>
        <div className={styles.sectionContent}>
          <h2>Our Team</h2>
          <div className={styles.teamGrid}>
            {team.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <div className={styles.teamIcon}>{member.image}</div>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className={styles.blog}>
        <div className={styles.sectionContent}>
          <h2>Latest Updates</h2>
          <div className={styles.blogGrid}>
            {blogs.map(blog => (
              <div key={blog.id} className={styles.blogCard}>
                <h3>{blog.title}</h3>
                <p className={styles.blogDate}>{blog.date}</p>
                <p>{blog.excerpt}</p>
                <a href="#" className={styles.readMore}>Read More →</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerSection}>
            <h3>IEDC BOOTCAMP CEC</h3>
            <p>College of Engineering Chengannur</p>
            <p>Kerala, India</p>
          </div>
          <div className={styles.footerSection}>
            <h3>Quick Links</h3>
            <ul>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Connect</h3>
            <p>Email: iedc@cec.ac.in</p>
            <p>Phone: +91 1234567890</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 IEDC BOOTCAMP CEC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
