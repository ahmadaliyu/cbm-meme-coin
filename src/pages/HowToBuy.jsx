import Step from '../components/Step'
import '../styles/HowToBuy.css'

function HowToBuy() {
  const steps = [
    {
      number: 1,
      title: 'Create a Wallet',
      description: 'Download Phantom or any Solana-compatible wallet from the app store or as a browser extension.'
    },
    {
      number: 2,
      title: 'Get Some SOL',
      description: 'Buy SOL from an exchange and send it to your wallet address.'
    },
    {
      number: 3,
      title: 'Go to Raydium',
      description: 'Connect your wallet to Raydium or Jupiter and paste the CBM contract address.'
    },
    {
      number: 4,
      title: 'Swap for CBM',
      description: 'Swap your SOL for CBM and join the community!'
    },
  ]

  const contractAddress = 'COMING SOON...'

  const copyToClipboard = () => {
    navigator.clipboard.writeText(contractAddress)
  }

  return (
    <section id="how-to-buy" className="how-to-buy">
      <div className="container">
        <h2>How to Buy CBM</h2>
        <div className="steps">
          {steps.map((step) => (
            <Step 
              key={step.number}
              number={step.number}
              title={step.title}
              description={step.description}
            />
          ))}
        </div>
        <div className="contract-address">
          <h3>Contract Address</h3>
          <div className="address-box">
            <code>{contractAddress}</code>
            <button onClick={copyToClipboard}>📋 Copy</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowToBuy
