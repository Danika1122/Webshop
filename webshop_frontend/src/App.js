import React from 'react';

import { Container } from 'react-bootstrap';
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import ErrorPage from './pages/ErrorPage';

import Home from './pages/Home';

import TermekekT from './products/TermekekT';
import Termek from './products/Termek';
import TermekekAdmin from './products/TermekekAdmin';
import FelhasznalokAdmin from './products/FelhasznalokAdmin';

import Regisztracio from './pages/Regisztracio';
import Bejelentkezes from './pages/Bejelentkezes';


function App() {
  return(
  <Container id="alap" fluid="xxl">
      <BrowserRouter>
        <header>
          <Header />
        </header>
        <Routes>
          <Route>
            <Route path="/termekek/:tipus" element={<TermekekT />} />
            <Route path="/termek-:termekId" element={<Termek />} />
            <Route path="/webshop" element={<Home />} />
            <Route path="/termekek/admin" element={<TermekekAdmin />} />
            <Route path="/felhasznalok/admin" element={<FelhasznalokAdmin />} />

            <Route path="/regisztracio" element={<Regisztracio />} />
            <Route path="/bejelentkezes" element={<Bejelentkezes />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <footer>
          <br></br>
          <Footer />
        </footer>
      </BrowserRouter>
    </Container>
  );
}

export default App;
