import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import NotFound from './components/NotFound';

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App;
