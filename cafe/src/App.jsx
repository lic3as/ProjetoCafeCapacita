import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import NotFound from './components/NotFound';
import About from './components/About';
import Menu from './components/Menu';
import Hero from './components/Hero';
import OrderPage from './components/OrderPage';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" index element={<Hero />} />
          <Route path="/sobre-nos" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/pedidos" element={<OrderPage />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/contato" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
