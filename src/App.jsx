import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import HomePage from "./page/HomePage";
import ShopPage from "./page/ShopPage";
import DetailPage from "./page/DetailPage";
import AboutPage from "./page/AboutPage";

import Loading from "./components/layout/LoadingPage";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulasi loading time minimal
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<DetailPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
