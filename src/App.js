<<<<<<< HEAD
import React from "react";
import { Routes, Route } from "react-router-dom";
import "./main.scss";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Legal from "./pages/Legal/Legal";
import Batiment from "./pages/Bâtiment/Batiment";
import Services from "./pages/Services/Services";
import Fabrication from "./pages/Fabrication/Fabrication";
import Alimentation from "./pages/Alimentation/Alimentation";
import Search from "./pages/Search/Search";
import CardArtisan from "./pages/CardArtisan/CardArtisan";
=======
import logo from './assets/image/Logo.png';
import './App.css';
>>>>>>> 92680be094a7dccab1d10eecd136fd4c61585ebd

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <h1>Bonjour</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page404" element={<NotFound />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/batiment" element={<Batiment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fabrication" element={<Fabrication />} />
        <Route path="/alimentation" element={<Alimentation />} />
        <Route path="/recherche" element={<Search />} />
        <Route path="/ficheartisan:id" element={<CardArtisan />} />

      </Routes>
=======
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 92680be094a7dccab1d10eecd136fd4c61585ebd
    </div>
  );
}

export default App;
