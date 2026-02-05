import TokenCard from '../components/TokenCard'
import '../styles/Tokenomics.css'

function Tokenomics() {
  const tokenData = [
    { icon: '💰', title: 'Total Supply', value: '1,000,000,000 CBM' },
    { icon: '🔥', title: 'Burned', value: '50% at Launch' },
    { icon: '💧', title: 'Liquidity', value: '40% Locked' },
    { icon: '🎁', title: 'Marketing', value: '10% for Growth' },
  ]

  return (
    <section id="tokenomics" className="tokenomics">
      <div className="container">
        <h2>Tokenomics</h2>
        <div className="tokenomics-grid">
          {tokenData.map((token, index) => (
            <TokenCard 
              key={index}
              icon={token.icon}
              title={token.title}
              value={token.value}
            />
          ))}
        </div>
        <div className="tax-info">
          <h3>Transaction Tax: 0%</h3>
          <p>No buy or sell tax! What you see is what you get.</p>
        </div>
      </div>
    </section>
  )
}

export default Tokenomics
