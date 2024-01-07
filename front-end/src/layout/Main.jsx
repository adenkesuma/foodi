import { Outlet } from "react-router-dom"

const Main = () => {
  return (
    <div>
        <nav>Navbar</nav>
        <Outlet />
        <footer>footer</footer>
    </div>
  )
}

export default Main