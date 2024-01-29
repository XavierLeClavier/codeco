import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Header from './elements/Header';
import Footer from './elements/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <div>
        <Routes>
          <Route
            path="/"
            element={<Accueil/>}
            key="accueil"
          />
        </Routes>
      </div>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
