import React from "react";
import { Routes, Route } from "react-router-dom";
import "../src/assets/style.scss/main.scss";
import "../src/assets/style.scss/main.scss";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound";
import Legal from "./pages/Legal";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Donnees from "./pages/Donnees";
import Cookies from "./pages/Cookies";
import Accessibilite from "./pages/Accessibilité";
import EntrepriseDetails from "./pages/EntrepriseDetails/EntrepriseDetails";
import CategorySearch from "./pages/CategorySearch";
import ResultSearch from "./pages/ResultSearch";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categorie/:filterCategory" element={<CategorySearch />} />
        <Route
          path="/resultats-de-recherche/:filterTermSearch"
          element={<ResultSearch />}
        />
        <Route
          path="/entreprise/:artisanName"
          element={<EntrepriseDetails />}
        />
        <Route path="//mentions-legales" element={<Legal />} />
        <Route path="/donnees-personnelles" element={<Donnees />} />
        <Route path="/cookies" element={<Cookies />} />
        <Route path="/accessibilite" element={<Accessibilite />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
