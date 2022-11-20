import React from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="root">
      <div>
        <header className="header">
          <Navbar />
        </header>
      </div>
      <div
        className="container1"
        style={{ paddingTop: "80px", minHeight: "100vh" }}
      >
        <Outlet />
      </div>
    </div>
  );
}

export default App;
