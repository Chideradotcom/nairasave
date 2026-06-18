 
import { useEffect, useState } from "react";
import styles from "./AssetLedger.module.css";

const initialAssets = [
  {
    id: "US-TREAS-INST-001",
    holding: "$85,000.00",
    equivalent: "₦136,000,000",
    risk: "LOW",
    status: "Active Yielding",
  },
  {
    id: "NG-BONDS-SOV-042",
    holding: "₦42,500,000",
    equivalent: "₦42,500,000",
    risk: "LOW",
    status: "Active Yielding",
  },
  {
    id: "STABLE-FLEX-PORTFOLIO",
    holding: "$39,500.00",
    equivalent: "₦63,200,000",
    risk: "MID",
    status: "Vesting (48h)",
  },
];

export default function AssetLedger() {
  const [assets, setAssets] = useState(initialAssets);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAssets((currentAssets) => [
        ...currentAssets,
        {
          id: "NG-FIXED-081",
          holding: "₦18,000,000",
          equivalent: "₦18,000,000",
          risk: "LOW",
          status: "Active Yielding",
        },
      ]);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.ledger}>
      <header className={styles.header}>
        <h2>Asset Allocation Ledger</h2>

        <nav className={styles.legend}>
          <p>
            <span className={styles.blue} /> USD Treasury
          </p>
          <p>
            <span className={styles.green} /> NGN Fixed
          </p>
        </nav>
      </header>

      <div className={styles.tableContainer}>
        <table className={styles.table}>
          <thead className={styles.thead}>
          <tr>
            <th>ASSET IDENTIFIER</th>
            <th>CURRENT HOLDING</th>
            <th>EQUIVALENT (NGN)</th>
            <th>RISK LEVEL</th>
            <th>STATUS</th>
          </tr>
          </thead>
          <tbody className={styles.tbody}>
          {assets.map((asset) => (
            <tr key={asset.id}>
              <td className={styles.assetId}>{asset.id}</td>
              <td>{asset.holding}</td>
              <td>{asset.equivalent}</td>
              <td>
                <span className={`${styles.risk} ${styles[asset.risk.toLowerCase()]}`}>
                  {asset.risk}
                </span>
              </td>
              <td>
                <span className={styles.status}>
                  {asset.status === "Active Yielding" ? (
                    <span className={styles.statusDot} />
                  ) : (
                    <span className={styles.statusLock}>🔒</span>
                  )}
                  {asset.status}
                </span>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
