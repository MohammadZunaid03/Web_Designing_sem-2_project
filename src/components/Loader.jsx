import styles from './Loader.module.css'

function Loader() {
  return (
    <div className={`glass-card ${styles.box}`}>
      <div className={styles.spinner} aria-label="Loading" />
      <p className={styles.text}>Fetching weather data…</p>
    </div>
  )
}

export default Loader
