import React from 'react';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import RedFilmsAppPage from './pages/RedFilmsAppPage';
import EstrenosPage from './pages/EstrenosPage';
import PromocionesPage from './pages/PromocionesPage';
import TopPeliculasPage from './pages/TopPeliculasPage';
import ContactoPage from './pages/ContactoPage';

import './App.css';
import './styles/home.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header />
      
      <Nav />
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/redFilmsApp" element={<RedFilmsAppPage />} />
            <Route path="/estrenos" element={<EstrenosPage />} />
            <Route path="/promociones" element={<PromocionesPage />} />
            <Route path="/topPeliculas" element={<TopPeliculasPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;
