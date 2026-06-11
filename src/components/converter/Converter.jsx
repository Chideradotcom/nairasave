import { useState } from "react";
import styles from "./Converter.module.css";

export function Converter() {
  const [usdInput, setUsdInput] = useState("1000");
  const staticRate = 1550;

  const handleInputChange = (event) => {
    setUsdInput(event.target.value);
  };

  const calculatedNaira = (parseFloat(usdInput) || 0) * staticRate;

  const nairaOutput = new Intl.NumberFormat("en-NG", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(calculatedNaira);

  return (
    <section className={styles.converterSection}>
      {/* Self-contained widget styled as an article */}
      <article className={styles.converterCard}>
        <header className={styles.cardHeader}>
          <h2 className={styles.savingsTitle}>Instant Savings Estimates</h2>
          <p className={styles.rateSubtitle}>
            Parallel market rate:{" "}
            <span className={styles.subtitleBold}>1 USD = 1,550 NGN</span>
          </p>
        </header>

        <form className={styles.calculatorCont} onSubmit={(e) => e.preventDefault()}>
          <fieldset className={styles.usdCont}>
            <legend className={styles.inputLabel}>USD Saving</legend>
            <span className={styles.inputDecoratorWrapper}>
              <span className={`${styles.currencySymbol} ${styles.usdColor}`}>$</span>
              <input
                type="number"
                name="usdInput"
                id="usdInput"
                min="0"
                placeholder="0.00"
                className={styles.usdInput}
                onChange={handleInputChange}
                value={usdInput}
              />
            </span>
          </fieldset>

          <button type="button" aria-label="Convert currency" className={styles.syncIconDivider}>
            <span className="material-symbols-outlined">sync</span>
          </button>

          <fieldset className={styles.nairaCont}>
            <legend className={`${styles.inputLabel} ${styles.textRightDesktop}`}>
              Naira Equivalent
            </legend>
            <span className={styles.inputDecoratorWrapper}>
              <span className={`${styles.currencySymbol} ${styles.ngnColor}`}>₦</span>
              <output className={styles.nairaOutput}>{nairaOutput}</output>
            </span>
          </fieldset>
        </form>
      </article>
    </section>
  );
}
