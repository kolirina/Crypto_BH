import React from "react";
import Navbar from "./components/NavBar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Coin from "./pages/Coin/Coin";
import Footer from "./components/Footer/Footer";
import InDevelopment from "./pages/InDevelopment/InDevelopment";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/inDevelopment" element={<InDevelopment />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
