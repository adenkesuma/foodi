import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import { Cart, Menu, UpdateProfile, Dashboard, Users } from "../pages";
import { Register } from "../components";
import DashboardLayout from "../layout/DashboardLayout";
import PrivateRouter from "../private-router/PrivateRouter";
import AddMenu from "../pages/dashboard/admin/AddMenu";
import ManageItems from "../pages/dashboard/admin/ManageItems";

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
  },
  {
    path: "/dashboard",
    element: <PrivateRouter><DashboardLayout /></PrivateRouter>,
    children: [
      {
        path: "",
        element: <Dashboard />
      },
      {
        path: "users",
        element: <Users />
      },
      {
        path: "add-menu",
        element: <AddMenu />
      },
      {
        path: "manage-items",
        element: <ManageItems />
      }
    ]
  }
]);

export default router;

