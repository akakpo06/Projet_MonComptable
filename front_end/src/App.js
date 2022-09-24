import React from "react";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "./components/Home";
import Inscription from "./components/inscription";
import Connexion from "./components/connexion";
import Message from "./components/message";
import Dashboard from "./components/Dashboard";
import TaxPayment from "./components/Tax-payment";
import "./components/responsive.css"
import './App.css';

function App() {
  
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/inscription" element={<Inscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/contact" element={<Message />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/tax-pay" element={<TaxPayment />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
