import { useState } from 'react'
import styles from './SearchBar.module.css'

function SearchBar({ onSearch, recent, loading }) {
  const [query, setQuery] = useState('')

  const handleSearch = () => { if (query.trim()) onSearch(query.trim()) }
  const handleKey    = (e) => { if (e.key === 'Enter') handleSearch() }
  const handleTag    = (city) => { setQuery(city); onSearch(city) }

  return (
    <div className={styles.wrapper}>
      <div className={styles.row}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search city… e.g. Mumbai, London, Tokyo"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKey}
          disabled={loading}
          aria-label="City search"
        />
        <button
          className={styles.btn}
          onClick={handleSearch}
          disabled={loading || !query.trim()}
        >
          {loading ? <span className={styles.spinner} /> : '🔍 Search'}
        </button>
      </div>

      {recent.length > 0 && (
        <div className={styles.recentRow}>
          <span className={styles.recentLabel}>Recent:</span>
          {recent.map((city) => (
            <button key={city} className={styles.tag} onClick={() => handleTag(city)}>
              {city}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchBar
