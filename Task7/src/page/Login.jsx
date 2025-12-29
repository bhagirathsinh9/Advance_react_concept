import Navbar from "@/components/Navbar";
import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const [input,setInput]= useState({
        username:"",
        password:""
    });
    const navigate  =useNavigate();
    const handleSubmit = async(e) => {
            e.preventDefault();
        try {
            const res = await axios.post('https://fakestoreapi.com/auth/login', input);

            if(!input.username || !input.password){
                alert("Please fill all the fields");
                return;
            }

            if(res.status === 201){
                alert("Login Successful");
                navigate('/');
                localStorage.setItem('token', res.data.token);
            }

        } catch (error) {
            console.log("Login error:", error);
        }
    }

      const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <Navbar />
      <div className="my-5">
        <h1>Login Here!!</h1>
      </div>
      <div className="w-[30%]  mx-auto p-5 border-2 border-gray-300 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex item-center justify-center gap-3">
            <label htmlFor="email" className="font-bold ">Email</label>
            <input type="text" placeholder="Enter username"  name="username" value={input.username}
            onChange={changeEventHandler}/>
          </div>
          <div className="flex item-center justify-center gap-3">
            <label htmlFor="password" className="font-bold ">Password</label>
            <input type="text" placeholder="Enter password" name="password" value={input.password}
            onChange={changeEventHandler}/>
          </div>
          <button type="submit" className="bg-blue-400 rounded-full">Login</button>
        </form>
      </div>

        <div>
        <h1 className="text-center my-5">Test Login Credentials</h1>
      <p>"username": "johnd", "password": "m38rmF$"</p>

        </div>
    </div>
  );
}
