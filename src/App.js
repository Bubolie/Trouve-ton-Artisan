import React from "react";
import { Routes, Route } from "react-router-dom";
import "./main.scss";

import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Legal from "./pages/Legal/Legal";

function App() {
  return (
    <div className="App">
      <h1>Bonjour</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/page404" element={<NotFound />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="/" element={<Home />} />

      </Routes>
    </div>
  );
}

export default App;
