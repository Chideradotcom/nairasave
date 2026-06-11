import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <section className={styles.topSection}>
          <section className={styles.brandColumn}>
            <h2 className={styles.logo}>NairaSave</h2>
            <p className={styles.tagline}>
              Save securely in USD, watch your returns grow, and monitor
              alternative value parallel-market conversions in real time. Defend
              your wealth against inflation.
            </p>
          </section>

          <nav
            className={styles.linksColumn}
            aria-labelledby="product-links-title"
          >
            <h3 id="product-links-title" className={styles.columnTitle}>
              Product
            </h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#features" className={styles.link}>
                  Core Features
                </a>
              </li>
              <li>
                <a href="#calculator" className={styles.link}>
                  Savings Estimator
                </a>
              </li>
              <li>
                <a href="#security" className={styles.link}>
                  Security Protocols
                </a>
              </li>
            </ul>
          </nav>

          <nav
            className={styles.linksColumn}
            aria-labelledby="company-links-title"
          >
            <h3 id="company-links-title" className={styles.columnTitle}>
              Company
            </h3>
            <ul className={styles.linksList}>
              <li>
                <a href="#about" className={styles.link}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#faq" className={styles.link}>
                  FAQs
                </a>
              </li>
              <li>
                <a href="mailto:support@nairasave.co" className={styles.link}>
                  Contact Support
                </a>
              </li>
            </ul>
          </nav>

          <nav
            className={styles.linksColumn}
            aria-labelledby="social-links-title"
          >
            <h3 id="social-links-title" className={styles.columnTitle}>
              Connect
            </h3>
            <ul className={styles.linksList}>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Twitter / X
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </nav>
        </section>

        <hr className={styles.divider} />

        <section className={styles.disclaimerSection}>
          <small className={styles.disclaimerText}>
            Regulatory Disclaimer: NairaSave is a financial technology platform,
            not a licensed commercial bank. Digital wallet configurations and
            automated dollar funds are securely custodied with our partner
            institutions licensed by the Central Bank of Nigeria (CBN) and
            protected under standard capital asset management clauses.
          </small>
        </section>

        <section className={styles.bottomSection}>
          <small className={styles.copyright}>
            &copy; {new Date().getFullYear()} NairaSave. Project crafted for the
            NTTS User Acquisition Challenge.
          </small>
          <span className={styles.trackTag}>#NTTSFrontEndDev Track</span>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
