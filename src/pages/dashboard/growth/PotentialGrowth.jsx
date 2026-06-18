import { useState, useMemo } from "react";
import styles from "./PotentialGrowth.module.css";

const BASE_WEALTH = 124500;
const APY = 0.145;
const BAR_OPACITIES = [0.1, 0.15, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 1.0];

export default function PotentialGrowth() {
  const [commitAmount, setCommitAmount] = useState(1000);

  const handleCommitChange = (e) => {
    const rawValue = e.target.value;
    const value = parseFloat(rawValue);

    if (!rawValue || isNaN(value) || value <= 0) {
      setCommitAmount(0);
      return;
    }

    setCommitAmount(value);
  };

  const isValidAmount = commitAmount > 0;

  const projectedTotal = useMemo(() => {
    if (!isValidAmount) {
      return BASE_WEALTH;
    }

    return BASE_WEALTH + commitAmount * 12 * (1 + APY / 2);
  }, [commitAmount, isValidAmount]);

  const projectedDisplay = isValidAmount
    ? `${Math.round(projectedTotal).toLocaleString()}`
    : "Enter an amount to see your savings grow";

  return (
    <section className={styles.container}>
      <header className={styles.headerRow}>
        <section>
          <h2 id="growth-heading" className={styles.titleText}>
            12M Growth Projection
          </h2>
          <p className={styles.subtitleText}>
            {" "}
            Simulated institutional portfolio performance
          </p>
        </section>
        <section className={styles.rightLabel}>
          <p className={styles.projectedLabel}>PROJECTED TOTAL</p>
          <p className={styles.projectedValue}>{projectedDisplay}</p>
        </section>
      </header>
      <section className={styles.inputSection}>
        <label htmlFor="commit-input" className={styles.commitLabel}>
          COMMIT MONTHLY AMOUNT (USD)
        </label>
        <input
          type="number"
          id="commit-input"
          className={styles.inputField}
          value={commitAmount === 0 ? "" : commitAmount}
          onChange={handleCommitChange}
          placeholder="0"
          step="100"
          min="0"
        />
        {!isValidAmount && (
          <p className={styles.inputError}>
            Please enter a positive monthly amount
          </p>
        )}
      </section>

      <section
        className={styles.chartContainer}
        aria-label="Growth Projection Chart Graphics"
      >
        {BAR_OPACITIES.map((opacity, idx) => {
          const isLast = idx === BAR_OPACITIES.length - 1;
          const growthFactor = (idx + 1) / BAR_OPACITIES.length;

          const dynamicHeight =
            20 + growthFactor * 80 * (projectedTotal / 250000);
          const heightPercent = Math.min(dynamicHeight, 100);

          const barInLineStyle = {
            height: `${heightPercent}%`,
            backgroundColor: !isLast
              ? `rgba(0, 53, 148, ${opacity})`
              : undefined,
          };

          return (
            <div
              key={idx}
              className={`${styles.chartBar} ${isLast ? styles.chartBarContainerColor : ""}`}
              style={barInLineStyle}
            ></div>
          );
        })}
      </section>
      <footer className={styles.chartFooter}>
        <time datetime="2026-03">MAR 24</time>
        <time datetime="2026-06" className={styles.hiddenOnMobile}>
          JUN 24
        </time>
        <time datetime="2026-09" className={styles.hiddenOnMobile}>
          SEPT 24
        </time>
        <time datetime="2026-12">DEC 24</time>
      </footer>
    </section>
  );
}
