import { Banner } from "../../components"
import { Categories, SpecialDishes } from "../index"

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <Categories />
      <SpecialDishes />
    </div>
  )
}

export default Home;
