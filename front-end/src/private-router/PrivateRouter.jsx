import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useLocation, Navigate } from "react-router-dom";
import { Loading } from "../components";

const PrivateRouter = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading />
  }

  if (user) {
    return children
  }

  return (
    <Navigate to="/register" state={{ from: location }} replace></Navigate>
  )
}

export default PrivateRouter
