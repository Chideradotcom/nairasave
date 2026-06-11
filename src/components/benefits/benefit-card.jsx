import styles from './benefits-section.module.css'

export function BenefitCard({ icon, title, description }) {
  return (
    <article className={styles.benefitCard}>
      <div className={styles.benefitIconWrap} aria-hidden="true">
        <span className={`material-symbols-outlined ${styles.benefitIcon}`}>{icon}</span>
      </div>
      <h3 className={styles.benefitTitle}>{title}</h3>
      <p className={styles.benefitDescription}>{description}</p>
    </article>
  );
}