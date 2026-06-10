const KEY = 'skypulse_recent';

export function loadRecent() {
  try { return JSON.parse(localStorage.getItem(KEY) || '[]'); }
  catch { return []; }
}

export function saveRecent(city) {
  const prev = loadRecent().filter(c => c.toLowerCase() !== city.toLowerCase());
  localStorage.setItem(KEY, JSON.stringify([city, ...prev].slice(0, 5)));
}

export function clearRecent() {
  localStorage.removeItem(KEY);
}
