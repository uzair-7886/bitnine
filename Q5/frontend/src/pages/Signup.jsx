import { useState } from "react"
// import styles from "./styles.module.css"
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"
import agens from '../assets/b_logo.png'

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [error,setError]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("")

    const navigate=useNavigate();  

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    


    const handleSubmit=async (ev)=>{
        ev.preventDefault();
        try {
            if(confirmPassword!=data.password){
                setError("Passwords do not match");
                return;
            }
            const url=import.meta.env.VITE_FRONTEND_URI + "/signup";
            // console.log(url)
            const {data:res}=await axios.post(url,data);
            navigate("/login")
            console.log(res.message);
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);  
        }
    }

        return (
            <div className="h-screen w-full p-5 flex flex-col md:flex-row justify-center items-center">
                <div className="flex flex-col md:flex-row justify-center items-center space-x-5 shadow-lg bg-gray-100 md:w-3/4 w-full  px-5 h-auto py-5">


                    <div className="">
            <img src={agens} alt="" className="p-5" />
                    </div>


                    <div className="flex-col">    
                <h1 className="text-2xl md:text-3xl font-gray-500 font-semibold text-center pb-5">Signup Page</h1>
                <form onSubmit={handleSubmit} >
                    <h1 className="text-lg md:text-xl font-gray-600 text-center md:py-5 pb-2">Create new account</h1>
                    <div className="flex flex-col items-center justify-center space-y-3 self-center px-4">
                        <div className="flex flex-row w-full justify-between space-x-2">
                    <input type="text" placeholder="First Name" name="firstName" onChange={handleChange} required value={data.firstName} className="w-1/2 px-5 py-2 rounded-lg bg-gray-200 "/>
                    <input type="text" placeholder="Last Name" name="lastName" onChange={handleChange}  className="w-1/2 px-5 py-2 rounded-lg bg-gray-200 "required value={data.lastName}/>
                    </div>
                    <input type="email" placeholder="email" name="email" onChange={handleChange} className="px-5 py-2 rounded-lg bg-gray-200 w-full" required value={data.email}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} className="px-5 py-2 rounded-lg bg-gray-200 w-full" required value={data.password}/>
                    <input type="password" placeholder="confirm password" name="confirmPassword" className="px-5 py-2 rounded-lg bg-gray-200 w-full" onChange={(e)=>setConfirmPassword(e.target.value)} required value={confirmPassword}/>
                    <div className="h-10">
{error && <p className="text-red-500 text-sm">
    {error}
    </p>}
                    </div>
                    <button type="submit"
                    className="px-8 py-2 bg-blue-600 rounded-lg text-white text-md md:text-lg font-semibold hover:text-yellow-400 duration-200 cursor-pointer"
                    disabled={()=>{confirmPassword!=data.password}}
                    >Signup</button>
                    <p className="text-sm">Already have an account? <Link to="/login" className="text-blue-500">Login</Link></p>
                    </div>
                </form>
                </div>
                </div>
            </div>
        )
    }

export default Signup;