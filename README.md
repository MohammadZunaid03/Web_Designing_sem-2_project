# ⛅ SkyPulse — Weather App (Vite + React)


## 📁 Project Structure

```
skypulse-vite/
├── index.html                      ← Vite HTML entry point
├── vite.config.js
└── src/
    ├── main.jsx                    ← ReactDOM entry
    ├── App.jsx + App.css           ← Root component
    ├── index.css                   ← Global styles, CSS vars, animations
    │
    ├── components/                 ← 10 reusable components (Unit 3)
    │   ├── Background.jsx/.module.css
    │   ├── Header.jsx/.module.css
    │   ├── SearchBar.jsx/.module.css
    │   ├── WeatherCard.jsx/.module.css
    │   ├── StatItem.jsx/.module.css
    │   ├── HourlyForecast.jsx/.module.css
    │   ├── WeeklyForecast.jsx/.module.css
    │   ├── Loader.jsx/.module.css
    │   ├── ErrorMessage.jsx/.module.css
    │   ├── EmptyState.jsx/.module.css
    │   └── Footer.jsx/.module.css
    │
    ├── hooks/                      ← Custom React hooks (Unit 3)
    │   ├── useWeather.js           ← All fetch + state logic
    │   └── useLocalStorage.js
    │
    ├── pages/
    │   └── HomePage.jsx            ← Main page component
    │
    └── utils/                      ← Pure JS helpers (Unit 2)
        ├── api.js                  ← fetch, async/await, JSON
        ├── weatherHelpers.js       ← emoji + descriptions
        └── localStorage.js         ← save/load recent cities
```

## 📚 Syllabus Coverage

| Unit | What's Used |
|------|------------|
| **Unit 1 — CSS** | CSS variables, gradients, keyframe animations, responsive grid, glassmorphism, CSS Modules |
| **Unit 2 — JS APIs** | fetch(), async/await, JSON, try/catch, localStorage, arrow functions, map/filter |
| **Unit 3 — React** | Functional components (.jsx), useState, useEffect, useCallback, custom hooks, props, conditional rendering |
| **HTML** | Semantic tags, aria-label, accessible markup |

## 🌐 API Used

[Open-Meteo](https://open-meteo.com/) — completely free, 

## Other Commands

```bash
npm run build    # production build
npm run preview  # preview production build
```


## Student Information

Name: Mohammad Zunaid
Class: CSE-27
Roll No: 2503201000719
Admission No: 2025B01010245

Course: Web Designing Workshop-II
Semester: II

This project was developed as part of the Web Designing Workshop-II practical work. The application provides weather information, recent search history and forecast details through a simple and user-friendly interface.
