import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export type Page = "home" | "about";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
