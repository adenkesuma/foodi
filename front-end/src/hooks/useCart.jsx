import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import { useQuery } from "@tanstack/react-query";

const useCart = () => {
  const { user } = useContext(AuthContext);
  const token = localStorage.getItem("token");

  const { refetch ,data: cart = []} = useQuery({
    queryKey: ["carts", user?.email],
    queryFn: async () => {
      const res = await fetch(`http://localhost:3000/carts?email=${user?.email}`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      return res.json();
    }
  })

  return [cart, refetch]
}

export default useCart;
