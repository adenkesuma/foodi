const categoryItems = [
  {
    id: 1, title: "Main Dish", des: "(85 dishes)", image: "/images/home/category/img1.png"
  },
  {
    id: 2, title: "Break Fast", des: "(12 break fast)", image: "/images/home/category/img2.png"
  },
  {
    id: 3, title: "Dessert", des: "(47 dessert)", image: "/images/home/category/img3.png"
  },
  {
    id: 4, title: "Browse All", des: "(255 items)", image: "/images/home/category/img4.png"
  },
]

const Categories = () => {
  return (
    <div className="py-24 section-container">
      <div className="text-center">
        <p className="subtitle">Customer Favorites</p>
        <h2 className="title">Popular Categories</h2>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 mt-10 gap-6 lg:gap-8">
        {categoryItems.map((category) => (
          <div key={category.id} className="bg-white/15 rounded-3xl p-6 lg:p-8">
            <div className="flex justify-center">
              <img 
                src={category.image} 
                alt={category.title} 
                className="bg-third rounded-full p-4 w-20 lg:w-28 h-20 lg:h-28"
              />
            </div>
            <div className="mt-4 space-y-1">
              <h3 className="font-semibold text-base text-center">{category.title}</h3>
              <p className="text-center text-sm">{category.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Categories
