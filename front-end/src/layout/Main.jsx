import { Outlet } from "react-router-dom"
import { Navbar } from "../components"

const Main = () => {
  return (
    <div className="h-[300vh]">
      <Navbar />
      <Outlet />
      <footer>footer</footer>
    </div>
  )
}

export default Main
