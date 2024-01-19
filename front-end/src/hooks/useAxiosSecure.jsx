import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "http://localhost:3000"
});

const useAxiosSecure = () => {
  const navigate = useNavigate();  
  const { logout } = useAuth();

  // request
  axiosSecure.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  }, (error) => {
    return Promise.reject(error);
  })

  // response
  axiosSecure.interceptors.response.use((response) => {
    return response;
  }, async (error) => {
    const status = error.response.status;

    if (status === 401 || status === 403) {
      await logout();
      navigate("/register");
    }

    return Promise.reject(error);
  })

  return axiosSecure;
};

export default useAxiosSecure;
