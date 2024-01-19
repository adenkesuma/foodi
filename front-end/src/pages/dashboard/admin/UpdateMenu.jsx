import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const UpdateMenu = () => {
  const {
    register,
    handleSubmit,
    reset
  } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const item = useLoaderData();

  const image_host_key = import.meta.env.VITE_IMGBB_API_KEY;
  const image_host_api = `https://api.imgbb.com/1/upload?key=${image_host_key}`;

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const hostingImg = await axiosPublic.post(image_host_api, imageFile, {
      headers: { 
        "content-type": "multipart/form-data" 
      }
    })

    if (hostingImg?.data?.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        recipe: data.recipe,
        price: parseFloat(data.price),
        image: hostingImg.data.data.display_url
      }

      const postMenuItem = axiosSecure.put(`/menu/${item._id}`, menuItem); 
      console.log(postMenuItem)

      if (postMenuItem) {
        reset();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your item is updated",
          showConfirmButton: false,
          timer: 1500
        });
      }
    }

  };

  return (
    <div className="w-full md:w-[870px] px-6 py-8 mx-auto">
      <h1 className="text-2xl font-bold">Edit Menu Item</h1>

      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label className="form-control w-full mt-6">
            <div className="label">
              <span className="label-text">Food name*</span>
            </div>
            <input 
              type="text" 
              defaultValue={item.name}
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
              <select className="select select-bordered" defaultValue={item.category} {...register("category", { required: true })}>
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
                defaultValue={item.price}
                {...register("price", { required: true })}
              />
            </label>            
          </div>

          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Food Details*</span>
            </div>
            <textarea defaultValue={item.recipe} {...register("recipe", { required: true })} className="textarea textarea-bordered h-32" placeholder="Describe about your food"></textarea>
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
            Update Menu
          </button>
        </form>
      </div>
    </div>
  )
}

export default UpdateMenu;
