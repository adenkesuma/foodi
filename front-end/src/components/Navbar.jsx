import { Link } from "react-router-dom";
import { ShoppingCart, Search, Menu } from "lucide-react";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link className="text-sm" to="/">Home</Link>
      </li>
      <li>
        <details>
          <summary className="text-sm">Menu</summary>
          <ul className="p- w-32 shadow-none bg-transparent lg:bg-[#ECE3CA] lg:shadow-md">
            <li>
              <Link className="text-sm" to="/all">All</Link>
            </li>
            <li>
              <Link className="text-sm" to="/salad">Salad</Link>
            </li>
            <li>
              <Link className="text-sm" to="/pizza">Pizza</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary className="text-sm">Services</summary>
          <ul className="p-2 w-52 shadow-none bg-transparent lg:bg-[#ECE3CA] lg:shadow-md">
            <li>
              <Link className="text-sm" to="/">Online Order</Link>
            </li>
            <li>
              <Link className="text-sm" to="/">Table Booking</Link>
            </li>
            <li>
              <Link className="text-sm" to="/">Order Tracking</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <Link className="text-sm" to="/offers">Offers</Link> 
      </li>
    </>
  )

  return (
    <nav className="sticky top-0 left-0 right-0 duration-300 transition-all bg-[#ECE3CA]">
      <div className="navbar section-container px-6 lg:px-4 xl:px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <Menu className="w-5" />
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <span className="text-xl font-bold">
            <span className="bg-primary rounded-md px-2 mr-[2px] text-white">F</span>
            OODI
          </span>
        </div>

        <div className="navbar-center mt-2 hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}      
          </ul>
        </div>

        <div className="navbar-end flex items-enter gap-8">
          <button className="cursor-pointer">
            <Search className="w-5" />
          </button>

          <div className="relative cursor-pointer mr-3">
            <ShoppingCart className="w-5" />
            <div className="bg-primary absolute -top-2 -right-2 px-[7px] py-[2px] rounded-full flex items-center justify-center">
              <span className="text-white text-xs">8</span>
            </div>
          </div>

          <button className="bg-primary px-6 py-2 rounded-xl text-white font-medium text-sm">Contact</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
