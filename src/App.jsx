import { Routes, Route, Link } from "react-router-dom";
import { useState } from 'react';
import './App.css';
import Home from "./components/Home";
import Blue from "./components/Blue";
import Red from "./components/Red";

export default function App() {
  return (
    <>
     <div id="container">
      <div id="navbar">
        <Link to="/">Home</Link>
        <Link to="/blue">Blue Page</Link>
        <Link to="/red">Red Page</Link>
      </div>
      <div id="main-section">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blue" element={<Blue />} />
          <Route path="/red" element={<Red />} />
        </Routes>
      </div>
     </div>
    </>
  );
}

