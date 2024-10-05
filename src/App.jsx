import React from "react";
import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";
import DetailPage from "./page/DetailPage";

import "./App.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
      </Routes>
    </Router>
  );
}

export default App;
