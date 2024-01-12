import { Outlet } from "react-router-dom"
import { Navbar, Footer } from "../components"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

const Main = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <div className="h-screen w-full mx-auto flex justify-center items-center">
          <p className="animate-ping text-2xl font-bold text-primary">Loading...</p>
        </div>
      ) : (
        <div>
          <Navbar />
          <div className="min-h-screen">
            <Outlet />
          </div>
          <Footer />
        </div>
      )}
    </>
  )
}

export default Main
