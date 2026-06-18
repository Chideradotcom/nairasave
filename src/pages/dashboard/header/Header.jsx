import styles from "./Header.module.css";
import { FiMenu, FiUpload } from "react-icons/fi";

function Header({ setOpen }) {
  return (
    <header className={styles.header}>
      <div className={styles.left}>
        <button
          className={styles.menuBtn}
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>

        <div>
          <h1>Institutional Dashboard</h1>

          <div className={styles.badge}>
            VERIFIED SECURE
          </div>
        </div>
      </div>

      <div className={styles.right}>
        <button className={styles.reportBtn}>
          <FiUpload />
          Report
        </button>

        <div className={styles.avatar}>
          JD
        </div>
      </div>
    </header>
  );
}

export default Header;