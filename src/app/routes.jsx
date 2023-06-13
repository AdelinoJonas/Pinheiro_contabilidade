import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { Home } from '../pages/Home';
import { About } from '../pages/About';
import { Services } from '../pages/Services';
import { Customers } from '../pages/Customers';
import { News } from '../pages/News';
import { Contact } from '../pages/Contact';
import { Links } from '../pages/Links';

export function MyRoutes() {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/customers" element={<Customers />} />
      <Route path="/links" element={<Links />} />
      <Route path="/news" element={<News />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
