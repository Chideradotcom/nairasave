 
import Sidebar from "./sidebar/Sidebar";
import Header from "./header/Header";
import NairaConversion from "./conversion/NairaConversion";
import PotentialGrowth from "./growth/PotentialGrowth";
import AssetLedger from "./ledger/AssetLedger";
import styles from "./Dashboard.module.css";

export default function Dashboard() {
  return (
    <div className={styles.dashboardContainer}>
      <Sidebar />
      <main className={styles.mainContent}>
        <Header />
        <div className={styles.gridContainer}>
          <PotentialGrowth />
          <NairaConversion />
        </div>
        <AssetLedger />
      </main>
    </div>
  );
}
