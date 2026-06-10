import { benefitsCards } from "../../data/benefits-cards";
import { BenefitCard } from "./benefit-card";
import styles from './benefits-section.module.css'





export default function BenefitsSection() {
  return (
    <section className={styles.benefitsSection} aria-labelledby="benefits-title">
      <div className={styles.benefitsHeader}>
        <h2 className={styles.benefitsTitle} id="benefits-title">
          Why Choose NairaSave?
        </h2>
        <p className={styles.benefitsDescription}>
          We combine the stability of global currency with the convenience of
          local banking systems.
        </p>
      </div>

      <div className={styles.benefitsGrid}>
        {benefitsCards.map((card) => (
          <BenefitCard
            key={card.id}
            icon={card.icon}
            title={card.title}
            description={card.description}
          />
        ))}
      </div>
    </section>
  );
}

