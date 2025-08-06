import {
  BrowserRouter,
  createBrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
// layout
import AppLayout from "./layout/AppLayout";
// pages
import Home from "./pages/Home";
import Users from "./pages/Users";
import Products from "./pages/Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <Home /> },
      { path: "/users", element: <Users /> },
      { path: "/products", element: <Products /> },
    ],
  },
]);

export default router;
