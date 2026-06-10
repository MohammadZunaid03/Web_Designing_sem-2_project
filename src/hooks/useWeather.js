import { useState, useCallback } from 'react'
import { geocodeCity, fetchWeather } from '../utils/api'
import { saveRecent, loadRecent } from '../utils/localStorage'

function useWeather() {
  const [loading,  setLoading]  = useState(false)
  const [error,    setError]    = useState('')
  const [weather,  setWeather]  = useState(null)
  const [location, setLocation] = useState(null)
  const [recent,   setRecent]   = useState(() => loadRecent())

  const search = useCallback(async (cityName) => {
    const city = cityName.trim()
    if (!city) return

    setLoading(true)
    setError('')
    setWeather(null)
    setLocation(null)

    try {
      const loc  = await geocodeCity(city)       // fetch + async/await (Unit 2)
      const data = await fetchWeather(loc.lat, loc.lon)
      setLocation(loc)
      setWeather(data)
      saveRecent(loc.name)                       // localStorage (Unit 2)
      setRecent(loadRecent())
    } catch (err) {
      setError(err.message || 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }, [])

  return { loading, error, weather, location, recent, search }
}

export default useWeather
