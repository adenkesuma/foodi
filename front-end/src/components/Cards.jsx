import { useState } from "react";
import { Link } from "react-router-dom";

const Cards = ({ item }) => {
  const { image, name, recipe, price, _id } = item;
  const [isHeartFillted, setIsheartFillted] = useState(false);

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
          <button className="px-6 py-2 rounded-xl bg-primary text-white font-semibold text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cards
