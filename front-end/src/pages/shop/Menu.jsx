import { useEffect, useState } from "react";
import { Filter } from "lucide-react";
import { Cards } from "../../components";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/menu.json");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchData()
  }, []);

  const filterItems = (category) => {
    const filtered = category === "all" ? menu : menu.filter((item) => item.category === category);
    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  }

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  }

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div className="py-24 flex flex-col justify-center items-center w-full h-full gap-6 section-container">
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

      <div className="section-container py-24">
        <div className="flex justify-between items-end pb-8">
          <aside className="flex items-center gap-8 flex-wrap">
            <button className={selectedCategory === "all" ? "active" : ""} onClick={showAll}>All</button>
            <button className={selectedCategory === "salad" ? "active" : ""} onClick={() => filterItems("salad")}>Salad</button>
            <button className={selectedCategory === "pizza" ? "active" : ""} onClick={() => filterItems("pizza")}>Pizza</button>
            <button className={selectedCategory === "soup" ? "active" : ""} onClick={() => filterItems("soup")}>Soups</button>
            <button className={selectedCategory === "dessert" ? "active" : ""} onClick={() => filterItems("dessert")}>Desserts</button>
            <button className={selectedCategory === "drinks" ? "active" : ""} onClick={() => filterItems("drinks")}>Drinks</button>
          </aside>

          <aside className="flex items-center gap-2">
            <div className="rounded-xl bg-white/40 py-1 px-2" >
              <Filter className="w-4" />
            </div>
            <select 
              value={sortOption} 
              onChange={(e) => handleSortChange(e.target.value)} 
              name="sort" id="sort"
              className="rounded-xl px-3 bg-white/40 border-none select select-sm w-32"
            >
              <option value="default">Default</option>
              <option value="A-Z">A - Z</option>
              <option value="Z-A">Z - A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </aside>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {currentItems.map((item) => (
            <Cards item={item} key={item._id} />
          ))}
        </div> 

        <div className="w-full mx-auto flex justify-center py-12">
          {Array.from({length: Math.ceil(filteredItems.length / itemsPerPage)}).map((_, index) => (
            <button 
              key={index+1} 
              onClick={() => paginate(index+1)}
              className={`mx-1 px-3 py-1 rounded-full ${currentPage === index+1 ? "bg-primary text-white" : "bg-third"}`}
            >
              {index+1}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menu
