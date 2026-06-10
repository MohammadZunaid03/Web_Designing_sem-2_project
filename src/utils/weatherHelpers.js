export function getWeatherEmoji(code) {
  if (code === 0)  return '☀️';
  if (code <= 2)   return '⛅';
  if (code <= 3)   return '☁️';
  if (code <= 49)  return '🌫️';
  if (code <= 59)  return '🌦️';
  if (code <= 69)  return '🌧️';
  if (code <= 79)  return '❄️';
  if (code <= 82)  return '🌧️';
  if (code <= 84)  return '🌨️';
  if (code <= 94)  return '⛈️';
  return '🌩️';
}

export function getWeatherDesc(code) {
  if (code === 0)  return 'Clear Sky';
  if (code <= 2)   return 'Partly Cloudy';
  if (code <= 3)   return 'Overcast';
  if (code <= 49)  return 'Foggy';
  if (code <= 59)  return 'Drizzle';
  if (code <= 69)  return 'Rain Showers';
  if (code <= 79)  return 'Snowfall';
  if (code <= 82)  return 'Rain Showers';
  if (code <= 84)  return 'Snow Showers';
  if (code <= 94)  return 'Thunderstorm';
  return 'Heavy Thunderstorm';
}

export function getDayName(dateStr, idx) {
  if (idx === 0) return 'Today';
  if (idx === 1) return 'Tomorrow';
  return new Date(dateStr).toLocaleDateString('en-US', { weekday: 'short' });
}

export function formatHour(isoStr) {
  const h = new Date(isoStr).getHours();
  if (h === 0)  return '12am';
  if (h === 12) return '12pm';
  return h < 12 ? `${h}am` : `${h - 12}pm`;
}
