import { Outlet } from "react-router-dom";

// components
import { Navbar, Menu, Footer } from "../components/index";

const AppLayout = () => {
  return (
    <div className="grid grid-row-2 grid-cols-[240px_1fr]">
      <Navbar />
      <Menu />
      <main className="col-start-2 col-end-3 row-start-2 row-end-4 max-container">
        <Outlet />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default AppLayout;
