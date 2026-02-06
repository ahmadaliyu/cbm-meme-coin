import { FaXTwitter, FaTelegram, FaDiscord } from 'react-icons/fa6'
import SocialButton from '../components/SocialButton'
import '../styles/Community.css'

function Community() {
  return (
    <section id="community" className="community">
      <div className="container">
        <h2>Join the CBM Community</h2>
        <p>Be part of the most based community in crypto!</p>
        <div className="social-links">
          <SocialButton href="#" platform="twitter">
            <FaXTwitter /> Twitter
          </SocialButton>
          <SocialButton href="#" platform="telegram">
            <FaTelegram /> Telegram
          </SocialButton>
          <SocialButton href="#" platform="discord">
            <FaDiscord /> Discord
          </SocialButton>
        </div>
      </div>
    </section>
  )
}

export default Community
