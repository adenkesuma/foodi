import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { Menu } from "../pages";
import { Register } from "../components";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/menu",
        element: <Menu />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;

