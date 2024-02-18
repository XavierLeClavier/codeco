import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './elements/Header.js';
import Footer from './elements/Footer';

import Accueil from './pages/Accueil.js'
import Avocat from './pages/Avocat';
import Cassis from './pages/Cassis';
import Morse from './pages/Morse';
import Bases from './pages/Bases';
import NotFound from './pages/NotFound.js';

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
            <Route path="/morse" element={<Morse />} key="morse" />
            <Route path="/bases" element={<Bases />} key="bases" />
            <Route path="*" element={<NotFound />} key="notfound" />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}