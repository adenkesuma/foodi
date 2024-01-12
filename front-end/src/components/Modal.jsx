import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Modal = () => {
  const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { signUpWithGmail, login } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    login(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user)
        alert("login successbro")

        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err)
        setErrorMessage("Provide a correct email and password");
      })
  };

  // google signin
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        console.log(user)
        alert("login successfull")

        document.getElementById("my_modal_5").close();
        navigate(from, { replace: true });
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <dialog id="my_modal_5" className="modal modal-middle sm:modal-middle rounded-3xl">
      <div className="modal-box">
        <div className="modal-action mt-0 flex flex-col gap-4">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
           
            <h3 className="font-bold text-xl">Please Login!</h3>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs font-semibold">Email</span>
              </label>
              <input 
                type="email" 
                placeholder="email" 
                className="input rounded-xl py-2 input-bordered" 
                {...register("email")}
                required 
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-xs font-semibold">Password</span>
              </label>
              <input 
                type="password" 
                placeholder="password" 
                className="input rounded-xl py-2 input-bordered" 
                {...register("password")}
                required 
              />

              <label className="label mt-1 text-right block">
                <Link to="#" className="label-text-alt link link-hover underline font-semibold">Forgot password?</Link>
              </label>
            </div>

            {/* err */}
            {errorMessage ? <p className="text-sm text-primary">*{errorMessage}</p> : ""}

            <div className="form-control mt-6">
              <input type="submit" className="btn rounded-xl bg-primary font-semibold text-white" value="Login" />
            </div>

            <span className="text-center block text-sm mt-4">
              Don&apos;t have an account? <Link to="/register" className="font-semibold underline">Register</Link>
            </span>

            <button 
              htmlFor="my_modal_5"  
              onClick={()=>document.getElementById('my_modal_5').close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button">
              ✕
            </button>
          </form>

          <div className="relative">
            <div aria-hidden='true' className="absolute inset-0 flex items-center">
              <span className="w-3/4 mx-auto border-t border-primary" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className='bg-[#ECE3CA] px-2 text-muted-foreground text-primary'>or</span>
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mb-4">
            <button className="p-3 rounded-full hover:bg-white/60 bg-white/40" onClick={handleLogin}>
              <img src="/icons/google.svg" alt="google" className="w-7" />
            </button>
            <button className="p-3 rounded-full hover:bg-white/60 bg-white/40">
              <img src="/icons/facebook.svg" alt="facebook" className="w-7" />
            </button>
            <button className="p-3 rounded-full hover:bg-white/60 bg-white/40">
              <img src="/icons/github.svg" alt="github" className="w-7" />
            </button>
          </div>
        </div>
      </div>
    </dialog>
  )
}

export default Modal;
