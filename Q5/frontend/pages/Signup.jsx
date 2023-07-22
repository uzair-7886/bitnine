import { useState } from "react"
// import styles from "./styles.module.css"
import axios from "axios"
import {Link,useNavigate} from "react-router-dom"

const Signup = () => {
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const [error,setError]=useState("error");
    const [confirmPassword,setConfirmPassword]=useState("")

    // const navigate=useNavigate();  

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value})
    }
    


    const handleSubmit=async (ev)=>{
        ev.preventDefault();
        try {
            const url=import.meta.env.VITE_FRONTEND_URI + "/signup";
            // console.log(url)
            const {data:res}=await axios.post(url,data);
            // navigate("/login")
            console.log(res.message);
        } catch (error) {
            setError(error.response.data.message);
            console.log(error.response.data.message);  
        }
    }

        return (
            <div>
                <h1>Signup Page</h1>
                <form onSubmit={handleSubmit}>
                    <h1>create account</h1>
                    <input type="text" placeholder="first name" name="firstName" onChange={handleChange} required value={data.firstName}/>
                    <input type="text" placeholder="last name" name="lastName" onChange={handleChange} required value={data.lastName}/>
                    <input type="email" placeholder="email" name="email" onChange={handleChange} required value={data.email}/>
                    <input type="password" placeholder="password" name="password" onChange={handleChange} required value={data.password}/>
                    <input type="password" placeholder="confirm password" name="confirmPassword" onChange={(e)=>setConfirmPassword(e.target.value)} required value={confirmPassword}/>
                    <button type="submit"
                    disabled={confirmPassword!=data.password}
                    >Register</button>
                </form>
            </div>
        )
    }

export default Signup;