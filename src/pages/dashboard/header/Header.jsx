import styles from "./Header.module.css";
// import { FiMenu, FiUpload } from "react-icons/fi";

function Header() {
  return (
    <header className={styles.header}>
		<section className={styles.usd}>
			<h4>NET LIQUIDITY &#40;USD&#41;</h4>
			<h2>$124,500.00 <sub className={styles.sub}>+2.4%</sub></h2>
		</section>
		<section className={styles.ngn}>
			<h4>TOTAL EQUIVALENT &#40;NGN&#41; </h4>
			<h2>₦199,200,000 <sub className={styles.sub}>@ 1,600.00</sub></h2>
		</section>
		<section className={styles.reward}>
			<h4>TOTAL SAVINGS REWARD</h4>
			<h2>₦18,450,230</h2>
		</section>
    </header>
  );
}

export default Header;