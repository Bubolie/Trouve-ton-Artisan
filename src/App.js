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
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


function App() {
  return (
    <div className="App">
      <Header/>
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
      <Footer/>

    </div>
  );
}

export default App;
