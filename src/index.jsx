import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import Home from './pages/home/Home.jsx';
import Images from './pages/images/Images.jsx';
import Footer from './components/footer/Footer.jsx';
import Header from './components/header/Header.jsx';
import Calculator from './pages/calculator/Calculator.jsx';

import './index.scss';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path='/home' element={<Home />} />
        <Route path='/images' element={<Images />} />
        <Route path='/calculator' element={<Calculator />} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);
