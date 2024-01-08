const Cards = ({ item }) => {
  const { image, name, recipe, price } = item;

  return (
    <div className="card shadow-none w-full bg-base-100 bg-white/15 rounded-3xl">
      <figure>
        <img 
          src={image} 
          alt={name} 
          className="w-48 h-48"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-between items-center">
          <h5>
            $ {price}
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
