import '../styles/Navbar.css'
import logo from '../assets/cbm-2.jpeg'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="CBM Logo" className="logo-img" />
      </div>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#tokenomics">Tokenomics</a></li>
        <li><a href="#how-to-buy">How to Buy</a></li>
        <li><a href="#community">Community</a></li>
      </ul>
    </nav>
  )
}

export default Navbar
