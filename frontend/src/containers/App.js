import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import CustomPage from "./pages/CustomPage";
import ToDo from "../components/ToDo";
import BoxTileMenu from "../components/BoxTileMenu/index";
import BoxAuth from "../components/BoxAuth/index";
import BoxFoodOrder from "../components/BoxFoodOrder";
import BoxOrdersHistory from "../components/BoxOrdersHistory";
import BoxProfile from "../components/BoxProfile";

export default function () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CustomPage mainPage={BoxTileMenu} />} />
        <Route
          path="/profile"
          element={<CustomPage title="Twój profil" mainPage={BoxProfile} />}
        />
        <Route
          path="/todo"
          element={<CustomPage title="To-do list" mainPage={ToDo} />}
        />
        <Route
          path="/login"
          element={<CustomPage title="Logowanie" mainPage={BoxAuth} />}
        />
        <Route
          path="/food-order"
          element={
            <CustomPage title="Zamów jedzenie" mainPage={BoxFoodOrder} />
          }
        />
        <Route
          path="/orders/history"
          element={
            <CustomPage title="Historia zamówień" mainPage={BoxOrdersHistory} />
          }
        />
      </Routes>
    </Router>
  );
}
