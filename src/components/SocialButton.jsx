import '../styles/SocialButton.css'

function SocialButton({ children, href, platform }) {
  return (
    <a href={href} className={`social-btn ${platform}`}>
      {children}
    </a>
  )
}

export default SocialButton
