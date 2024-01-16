import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";

const Cards = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const [isHeartFillted, setIsheartFillted] = useState(false);
  const {user} = useContext(AuthContext);

  const navigate = useNavigate();
  const location = useLocation();

  const handleAddToCart = async () => {
    if (user && user?.email) {
      const cartItem = { menuItemId: _id, name, quantity: 1, image, price, email: user.email };

      try {
        const response = await fetch("http://localhost:3000/carts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(cartItem)
        });

        const data = await response.json();

        if (data.quantity) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      Swal.fire({
        title: "Sorry, you can not order now!",
        text: "Please create an account or login",
        icon: "warning",
        confirmButtonColor: "#7D0A0A",
        confirmButtonText: "Register"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/register", { state: { from: location }})
        }
      })
    }
  }

  return (
    <div className="card shadow-none relative sm:52 md:w-72 lg:w-80 xl:w-[290px] bg-base-100 bg-white/30 rounded-3xl z-0">
      <button onClick={() => setIsheartFillted(!isHeartFillted)} className={`rating gap-1 absolute right-4 top-4 p-3 rounded-full bg-white/50`}>
        <input 
          type="radio"
          name="like"
          className={`mask mask-heart ${isHeartFillted ? "bg-secondary" : "bg-gray-500"} transition-all duration-100`}
          readOnly
        />
      </button>

      <Link to={`/menu/${_id}`} className="pt-6">
        <figure>
          <img 
            src={image} 
            alt={name} 
            className="w-48 h-48"
          />
        </figure>
      </Link>
      <div className="card-body">
        <h2 className="text-base font-semibold">{name}</h2>
        <p className="text-sm">{recipe}</p>

        <div className="mt-4 card-actions justify-between items-center">
          <h5 className="text-2xl font-bold">
            <span className="text-secondary">$</span> {price}
          </h5>
          <button 
            className="px-6 py-2 rounded-xl bg-primary text-white font-semibold text-sm"
            onClick={() => handleAddToCart(item)}
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
