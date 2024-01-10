import { Banner } from "../../components"
import { Categories, SpecialDishes, Testimonials, OurServices } from "../index"

const Home = () => {
  return (
    <div className="px-8">
      <Banner />
      <Categories />
      <SpecialDishes />
      <Testimonials />
      <OurServices />
    </div>
  )
}

export default Home;
