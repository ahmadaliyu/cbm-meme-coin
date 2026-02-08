import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../styles/Navbar.css'
import logo from '../assets/cbm-2.jpeg'
import ThemeToggle from '../components/ThemeToggle'
import { FaBars, FaTimes } from 'react-icons/fa'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'tokenomics', label: 'Tokenomics' },
    { id: 'how-to-buy', label: 'How to Buy' },
    { id: 'community', label: 'Community' },
  ]

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => scrollToSection('hero')}>
        <img src={logo} alt="CBM Logo" className="logo-img" />
        <span className="logo-text">CBM</span>
      </Link>
      
      <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        {navItems.map((item) => (
          <li key={item.id}>
            <button 
              className="nav-link"
              onClick={() => scrollToSection(item.id)}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      <div className="nav-actions">
        <ThemeToggle />
        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar
