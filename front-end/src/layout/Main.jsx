import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "../components"

const Main = () => {
  return (
    <div className="h-[300vh]">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main
