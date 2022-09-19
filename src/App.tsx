import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

export type Page = "home" | "about";

const App = () => {

  const [page, setPage] = useState<Page>("home");

  return (
    <div>
      <Navbar page={page} setPage={setPage} />
      {page}
      <Outlet />
    </div>
  );
}

export default App;
