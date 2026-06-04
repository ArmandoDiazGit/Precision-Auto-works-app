import Nav from './components/Nav'
import Hero from './components/Hero'
import Services from './components/Services'
import TrustBadges from './components/TrustBadges'
import ServiceForm from './components/ServiceForm'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Services />
        <TrustBadges />
        <ServiceForm />
      </main>
      <Footer />
    </>
  )
}

export default App
