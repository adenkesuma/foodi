import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "../components"

const Main = () => {
  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default Main
