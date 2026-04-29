"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const LoginPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const {register,
    handleSubmit,
    formState: { errors },
    } = useForm()
    const handleLogin = async (data) => {;
        const {email, password } = data;
        const {data : res , error } = await authClient.signIn.email({
                email: email, // required
                password: password, // required
                rememberMe: true,
                callbackURL: "/",
        })


        if (error) {
        toast.error(error.message || "Login Failed");
        return;
    }
        if (res) {
            toast.success("Login Successful")
        }
    }
    return (
        <div className=' bg-base-300'>
            <div className='w-11/12 lg:w-10/12 mx-auto min-h-screen  flex justify-center items-center '>
            <div className='bg-white p-10 rounded '>
                <h2 className='font-bold text-3xl text-[#403F3F]'>Login Your Account</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label font-semibold text-[#403F3F] text-lg">Email</label>
          <input type="email" className="input bg-base-300" placeholder="Enter your email address" {...register("email", { required: "Email is Required" })}/>
          {errors.email && <span className='text-red-500 mt-2'>{errors.email.message}</span>}
          <div className=' relative'>
            <label className="label font-semibold text-[#403F3F] text-lg">Password</label>
          <input type={showPassword ? "text" : "password"} className="input bg-base-300" placeholder="Enter your password" {...register("password", { required: "You Can't Login Without Password" })}/>
          <span className='cursor-pointer absolute  top-11 right-2' onClick={() => setShowPassword(!showPassword)}>
            {
                showPassword ? <FaEye/> : <FaEyeSlash/>
             }
          </span>
          {errors.password && <span className='text-red-500 mt-2'>{errors.password.message}</span>}
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
          <p className='text-[#403F3F] mt-3 font-semibold'>Don’t Have An Account ? <Link className='text-red-500' href='/register'>Register</Link></p>
        </fieldset>
      </form>
            </div>
        </div>
        <Toaster></Toaster>
        </div>
    );
};

export default LoginPage;