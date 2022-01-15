import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomPage from "./pages/CustomPage";
import ToDo from "../components/ToDo";
import BoxTileMenu from "../components/BoxTileMenu/index";
import BoxAuth from "../components/BoxAuth/index";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomPage mainPage={BoxTileMenu} />} />
        <Route path="/todo" element={<CustomPage mainPage={ToDo} />} />
        <Route path="/login" element={<CustomPage mainPage={BoxAuth} />} />
      </Routes>
    </Router>
  );
}
