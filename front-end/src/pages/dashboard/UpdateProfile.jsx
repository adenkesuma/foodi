import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../contexts/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const UpdateProfile = () => {
  const {
    register,
    handleSubmit
  } = useForm();

  const { updateUserProfile } = useContext(AuthContext);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";
  
  const onSubmit = (data) => {
    const name = data.name;
    const photoURL = data.photoURL;


    updateUserProfile(name, photoURL)
      .then(() => {
        alert("updated success")
        navigate(from, { replace: true })
      })
      .catch((err) => {
        console.log(err)
      })
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="card shrink-0 w-full max-w-sm bg-base-100">
        <form className="card-body" onSubmit={handleSubmit(onSubmit)}>
          <h2 className="font-bold text-3xl -mt-4 mb-3">Update Your Profile</h2>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input 
              type="text" 
              placeholder="your name" 
              className="input input-bordered" 
              {...register("name")}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Upload Photo URL</span>
            </label>
            <input 
              type="text" 
              placeholder="place link photo URL"
              className="input input-bordered" 
              {...register("photoURL")}
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-primary text-white" type="submit">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateProfile;
