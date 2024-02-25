import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import { Home as Haerim } from "./Haerim";
import { Home as Jihun } from "./Jihun";
import { Home as Jungeun } from "./Jungeun";
import { HAERIM, HOME, JIHUN, JUNGEUN } from "./route.constant";

function App() {
  return (
    <Routes>
      <Route path={HOME} element={<Home />} />
      <Route path={HAERIM} element={<Haerim />} />
      <Route path={JIHUN} element={<Jihun />} />
      <Route path={JUNGEUN} element={<Jungeun />} />
    </Routes>
  );
}

export default App;
