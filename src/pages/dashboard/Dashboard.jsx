import { useState } from "react";

import Sidebar from "./sidebar/Sidebar";
import ActualHeader from "./actualheader/ActualHeader";
import Header from "./header/Header";
import NairaConversion from "./conversion/NairaConversion";
import PotentialGrowth from "./growth/PotentialGrowth";
import AssetLedger from "./ledger/AssetLedger";

import styles from "./Dashboard.module.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className={styles.dashboardContainer}>
      <Sidebar
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />

      <main className={styles.mainContent}>
        <ActualHeader setOpen={setSidebarOpen} />
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