const Testimonials = () => {
  return (
    <div className="section-container py-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/home/testimonials/testimonials.png" alt="testimonials" />
        </div>

        <div className="md:w-1/2">
          <div className="text-left">
            <p className="subtitle">Testimonials</p>
            <h2 className="title">What Our Customers <br />Say About Us</h2>
            <blockquote className="my-5 leading-[28px] text-lg">
              {`"I had the pleasure of dining at Foodi last night, and I'm still raving about the experience! 
              The attention to detail in presentation and service was impeccable"`}
            </blockquote>

            <div className="flex gap-6 items-center">
              <div className="avatar-group -space-x-6 rtl:space-x-reverse">
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial1.png" className="border-white border-[3.5px] rounded-full" alt="testimonials" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial2.png" alt="testimonials" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-12">
                    <img src="/images/home/testimonials/testimonial3.png" alt="testimonials" />
                  </div>
                </div>
                <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div> 
              </div>

              <div className="mt-2">
                <h4 className="font-semibold text-base">Customer Feedback</h4>
                <div className="rating flex items-center">
                  <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400 w-5 h-5" readOnly />
                  <span className="ml-2 font-semibold text-base">
                    4.9
                  </span>
                  <span className="text-sm ml-2">
                    (18.6k Reviews)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
