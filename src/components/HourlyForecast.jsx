import { getWeatherEmoji, formatHour } from '../utils/weatherHelpers'
import styles from './HourlyForecast.module.css'

function HourlyForecast({ weather }) {
  const { time, temperature_2m, weather_code, precipitation_probability } = weather.hourly

  const now      = new Date()
  const todayPfx = now.toISOString().slice(0, 10)
  const startIdx = time.findIndex(
    (t) => t.startsWith(todayPfx) && parseInt(t.slice(11, 13)) >= now.getHours()
  )

  const items = time.slice(startIdx, startIdx + 13).map((t, i) => ({
    timeLabel: i === 0 ? 'Now' : formatHour(t),
    temp:  Math.round(temperature_2m[startIdx + i]),
    emoji: getWeatherEmoji(weather_code[startIdx + i]),
    rain:  precipitation_probability[startIdx + i],
    isNow: i === 0,
  }))

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className="section-title">⏰ Hourly Forecast</div>
      <div className={styles.scroll}>
        {items.map((item, idx) => (
          <div key={idx} className={`${styles.item} ${item.isNow ? styles.now : ''}`}>
            <div className={styles.time}>{item.timeLabel}</div>
            <div className={styles.emoji}>{item.emoji}</div>
            <div className={styles.temp}>{item.temp}°</div>
            {item.rain > 0 && <div className={styles.rain}>💧{item.rain}%</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default HourlyForecast
