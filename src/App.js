import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './elements/Header.js';
import Footer from './elements/Footer';

import Accueil from './pages/Accueil.js'
import Avocat from './pages/Avocat';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div>
          <Routes>
            <Route
              path="/"
              element={<Accueil />}
              key="accueil"
            />
            <Route
              path="/avocat"
              element={<Avocat />}
              key="avocat"
            />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
