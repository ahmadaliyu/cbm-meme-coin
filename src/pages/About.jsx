import Stat from '../components/Stat'
import '../styles/About.css'
import cbm2 from '../assets/cbm-2.jpeg'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2>About $CBM</h2>
        <div className="about-content">
          <div className="about-image">
            <img src={cbm2} alt="CBM Community" />
          </div>
          <div className="about-text">
            <p>
              CBM started as a meme but quickly evolved into one of the most 
              vibrant communities in crypto. Our mission is simple: bring fun 
              back to crypto while building real value for our holders.
            </p>
            <p>
              With a dedicated team and passionate community, CBM is set to 
              take over the meme coin space. Don't miss out on the next big thing!
            </p>
            <div className="stats">
              <Stat number="10K+" label="Holders" />
              <Stat number="$1M+" label="Market Cap" />
              <Stat number="100%" label="Community Owned" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
