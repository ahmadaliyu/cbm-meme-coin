import '../styles/FloatingImages.css'
import cbm1 from '../assets/cbm-1.jpeg'
import cbm2 from '../assets/cbm-2.jpeg'
import img1 from '../assets/WhatsApp Image 2026-02-05 at 19.02.31 (1).jpeg'
import img2 from '../assets/WhatsApp Image 2026-02-05 at 19.02.32.jpeg'
import img3 from '../assets/WhatsApp Image 2026-02-05 at 19.02.33.jpeg'
import pengu from '../assets/pengu.jpeg'
import penguDog from '../assets/pengu-dog.jpeg'
import dog from '../assets/dog.jpeg'

function FloatingImages() {
  const images = [
    { src: cbm1, className: 'float-1' },
    { src: cbm2, className: 'float-2' },
    { src: img1, className: 'float-3' },
    { src: img2, className: 'float-4' },
    { src: img3, className: 'float-5' },
    { src: pengu, className: 'float-6' },
    { src: penguDog, className: 'float-7' },
    { src: dog, className: 'float-8' },
  ]

  return (
    <div className="floating-images">
      {images.map((img, index) => (
        <img 
          key={index}
          src={img.src}
          alt={`CBM ${index + 1}`}
          className={`floating-img ${img.className}`}
        />
      ))}
    </div>
  )
}

export default FloatingImages
