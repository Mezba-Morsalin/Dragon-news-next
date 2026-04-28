"use client"
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';

const RegisterPage = () => {
    const {register,
    handleSubmit,
    formState: { errors },
    } = useForm()
    const handleLogin =(data) => {;
        if (!data.email || !data.password) {
            toast.error("Invalid Login");
            return
        }
            toast.success("Login Successful")
    }
    return (
        <div className=' bg-base-300'>
            <div className='w-11/12 lg:w-10/12 mx-auto min-h-screen  flex justify-center items-center '>
            <div className='bg-white p-10 rounded '>
                <h2 className='font-bold text-3xl text-[#403F3F]'>Register your account</h2>
                <form onSubmit={handleSubmit(handleLogin)} className="card-body">
        <fieldset className="fieldset">
          <label className="label font-semibold text-[#403F3F] text-lg">Your Name</label>
          <input type="text" className="input bg-base-300" placeholder="Your Full Name" {...register("name", { required: "Name Required" })}/>
          {errors.name && <span className='text-red-500 mt-2'>{errors.name.message}</span>}
          <label className="label font-semibold text-[#403F3F] text-lg">Photo URL</label>
          <input type="text" className="input bg-base-300" placeholder="Enter Your Photo URL" {...register("photo", { required: "Upload Your Photo to Registration" })}/>
          {errors.photo && <span className='text-red-500 mt-2'>{errors.photo.message}</span>}
          <label className="label font-semibold text-[#403F3F] text-lg">Email</label>
          <input type="email" className="input bg-base-300" placeholder="Enter your email address" {...register("email", { required: "Email is Required" })}/>
          {errors.email && <span className='text-red-500 mt-2'>{errors.email.message}</span>}
          <label className="label font-semibold text-[#403F3F] text-lg">Password</label>
          <input type="password" className="input bg-base-300" placeholder="Enter your password" {...register("password", { required: "You Can't Login Without Password" })}/>
          {errors.password && <span className='text-red-500 mt-2'>{errors.password.message}</span>}
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Register</button>
        </fieldset>
      </form>
            </div>
        </div>
        <Toaster></Toaster>
        </div>
    );
};

export default RegisterPage;