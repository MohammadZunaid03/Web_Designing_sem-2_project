import Background from './components/Background'
import Header     from './components/Header'
import HomePage   from './pages/HomePage'
import './App.css'

function App() {
  return (
    <>
      <Background />
      <div className="app-wrapper">
        <Header />
        <HomePage />
      </div>
    </>
  )
}

export default App
