import { Link } from 'react-router-dom';
import herobg from "../../assets/unnamed.jpg"
import styles from "../hero/Hero.module.css"

const Hero = () => {
  return (
    <section className={styles.head}>
        <header className={styles.text}>
            <section className={styles.top_text}>
                <h1>Save in <span className={styles.dollars}>Dollars</span>, Track in <span className={styles.dollars}>Naira</span>.</h1>
                <p>Protect your wealth from inflation with automated USD savings. Secure your future with institutional-grade technology.</p>
            </section>
            <form>
                <input 
                    type="text" 
                    name="email" 
                    className={styles.input}
                    placeholder="Enter your email address"
                    required
                />
                <button className={styles.btn} type="submit">
                    Notify Me
                </button>
            </form>
            <div style={{ marginTop: '20px' }}>
                <Link to="/dashboard" className={styles.dashboardBtn}>
                    Go to Dashboard &rarr;
                </Link>
            </div>
            <div className={styles.views}>
                <span className={styles.circle}></span>
                <span  className={styles.circl}></span>
                <span  className={styles.circ}></span>
                <span className={styles.views_txt}>Joined by 10k+ Nigerians</span>
            </div>
        </header>
        <main>
            <img src={herobg} alt="" />
        </main>
    </section>
  )
}

export default Hero