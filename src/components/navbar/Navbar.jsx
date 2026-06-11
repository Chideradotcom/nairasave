import { useState } from 'react';
import styles from './Navbar.module.css';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  
  return (
    <nav className={styles.navbarContainer}>
      <div className={styles.navbarInner}>
        {/* Logo / Brand Name */}
        <div className={styles.brandLogo}>
          NairaSave
        </div>

        {/* Hamburger Menu Icon for Mobile */}
        <button 
          className={`${styles.hamburger} ${isOpen ? styles.hamburgerActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Navigation Links & CTA Wrapper */}
        <div className={`${styles.navMenuWrapper} ${isOpen ? styles.menuOpen : ''}`}>
          <ul className={styles.navLinks}>
            <li className={`${styles.navItem} ${styles.active}`}>
              <a href="#features" onClick={() => setIsOpen(false)}>Features</a>
            </li>
            <li className={styles.navItem}>
              <a href="#rates" onClick={() => setIsOpen(false)}>Rates</a>
            </li>
            <li className={styles.navItem}>
              <a href="#security" onClick={() => setIsOpen(false)}>Security</a>
            </li>
            <li className={styles.navItem}>
              <a href="#faqs" onClick={() => setIsOpen(false)}>FAQs</a>
            </li>
          </ul>

          {/* Call to Action Button */}
          <div className={styles.ctaContainer}>
            <button className={styles.waitlistBtn}>
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;