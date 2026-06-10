import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Weather Forecast System</h1>
      <p className={styles.tagline}>Web Designing Workshop - II</p>
      <p className={styles.tagline}>Semester II Project</p>
      <p className={styles.tagline}>Mohammad Zunaid | CSE-27</p>
      <p className={styles.tagline}>Roll No: 2503201000719</p>
      <p className={styles.tagline}>Admission No: 2025B01010245</p>
    </header>
  )
}
export default Header
