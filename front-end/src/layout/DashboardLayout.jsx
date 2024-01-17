import { Link, Outlet } from "react-router-dom";
import { ShoppingBag, Menu, PlusCircle, FilePenLine, LayoutDashboard, Users, Home, ShoppingCart, Send, ShieldQuestion } from "lucide-react";

const sharedLinks = (
  <>
    <li>
      <Link to="/">
        <Home className="w-4 text-primary mr-3" />
        <span>Home</span>
      </Link>
    </li>
    <li>
      <Link to="/menu">
        <ShoppingCart className="w-4 text-primary mr-3" />
        <span>Menu</span>
      </Link>
    </li>
    <li>
      <Link to="/dashboard">
        <Send className="w-4 text-primary mr-3" />
        <span>Order Tracking</span>
      </Link>
    </li>
    <li>
      <Link to="/dashboard">
        <ShieldQuestion className="w-4 text-primary mr-3" />
        <span>Customer Support</span>
      </Link>
    </li>
  </>
)

const DashboardLayout = () => {
  const isAdmin = true;

  return (
    <div>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col sm:items-start items-center sm:justify-start">
          <div className="w-full px-4 py-2 flex items-center justify-between">
            <label htmlFor="my-drawer-2" className="py-2 px-4 bg-primary rounded-xl drawer-button lg:hidden">
              <Menu className="w-4 text-white" />
            </label>

            <button className="px-6 py-2 rounded-xl bg-primary text-white font-semibold text-sm lg:hidden">Logout</button>
          </div>

          <div className="mt-5 md:mt-2 mx-4">
            <Outlet />
          </div>
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            <li className="mb-12">
              <Link to="/dashboard" className="text-xl font-bold">
                <span className="bg-primary rounded-md px-2 text-white">F</span>
                OODI

                <div className="badge badge-primary">
                  {isAdmin ? "Admin" : "User" }
                </div>
              </Link>
            </li>

            {isAdmin && (
              <>
                <li>
                  <Link to="/dashboard">
                    <LayoutDashboard className="w-4 text-primary mr-3" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/users">
                    <ShoppingBag className="w-4 text-primary mr-3" />
                    <span>Manage Bookings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <PlusCircle className="w-4 text-primary mr-3" />
                    <span>Add Menu</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard">
                    <FilePenLine className="w-4 text-primary mr-3" />
                    <span>Manage Items</span>
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/users">
                    <Users className="w-4 text-primary mr-3" />
                    <span>Users</span>
                  </Link>
                </li>

                <div className="w-[80%] ml-4 border-t border-primary my-8" />
              </>
            )}

            {sharedLinks}
          </ul>

        </div>
      </div>
    </div>
  )
}

export default DashboardLayout;
