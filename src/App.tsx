import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import env from "react-dotenv";
import Footer from "./components/footer/Footer";


export type Page = "home" | "about";

const App = () => {
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      <Navbar />
      <div className="py-5"></div>
      <Outlet />
      <div className="py-2"></div>
      <div className="mt-auto"></div>
      <Footer />
    </div>
  );
}

export default App;
