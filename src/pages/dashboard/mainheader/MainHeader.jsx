import styles from "./MainHeader.module.css";
import { FiMenu, FiUpload } from "react-icons/fi";

function MainHeader({ setOpen }) {
  return (
    <header className={styles.header}>
      <section className={styles.left}>
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <FiMenu />
        </button>

        <section className={styles.brand}>
          <h1>Institutional Dashboard</h1>
          <p className={styles.badge}>VERIFIED SECURE</p>
        </section>
      </section>

      <section className={styles.right}>
        <button className={styles.reportBtn}>
          <FiUpload />
          Report
        </button>

        <section className={styles.avatar} aria-label="User initials">
          JD
        </section>
      </section>
    </header>
  );
}

export default MainHeader;