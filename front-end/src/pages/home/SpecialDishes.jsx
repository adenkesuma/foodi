import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Cards } from "../../components";

const SpecialDishes = () => {
  const [recipes, setRecipes] = useState([]);
  const slider = useRef(null);

  useEffect(() => {
    fetch("/menu.json")
      .then(res => res.json())
      .then(data => {
        const specials = data.filter((item) => item.category === "popular");
        setRecipes(specials)
      })
  }, [])

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="section-container py-24">
      <div>
        <div>
          <p className="subtitle">Special Dishes</p>
          <h2 className="title">Standout Dishes From Our Menu</h2>
        </div>
      </div>

      <Slider {...settings}>
        {recipes.map((item) => (
          <Cards key={item._id} item={item} />
        ))}  
      </Slider>
    </div>
  )
}

export default SpecialDishes
