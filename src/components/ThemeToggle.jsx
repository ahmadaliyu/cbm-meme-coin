import { useTheme } from '../context/ThemeContext'
import { FaSun, FaMoon } from 'react-icons/fa'
import '../styles/ThemeToggle.css'

function ThemeToggle() {
  const { isDarkMode, toggleTheme } = useTheme()

  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {isDarkMode ? <FaSun /> : <FaMoon />}
    </button>
  )
}

export default ThemeToggle
