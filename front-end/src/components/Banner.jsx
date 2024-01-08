import { Play } from "lucide-react";

const Banner = () => {
  return (
    <header className="section-container mt-24 mb-24">
      <div className="flex flex-col justify-center items-center w-full h-full gap-6">
        <h1 className="text-7xl font-bold leading-[1.2] text-center">
          Dive into Delights of<br /> Delectable <span className="text-secondary">Food</span>
        </h1>
        <p className="text-base font-medium text-center">Where Each Plate Weaves a Story of Culinary Mastery and Passionate Craftsmanship</p>

        <div className="flex items-center justify-center gap-4 mt-1">
          <button className="px-6 py-2 rounded-xl bg-primary text-white text-sm font-medium">
            Order Now
          </button>
          <button className="px-6 py-2 flex items-center gap-3 rounded-xl text-sm font-semibold">
            <span>Watch video</span>
            <Play className="w-9 p-2 flex justify-center rounded-full h-9 bg-white/30" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Banner
