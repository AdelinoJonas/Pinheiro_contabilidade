import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Customers } from '../pages/Customers';
import { News } from '../pages/News';
import { Contact } from '../pages/Contact';
import { AnimatePresence } from 'framer-motion';

export function MyRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/customers" element={<Customers />} />
        <Route path="/news" element={<News />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}
