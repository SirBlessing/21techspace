import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import TrustBar from './components/TrustBar.jsx'
import Services from './components/Services.jsx'
import HowItWorks from './components/HowItWorks.jsx'
import About from './components/About.jsx'
import Portfolio from './components/Portfolio.jsx'
import ContactPanel from './components/ContactPanel.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <HowItWorks />
        <About />
        <Portfolio />
        <ContactPanel />
      </main>
      <Footer />
    </>
  )
}

export default App