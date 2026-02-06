import '../styles/Footer.css'
import logo from '../assets/cbm-2.jpeg'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={logo} alt="CBM Logo" className="footer-logo-img" />
          </div>
          <p>© 2026 Central Bank Of Meme Coins. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
