import { Outlet } from "react-router-dom";

// components
import { Navbar, Menu, Footer } from "../components/index";

const AppLayout = () => {
  return (
    <div>
      <Navbar />
      <Menu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default AppLayout;
