import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import env from "react-dotenv";
import Footer from "./components/footer/Footer";


export type Page = "home" | "about";

const App = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <div className="py-2"></div>
      <Footer />
    </div>
  );
}

export default App;
