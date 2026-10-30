// src/App.jsx
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Pricing from './components/Pricing';
import Portfolio from './components/Portofolio';
import Testimonials from './components/Testimonials';
import About from './components/About';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Pricing />
      <Portfolio />
      <Testimonials />
      <About />
      <FAQ />
      <Footer />
    </>
  )
}

export default App;