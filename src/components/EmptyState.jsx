import styles from './EmptyState.module.css'

function EmptyState() {
  const tips = ['🗼 Try "Paris"','🏙️ Try "New York"','🌏 Try "Tokyo"','🇮🇳 Try "Mumbai"','🧊 Try "Reykjavik"']
  return (
    <div className={`glass-card ${styles.box}`}>
      <div className={styles.globe}>🌍</div>
      <h2 className={styles.title}>Search any city</h2>
      <p className={styles.sub}>Get live weather, hourly & 7-day forecast</p>
      <div className={styles.tips}>
        {tips.map((t) => <span key={t} className={styles.tip}>{t}</span>)}
      </div>
    </div>
  )
}

export default EmptyState
