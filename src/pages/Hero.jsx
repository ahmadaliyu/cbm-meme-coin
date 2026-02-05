import Button from '../components/Button'
import '../styles/Hero.css'
import cbm1 from '../assets/cbm-1.jpeg'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="glowing-text">$CBM</h1>
          <p className="tagline">The Most Based Meme Coin on the Block 🚀</p>
          <p className="description">
            Join the revolution! CBM is not just a meme coin, it's a movement. 
            Built by the community, for the community.
          </p>
          <div className="hero-buttons">
            <Button href="#how-to-buy" variant="primary">Buy $CBM</Button>
            <Button href="#" variant="secondary">View Chart</Button>
          </div>
        </div>
        <div className="hero-image">
          <img src={cbm1} alt="CBM Coin" className="floating" />
        </div>
      </div>
    </section>
  )
}

export default Hero
