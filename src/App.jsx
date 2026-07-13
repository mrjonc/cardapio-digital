import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import NavBar from "./Components/navbar/Navbar.jsx";
import "./App.css";

function App() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default App;
