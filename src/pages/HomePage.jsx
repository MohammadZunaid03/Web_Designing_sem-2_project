import { useEffect } from 'react'
import SearchBar       from '../components/SearchBar'
import WeatherCard     from '../components/WeatherCard'
import HourlyForecast  from '../components/HourlyForecast'
import WeeklyForecast  from '../components/WeeklyForecast'
import Loader          from '../components/Loader'
import ErrorMessage    from '../components/ErrorMessage'
import EmptyState      from '../components/EmptyState'
import Footer          from '../components/Footer'
import useWeather      from '../hooks/useWeather'
import { loadRecent }  from '../utils/localStorage'

function HomePage() {
  const { loading, error, weather, location, recent, search } = useWeather()

  // useEffect — auto-load last searched city on mount (Unit 3)
  useEffect(() => {
    const last = loadRecent()[0]
    if (last) search(last)
  }, []) // eslint-disable-line

  return (
    <main>
      <SearchBar onSearch={search} recent={recent} loading={loading} />

      {error   && <ErrorMessage message={error} />}
      {loading && <Loader />}

      {!loading && !weather && !error && <EmptyState />}

      {!loading && weather && location && (
        <>
          <WeatherCard    weather={weather} location={location} />
          <HourlyForecast weather={weather} />
          <WeeklyForecast weather={weather} />
        </>
      )}

      <Footer />
    </main>
  )
}

export default HomePage
