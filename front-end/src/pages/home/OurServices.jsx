import { Soup, AlarmClockCheck, ShoppingBasket, Gift } from "lucide-react";

const serviceLists = [
  {
    id: 1, title: "Catering", des: "Delight your guests with our flavors and presentation", image: <Soup className="w-16 h-16 text-primary" />
  },
  {
    id: 2, title: "Fast Delivery", des: "We deliver your order promptly to your door", image: <AlarmClockCheck className="w-16 h-16 text-primary" /> 
  },
  {
    id: 3, title: "Online Ordering", des: "Explore menu & order with ease using our Online Ordering", image: <ShoppingBasket className="w-16 h-16 text-primary" />
  },
  {
    id: 4, title: "Gift Cards", des: "Give the gift of exceptional dining with Foodi Gift Cards", image: <Gift className="w-16 h-16 text-primary" /> 
  },
];

const OurServices = () => {
  return (
    <div className="section-container py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Our Story & Services</p>
            <h2 className="title">Our Culinary Journey<br /> and Services</h2>
            <p className="my-5 leading-[28px] text-lg">
              Rooted in passion, we curate unforgettable dining experiences and offer exceptional
              services, blending culinary artistry with warm hospitality.
            </p>
            <button className="text-sm font-semibold px-6 py-2 rounded-xl bg-primary text-white">
              Explore
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="grid grid-cols-2 gap-6">
            {serviceLists.map((service) => (
              <div key={service.id} className="bg-white/30 p-8 rounded-3xl flex flex-col gap-2 items-center">
                {service.image}
                <h4 className="text-center text-base font-semibold text-primary">{service.title}</h4>
                <p className="text-center text-sm">{service.des}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
