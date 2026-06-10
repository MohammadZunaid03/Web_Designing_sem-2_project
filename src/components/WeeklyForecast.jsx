import { getWeatherEmoji, getWeatherDesc, getDayName } from '../utils/weatherHelpers'
import styles from './WeeklyForecast.module.css'

// Child component — each day card (props usage, Unit 3)
function ForecastDay({ day, emoji, desc, high, low, rain, isToday }) {
  return (
    <div className={`${styles.day} ${isToday ? styles.today : ''}`}>
      <div className={styles.dayName}>{day}</div>
      <div className={styles.emoji}>{emoji}</div>
      <div className={styles.desc}>{desc}</div>
      <div className={styles.high}>{high}°</div>
      <div className={styles.low}>{low}°</div>
      {rain > 0 && <div className={styles.rain}>💧{rain.toFixed(1)} mm</div>}
    </div>
  )
}

function WeeklyForecast({ weather }) {
  const { time, weather_code, temperature_2m_max, temperature_2m_min, precipitation_sum } = weather.daily

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className="section-title">📅 7-Day Forecast</div>
      <div className={styles.grid}>
        {time.map((date, i) => (
          <ForecastDay
            key={date}
            day={getDayName(date, i)}
            emoji={getWeatherEmoji(weather_code[i])}
            desc={getWeatherDesc(weather_code[i])}
            high={Math.round(temperature_2m_max[i])}
            low={Math.round(temperature_2m_min[i])}
            rain={precipitation_sum[i]}
            isToday={i === 0}
          />
        ))}
      </div>
    </div>
  )
}

export default WeeklyForecast
