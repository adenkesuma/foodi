import { Outlet } from "react-router-dom"
import { Navbar, Footer, Loading } from "../components"
import { useContext } from "react"
import { AuthContext } from "../contexts/AuthProvider"

const Main = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      {loading ? (
        <Loading />
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
