import { getWeatherEmoji, getWeatherDesc } from '../utils/weatherHelpers'
import StatItem from './StatItem'
import styles from './WeatherCard.module.css'

function WeatherCard({ weather, location }) {
  const cur   = weather.current
  const daily = weather.daily

  const fmtTime = (iso) =>
    new Date(iso).toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })

  const stats = [
    { icon:'💧', label:'Humidity',  value:`${cur.relative_humidity_2m}%` },
    { icon:'💨', label:'Wind',      value:`${Math.round(cur.wind_speed_10m)} km/h` },
    { icon:'🌡️', label:'Max / Min', value:`${Math.round(daily.temperature_2m_max[0])}° / ${Math.round(daily.temperature_2m_min[0])}°` },
    { icon:'🌧️', label:'Rain',      value:`${cur.precipitation} mm` },
    { icon:'🔆',  label:'UV Index', value:Math.round(daily.uv_index_max[0]) },
    { icon:'🌅', label:'Sunrise',   value:fmtTime(daily.sunrise[0]) },
    { icon:'🌇', label:'Sunset',    value:fmtTime(daily.sunset[0]) },
    { icon:'📊', label:'Pressure',  value:`${Math.round(cur.surface_pressure)} hPa` },
  ]

  return (
    <div className={`glass-card ${styles.card}`}>
      <div className={styles.top}>
        <div className={styles.info}>
          <div className={styles.loc}>📍 {location.name}, {location.country}</div>
          <div className={styles.desc}>{getWeatherDesc(cur.weather_code)}</div>
          <div className={styles.temp}>
            {Math.round(cur.temperature_2m)}<span className={styles.unit}>°C</span>
          </div>
          <div className={styles.feels}>Feels like {Math.round(cur.apparent_temperature)}°C</div>
        </div>
        <div className={styles.emoji} aria-label={getWeatherDesc(cur.weather_code)}>
          {getWeatherEmoji(cur.weather_code)}
        </div>
      </div>

      <div className={styles.statsGrid}>
        {stats.map((s) => (
          <StatItem key={s.label} icon={s.icon} label={s.label} value={s.value} />
        ))}
      </div>
    </div>
  )
}

export default WeatherCard
