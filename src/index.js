import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Home from './Components/Home/Home'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Skills from './Components/Skills/Skills'
import Contact from './Components/Contact/Contact'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>} />
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
