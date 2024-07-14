import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Cursor from "./components/Cursor/Cursor";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Cursor />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
