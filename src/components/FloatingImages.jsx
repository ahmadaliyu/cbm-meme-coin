import { useState, useEffect } from 'react'
import '../styles/FloatingImages.css'
import cbm1 from '../assets/cbm-1.jpeg'
import cbm2 from '../assets/cbm-2.jpeg'
import img1 from '../assets/WhatsApp Image 2026-02-05 at 19.02.31 (1).jpeg'
import img2 from '../assets/WhatsApp Image 2026-02-05 at 19.02.32.jpeg'
import img3 from '../assets/WhatsApp Image 2026-02-05 at 19.02.33.jpeg'
import pengu from '../assets/pengu.jpeg'
import penguDog from '../assets/pengu-dog.jpeg'
import dog from '../assets/dog.jpeg'

const allImages = [cbm1, cbm2, img1, img2, img3, pengu, penguDog, dog]

function FloatingImages() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const createParticle = () => {
      const id = Date.now() + Math.random()
      const randomImage = allImages[Math.floor(Math.random() * allImages.length)]
      
      // Random start position anywhere on screen
      const startX = Math.random() * 100
      const startY = Math.random() * 100
      
      // Random direction to move outward
      const angle = Math.random() * Math.PI * 2
      const distance = 150 + Math.random() * 300
      const endX = Math.cos(angle) * distance
      const endY = Math.sin(angle) * distance
      
      const duration = 4 + Math.random() * 4
      const size = 70 + Math.random() * 50

      const particle = {
        id,
        src: randomImage,
        startX,
        startY,
        endX,
        endY,
        duration,
        size,
      }

      setParticles(prev => [...prev, particle])

      setTimeout(() => {
        setParticles(prev => prev.filter(p => p.id !== id))
      }, duration * 1000)
    }

    // Create initial particles
    for (let i = 0; i < 8; i++) {
      setTimeout(() => createParticle(), i * 300)
    }

    // Keep creating particles
    const interval = setInterval(() => {
      createParticle()
    }, 800)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="floating-images">
      {particles.map(particle => (
        <img
          key={particle.id}
          src={particle.src}
          alt="CBM"
          className="floating-particle"
          style={{
            '--startX': `${particle.startX}%`,
            '--startY': `${particle.startY}%`,
            '--endX': `${particle.endX}px`,
            '--endY': `${particle.endY}px`,
            '--duration': `${particle.duration}s`,
            '--size': `${particle.size}px`,
          }}
        />
      ))}
    </div>
  )
}

export default FloatingImages
