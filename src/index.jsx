import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <Router>
      <h1>Хедер</h1>
      <Routes>
        <Route path='/home' element={<h1>База</h1>} />
        <Route path='/images' element={<h1>Сладер</h1>} />
        <Route path='/calculator' element={<h1>Кулятор</h1>} />
        <Route
          path="*"
          element={<Navigate to="/home" replace />}
        />
      </Routes>
    </Router>
  </React.StrictMode>
);
