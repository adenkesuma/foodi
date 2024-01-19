import { useForm } from "react-hook-form";

const AddMenu = () => {
  const {
    register,
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  };

  return (
    <div className="w-full md:w-[870px] px-6 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Upload a New Menu Item</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full mt-6">
            <div className="label">
              <span className="label-text">Food name*</span>
            </div>
            <input 
              type="text" 
              placeholder="e.g:burger" 
              className="w-full input input-bordered" 
              {...register("name", { required: true })}
            />
          </label>

          <div className='flex items-center justify-between gap-6 my-6'>
            <label className="form-control w-full">
              <div className="label">
                <span className="label-text">Choose category*</span>
              </div>
              <select className="select select-bordered" {...register("category", { required: true })}>
                <option disabled value="default">- Select one -</option>
                <option value="salad">Salad</option>
                <option value="drinks">Drinks</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="popular">Popular</option>
              </select>
            </label>

            <label className='w-full'>
              <div className="label">
                <span className="label-text">Price*</span>
              </div>
              <input 
                type="number" 
                placeholder="e.g:54" 
                className="w-full input input-bordered" 
                {...register("price", { required: true })}
              />
            </label>            
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Details*</span>
            </div>
            <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-32" placeholder="Describe about your food"></textarea>
          </label>

          <label className="form-control w-full my-6">
            <div className="label">
              <span className="label-text">Food image*</span>
            </div>
            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full" />
          </label>

          <button  
            type='submit'
            className="mt-8 py-2 px-6 rounded-xl bg-primary text-white font-semibold text-sm">
            Add Menu
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddMenu
