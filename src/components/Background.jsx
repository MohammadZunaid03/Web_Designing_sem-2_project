import styles from './Background.module.css'

function Background() {
  return (
    <div className={styles.bg} aria-hidden="true">
      <div className={`${styles.blob} ${styles.blob1}`} />
      <div className={`${styles.blob} ${styles.blob2}`} />
      <div className={`${styles.blob} ${styles.blob3}`} />
    </div>
  )
}

export default Background
