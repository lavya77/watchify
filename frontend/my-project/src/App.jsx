import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbartwo from "./components/Navbartwo";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";

export default function App() {
  return (
    <Router>
      <Navbartwo />
      <Routes>
        {/* Home / Dashboard */}
        <Route path="/" element={<Dashboard />} />

        {/* Products Page */}
        <Route path="/products" element={<Products />} />
      </Routes>
    </Router>
  );
}
