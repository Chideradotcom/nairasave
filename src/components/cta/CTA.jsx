import styles from './CTA.module.css'

export function CTA() {
  return(
    <section className={styles.ctaCont}>
      <h1 className={styles.ctaTitle}>Start Building Your Global Wealth Today.</h1>
      <p className={styles.ctaParagraph}>Be among the first to experience a new standard of financial stability in Nigeria.</p>
      <button className={styles.button}>Join the Waitlist</button>
    </section>
  )
}