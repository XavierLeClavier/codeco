import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './elements/Header.js';
import Footer from './elements/Footer';

import Accueil from './pages/Accueil.js'
import Avocat from './pages/Avocat';
import Cassis from './pages/Cassis';

export default function App() {
  return (
    <BrowserRouter>
      <div className='flex flex-col min-h-screen bg-primary'>
        <Header />
        <main className='flex-grow'>
          <Routes>
            <Route path="/" element={<Accueil />} key="accueil" />
            <Route path="/avocat" element={<Avocat />} key="avocat" />
            <Route path="/cassis" element={<Cassis />} key="cassis" />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}