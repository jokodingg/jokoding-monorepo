// src/App.jsx
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Services from './components/Services';
import Portfolio from './components/Portofolio';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
      <Analytics />
    </>
  )
}

export default App;