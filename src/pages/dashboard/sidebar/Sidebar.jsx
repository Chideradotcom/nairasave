import styles from "./Sidebar.module.css";
import {
  FiGrid,
  FiCreditCard,
  FiTrendingUp,
  FiRefreshCw,
  FiShield,
  FiX
} from "react-icons/fi";

function Sidebar({ open, setOpen }) {
  return (
    <>
      <div
        className={`${styles.overlay}
        ${open ? styles.showOverlay : ""}`}
        onClick={() => setOpen(false)}
      />

      <aside
        className={`${styles.sidebar}
        ${open ? styles.open : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setOpen(false)}
        >
          <FiX />
        </button>

        <div className={styles.logoSection}>
          <h1>NairaSave</h1>
          <span>INSTITUTIONAL GRADE</span>
        </div>

        <nav>
          <div className={`${styles.menuItem} ${styles.active}`}>
            <FiGrid />
            <span>Overview</span>
          </div>

          <div className={styles.menuItem}>
            <FiCreditCard />
            <span>My Savings</span>
          </div>

          <div className={styles.menuItem}>
            <FiTrendingUp />
            <span>Investments</span>
          </div>

          <div className={styles.menuItem}>
            <FiRefreshCw />
            <span>Exchanges</span>
          </div>

          <div className={styles.menuItem}>
            <FiShield />
            <span>Security</span>
          </div>
        </nav>

        <div className={styles.apyCard}>
          <p>CURRENT APY</p>
          <h2>14.50%</h2>
          <span>Compounded Daily</span>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;