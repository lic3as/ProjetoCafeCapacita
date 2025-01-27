import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import NotFound from './components/NotFound';
import About from './components/About';
import Header from './components/Header';
import Footer from './components/Footer';
import Menu from './components/Menu';
import Hero from './components/Hero';

function App() {
  return(
    <>
    <Router>
      <Header></Header>
      <Routes>
        <Route path='/sobre-nos' element={<About></About>}></Route>
        <Route path='/menu' element={<Menu></Menu>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </Router>
    </>
  )
}

export default App;
