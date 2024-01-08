import { Banner } from "../../components"
import { Categories, SpecialDishes, Testimonials } from "../index"

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
    </div>
  )
}

export default Home;
