import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { Cart, Menu, UpdateProfile } from "../pages";
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
      },
      {
        path: "/cart",
        element: <Cart />
      },
      {
        path: "/update-profile",
        element: <UpdateProfile />
      }
    ]
  },
  {
    path: "/register",
    element: <Register />
  }
]);

export default router;

