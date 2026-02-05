import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">$CBM</div>
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
