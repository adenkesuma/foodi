import { useEffect, useState } from "react";

const Menu = () => {
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");

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
  }

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
  }

  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedItems = [...filteredItems];
    
    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localCompare(a.name));
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
  }

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

      </div>
    </div>
  )
}

export default Menu
