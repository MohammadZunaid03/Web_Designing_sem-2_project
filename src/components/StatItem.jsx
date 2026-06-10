import styles from './StatItem.module.css'

function StatItem({ icon, label, value }) {
  return (
    <div className={styles.item}>
      <div className={styles.icon} aria-hidden="true">{icon}</div>
      <div className={styles.label}>{label}</div>
      <div className={styles.value}>{value}</div>
    </div>
  )
}

export default StatItem
