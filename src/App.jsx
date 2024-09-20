import React from "react";
import HomePage from "./page/HomePage";
import DetailPage from "./page/DetailPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
