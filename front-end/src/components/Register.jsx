import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Modal from "./Modal";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";
import axios from "axios";

const Register = () => {
   const {
    register,
    handleSubmit,
    // formState: { errors },
  } = useForm();

  const { createUser, updateUserProfile, signUpWithGmail } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    createUser(email, password)
    .then(() => {
      console.log(data)
      
      updateUserProfile(data.name, data.photoURL)
      .then(() => {
        const userInfo = {
          name: data.name,
          email: data.email,
        }
        
        axios.post("http://localhost:3000/users", userInfo)
        .then((response) => {
            alert("Sign up successful")
            console.log(response)
            navigate(from, { replace: true });
          })
        })

      document.getElementById("my_modal_5").close();
    })
    .catch((err) => {
      const errorCode = err.code;
      alert(errorCode);
    })
  };

  // google signin
  const handleLogin = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;

        const userInfo = {
          name: user.displayName,
          email: user.email,
        }
        
        axios.post("http://localhost:3000/users", userInfo)
          .then((response) => {
            alert("Sign up successful")
            console.log(response)
            navigate(from, { replace: true });
          })

        document.getElementById("my_modal_5").close();
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <div className="mx-auto max-w-md w-full flex items-center justify-center mt-24">
      <div className="modal-action mt-0 flex flex-col gap-4">
        <form onSubmit={handleSubmit(onSubmit)} className="card-body" method="dialog">
          {/* <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" type="button">✕</button> */}
          <h3 className="font-bold text-xl">Create An Account!</h3>
           <div className="form-control">
            <label className="label">
              <span className="label-text text-xs font-semibold">Name</span>
            </label>
            <input 
              type="text" 
              placeholder="name" 
              className="input rounded-xl py-2 input-bordered" 
              {...register("name")}
              required 
            />
          </div>
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

          <div className="form-control mt-6">
            <input type="submit" className="btn rounded-xl bg-primary font-semibold text-white" value="Register" />
          </div>

          <span className="text-center block text-sm mt-4">
            Already have an account? <button onClick={()=>document.getElementById('my_modal_5').showModal()} className="font-semibold underline">Login</button>
          </span>
        </form>

        <Modal />

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
  )
}

export default Register
