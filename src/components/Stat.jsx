import '../styles/Stat.css'

function Stat({ number, label }) {
  return (
    <div className="stat">
      <span className="stat-number">{number}</span>
      <span className="stat-label">{label}</span>
    </div>
  )
}

export default Stat
