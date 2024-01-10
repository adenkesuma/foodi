const Menu = () => {
  return (
    <div className="py-24">
      <div className="flex flex-col justify-center items-center w-full h-full gap-6">
        <h1 className="text-7xl font-bold leading-[1.2] text-center">
          Tantalize Your Taste Buds with<br /> Culinary<span className="text-secondary"> Delights</span>
        </h1>
        <p className="text-base font-medium text-center">
          Come with family & feel the joy of mouthwatering food such as Greek Salad, Lasagne, Butternut Pumpkin, <br/> Tokusen Wagyu, Olivas Rellenas and more for a moderate cost
        </p>
        <button className="px-6 py-2 rounded-xl bg-primary text-white text-sm font-medium">
          Order Now
        </button>
      </div>
    </div>
  )
}

export default Menu
