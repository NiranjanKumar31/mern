import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerschema } from "../components/formschema/registerschema";

function Register() {
    const navigate=useNavigate();
    const {register, handleSubmit, formState:{errors}}=useForm({
        resolver: zodResolver(registerschema)
    });
    function onSubmit1(data){
        console.log(data)
        alert("register succes")
        navigate("/",{state:data})
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-orange-200 p-4">
        
        <form onSubmit={handleSubmit(onSubmit1)}
            className="bg-yellow-100 p-8 rounded-xl shadow-lg">
            <h1 className="!text-blue-600 text-4xl font-bold text-center mb-8">
            Register
            </h1>
           
            
            <input placeholder="Enter your name" type="text" {...register("name")}
            className="border p-2 rounded-xl text-black" />
            <p>{errors.name?.message}</p>
       
            <input placeholder="Enter your email" type="email" {...register("email")} className="border p-2 rounded-xl text-black" />
            <p>{errors.email?.message}</p>
           
            
            <input placeholder="Enter Password"  type="password" {...register("password")} className="border p-2 rounded-xl text-black" />
            <p>{errors.password?.message}</p>

          
            <input placeholder="Enter your age"  type="number" {...register("age")} className="border p-2 rounded-xl text-black" />
            <p>{errors.age?.message}</p>

            <button type="submit" className="bg-blue-500 text-brown p-3 rounded-xl text-blue-600">Submit</button>
        </form>
        </div>
    );
}

export default Register;