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
import { OrderFormProvider } from './order/OrderFormProvider';

function App() {
  return (
    <OrderFormProvider>
      <Navbar />
      <Hero />
      <TechStack />
      <Services />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <Footer />
      <Analytics />
    </OrderFormProvider>
  )
}

export default App;