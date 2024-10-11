import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './components/admin/Admin';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/*' element={<App/>} />
        <Route path='/admin/*' element={<Admin/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);