import React from "react";
import { Routes, Route } from "react-router-dom";
import "../src/assets/style.scss/main.scss";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Legal from "./pages/Legal/Legal";
import Batiment from "./pages/Bâtiment/Batiment";
import Services from "./pages/Services/Services";
import Fabrication from "./pages/Fabrication/Fabrication";
import Alimentation from "./pages/Alimentation/Alimentation";
import Search from "./pages/Search/Search";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Donnees from "./pages/Données_Perso/Donnees";
import Cookies from "./pages/Cookies/Cookies";
import Accessibilite from "./pages/Accessibilité/Accessibilité";
// import Separator from "./components/Separator/Separator";
import EntrepriseDetails from "./pages/Details/EntrepriseDetails";
import FilterResults from "./components/FilterResults/FilterResults";


function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Separator/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/batiment" element={<Batiment />} />
        <Route path="/services" element={<Services />} />
        <Route path="/fabrication" element={<Fabrication />} />
        <Route path="/alimentation" element={<Alimentation />} />
        <Route path="/résultats-de-recherche" element={<Search />} />
        <Route path="//mentions-legales" element={< Legal/>} />
        <Route path="/donnees-personnelles" element={< Donnees/>} />
        <Route path="/cookies" element={< Cookies/>} />
        <Route path="/accessibilite" element={< Accessibilite/>} />
        <Route path="/entreprise/:artisanName" element={< EntrepriseDetails />} />
        <Route path="/:filterTermSearch" element= {<FilterResults/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
