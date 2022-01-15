import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomPage from "./pages/CustomPage";
import ToDo from "../components/ToDo";
import BoxAuth from "../components/BoxAuth";

const setPage = (path, main) => (
  <Route path={path} element={<CustomPage mainPage={main} />} />
);

export default function () {
  return (
    <Router>
      <Routes>{setPage("/", ToDo)}</Routes>
      <Routes>{setPage("/login", BoxAuth)}</Routes>
    </Router>
  );
}
