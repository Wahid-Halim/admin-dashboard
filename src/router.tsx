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
import { Home, Users, Products } from "./pages/index";

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
