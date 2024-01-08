import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/salad">Salad</Link>
            </li>
            <li>
              <Link to="/pizza">Pizza</Link>
            </li>
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Menu</summary>
          <ul className="p-2">
            <li>
              <Link to="/all">All</Link>
            </li>
            <li>
              <Link to="/salad">Salad</Link>
            </li>
            <li>
              <Link to="/pizza">Pizza</Link>
            </li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </>
  )

  return (
    <nav className="max-w-screen-2xl container mx-auto bg-black">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navItems}
            </ul>
          </div>
          <span className="text-xl font-semibold">FOODI</span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems}      
          </ul>
        </div>

        <div className="navbar-end">
          <button className="bg-primary px-8 py-2 rounded-lg text-white font-medium text-sm">Button</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
