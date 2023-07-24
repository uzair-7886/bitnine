import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import agens from "../assets/b_logo.png";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

//   const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit=async (ev)=>{
    ev.preventDefault();
    try {
        const url=import.meta.env.VITE_FRONTEND_URI+"/login";
        const {data:res}=await axios.post(url,data);
        // console.log(res.message);
        localStorage.setItem("token",res.data) //setItem takes two arguments key and value and saves the data (which is the token sent as response from the api) in the local storage of browser so that we may need it latter
        // console.log(localStorage.getItem("token"));
        // navigate("/")
        window.location="https://uzair-bitnine.vercel.app/"
        // console.log(res.message);
    } catch (error) {
        setError(error.response.data.message);
        console.log(error.response.data.message); 
    }
}


  return (
    <div className="h-screen w-full p-5 flex flex-col md:flex-row justify-center items-center">
      <div className="flex flex-col md:flex-row justify-center items-center space-x-5 shadow-lg bg-gray-100 md:w-3/4 w-full px-5 h-auto py-5">
        <div className="">
          <img src={agens} alt="" className="p-5" />
        </div>

        <div className="md:w-1/2 w-full ">
          <h1 className="text-2xl md:text-3xl font-gray-500 font-semibold text-center pb-5">
            Login Page
          </h1>
          <form onSubmit={handleSubmit}>
            <h1 className="text-lg md:text-xl font-gray-600 text-center md:py-5 pb-2">
              Login to your account
            </h1>

            <div className="flex flex-col items-center justify-center space-y-3 self-center px-4 py-10">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={handleChange}
                className="px-5 py-2 rounded-lg bg-gray-200 w-full"
                required
                value={data.email}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
                className="px-5 py-2 rounded-lg bg-gray-200 w-full"
                required
                value={data.password}
              />

              <div className="h-10">
                {error && (
                  <p className="text-red-500 text-sm">{error}</p>
                )}
              </div>

              <button
                type="submit"
                className="px-8 py-2 bg-blue-600 rounded-lg text-white text-md md:text-lg font-semibold hover:text-yellow-400 duration-200 cursor-pointer"
              >
                Login
              </button>

              <p className="text-sm">
                Don't have an account?{" "}
                <Link to="/signup" className="text-blue-500">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;