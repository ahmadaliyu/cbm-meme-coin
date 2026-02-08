import './styles/global.css'
import { ThemeProvider } from './context/ThemeContext'
import Navbar from './layouts/Navbar'
import Footer from './layouts/Footer'
import Hero from './pages/Hero'
import About from './pages/About'
import Tokenomics from './pages/Tokenomics'
import HowToBuy from './pages/HowToBuy'
import Community from './pages/Community'
import FloatingImages from './components/FloatingImages'

function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <FloatingImages />
        <Navbar />
        <Hero />
        <About />
        <Tokenomics />
        <HowToBuy />
        <Community />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App
