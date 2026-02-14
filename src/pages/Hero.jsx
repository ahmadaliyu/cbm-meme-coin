import Button from '../components/Button'
import '../styles/Hero.css'
// import cbm1 from '../assets/cbom-new.jpeg'
import heroBg from '../assets/hero.jpeg'

function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg-image" style={{ backgroundImage: `url(${heroBg})` }}></div>
      <div className="hero-bg-gradient"></div>
      <div className="hero-content">
        <div className="hero-text">
          <span className="hero-badge">The Future of Meme Finance</span>
          <h1 className="glowing-text">
            Central Bank<br />
            <span className="highlight">Of Meme Coins</span>
          </h1>
          <p className="tagline">Where Memes Become Currency</p>
          <p className="description">
            Join the revolution! CBM is not just a meme coin, it's a movement. 
            Built by the community, for the community.
          </p>
          <div className="hero-buttons">
            <Button href="#how-to-buy" variant="primary">Buy Now</Button>
            <Button href="#tokenomics" variant="secondary">Tokenomics</Button>
          </div>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="stat-value">50K+</span>
              <span className="stat-label">Holders</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">$10M+</span>
              <span className="stat-label">Market Cap</span>
            </div>
            <div className="hero-stat">
              <span className="stat-value">100%</span>
              <span className="stat-label">Community</span>
            </div>
          </div>
        </div>
        {/* <div className="hero-image">
          <div className="image-glow"></div>
          <img src={cbm1} alt="CBM Coin" className="floating" />
        </div> */}
      </div>
      <div className="scroll-indicator">
        <span>Scroll to explore</span>
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
