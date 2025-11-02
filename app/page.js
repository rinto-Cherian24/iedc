'use client'
import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

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
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className={styles.navContent}>
          <div className={styles.logo}>
            IEDC BOOTCAMP CEC
          </div>
          <button 
            className={styles.menuToggle}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
          <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#events" onClick={() => setMenuOpen(false)}>Events</a></li>
            <li><a href="#team" onClick={() => setMenuOpen(false)}>Team</a></li>
            <li><a href="#blog" onClick={() => setMenuOpen(false)}>Updates</a></li>
            <li><a href="#contact" className={styles.ctaNav} onClick={() => setMenuOpen(false)}>Join Now</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroTag}>Innovation & Entrepreneurship</div>
          <h1 className={styles.heroTitle}>
            IEDC BOOTCAMP CEC
          </h1>
          <h2 className={styles.heroSubtitle}>College of Engineering Chengannur</h2>
          <p className={styles.heroDescription}>
            Empowering the next generation of innovators and entrepreneurs through 
            comprehensive programs, expert mentorship, and cutting-edge resources.
          </p>
          <div className={styles.heroButtons}>
            <button className={styles.ctaButton}>
              Get Started →
            </button>
            <button className={styles.secondaryButton}>
              Learn More
            </button>
          </div>
          <div className={styles.heroStats}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Active Students</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>Annual Events</div>
            </div>
            <div className={styles.statDivider}></div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>20+</div>
              <div className={styles.statLabel}>Startups Launched</div>
            </div>
          </div>
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
              <div 
                key={event.id} 
                className={`${styles.eventCard} ${activeCard === event.id ? styles.eventCardActive : ''}`}
                onMouseEnter={() => setActiveCard(event.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div className={styles.eventIcon}>{event.image}</div>
                <h3>{event.title}</h3>
                <p className={styles.eventDate}>{event.date}</p>
                <p>{event.description}</p>
                <button className={styles.registerButton}>
                  Register Now →
                </button>
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
                <div className={styles.teamIconWrapper}>
                  <div className={styles.teamIcon}>{member.image}</div>
                  <div className={styles.teamOverlay}>
                    <button className={styles.teamConnect}>Connect</button>
                  </div>
                </div>
                <h3>{member.name}</h3>
                <p className={styles.teamRole}>{member.role}</p>
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
                <div className={styles.blogDate}>{blog.date}</div>
                <h3>{blog.title}</h3>
                <p>{blog.excerpt}</p>
                <a href="#" className={styles.readMore}>
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={styles.contact}>
        <div className={styles.sectionContent}>
          <h2>Ready to Start Your Journey?</h2>
          <p className={styles.contactSubtitle}>Join IEDC BOOTCAMP CEC and turn your ideas into reality</p>
          <button className={styles.ctaButtonLarge}>
            Join Our Community →
          </button>
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
              <li><a href="#home">Home</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#blog">Blog</a></li>
            </ul>
          </div>
          <div className={styles.footerSection}>
            <h3>Connect</h3>
            <p>Email: iedc@cec.ac.in</p>
            <p>Phone: +91 1234567890</p>
            <p>Location: Chengannur, Kerala</p>
          </div>
        </div>
        <div className={styles.footerBottom}>
          <p>&copy; 2025 IEDC BOOTCAMP CEC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
