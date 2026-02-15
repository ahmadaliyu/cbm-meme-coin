import { FaXTwitter, FaTelegram } from 'react-icons/fa6'
import SocialButton from '../components/SocialButton'
import '../styles/Community.css'

function Community() {
  return (
    <section id="community" className="community">
      <div className="container">
        <h2>Join the CBM Community</h2>
        <p>Be part of the most based community in crypto!</p>
        <div className="social-links">
          <SocialButton href="https://x.com/CntrlBankofMeme" platform="twitter">
            <FaXTwitter /> Twitter
          </SocialButton>
          <SocialButton href="https://x.com/CntrlBankofMeme" platform="telegram">
            <FaTelegram /> Telegram
          </SocialButton>
        </div>
      </div>
    </section>
  )
}

export default Community
