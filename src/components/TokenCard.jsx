import '../styles/TokenCard.css'

function TokenCard({ icon, title, value }) {
  return (
    <div className="token-card">
      <div className="token-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{value}</p>
    </div>
  )
}

export default TokenCard
