//import React from 'react'
import styles from "./reason.module.css"
import chart from "../../assets/chart.png"
import security from "../../assets/security.png"
import shields from "../../assets/shields.png"

const Reason = () => {
  return (
    <div>
        <main className={styles.main}>
			<h1 className={styles.title}>Why choose NairaSave?</h1>
			<p className={styles.para} >We combine the stability of global currency with the convenience of local banking systems.</p>
			<section className={styles.card}>
				<div>
					<img src={shields} alt="icon"  className={styles.icon}/>
					<h2>Inflation Shield</h2>
					<p>Keep your purchasing power intact. By saving in USD, your money grows even when the local currency fluctuates.</p>
				</div>
				<div>
					<img src={chart} alt="icon" className={styles.icons}/>
					<h2>Smart USD Tracker</h2>
					<p>Real-time visibility into your dollar savings value. Watch your portfolio's performance against the parallel market instantly.</p>
				</div>
				<div>
					<img src={security} alt="icon" className={styles.icon}/>
					<h2>Guaranteed Security</h2>
					<p>Enterprise-grade encryption for every kobo. We use institutional protocols to ensure your savings are always protected.</p>
				</div>
			</section>
        </main>
    </div>
  )
}

export default Reason