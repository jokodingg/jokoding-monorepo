// src/App.jsx
// Router dipasang di entry-client (BrowserRouter) dan entry-server (StaticRouter).
import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import BlogIndex from './pages/BlogIndex';
import BlogPost from './pages/BlogPost';
import ServiceLanding from './pages/ServiceLanding';
import { LANDINGS } from './landing/landings';
import { OrderFormProvider } from './order/OrderFormProvider';
import MetaPixelTracker from './lib/MetaPixelTracker';

// Pindah halaman mulai dari atas, kecuali tujuan punya hash (#services dan sejenisnya).
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (!hash) window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  return (
    <OrderFormProvider>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {LANDINGS.map((l) => (
          <Route key={l.path} path={l.path} element={<ServiceLanding landing={l} />} />
        ))}
        <Route path="/blog" element={<BlogIndex />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
      </Routes>
      <Footer />
      <Analytics />
      <MetaPixelTracker />
    </OrderFormProvider>
  )
}

export default App;
