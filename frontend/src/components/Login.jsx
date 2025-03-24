import React from 'react'
import { Link } from 'react-router-dom'
import {useForm} from 'react-hook-form'

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => console.log(data);
    

  return (
    <div className='text-black'>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box relative">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" 
                    onClick={()=> document.getElementById("my_modal_3").close()}>✕</Link>
            
                <h3 className="font-bold text-lg text-black ">Login!</h3>
                
                {/* email */}
                <div className='mt-4 space-y-2'>
                    <span className='text-black text-sm'>Email</span>
                    <br/>
                    <input type="email"
                    placeholder='Enter your email' 
                    className='w-80 px-3 py-1 border rounded-md outline-none text-black '
                    {...register('email', { required: true })}
                    />
                    <br />
                    {errors.email && <span className='text-sm text-red-500'>Please enter email.</span>}
                </div>

                {/* password */}
                <div className='mt-4 space-y-2'>
                    <span className='text-black text-sm'>Password</span>
                    <br/>
                    <input type="password"
                    placeholder='Enter your password' 
                    className='w-80 px-3 py-1 border rounded-md outline-none text-black '
                    {...register('password', { required: true })}
                    />
                    <br />
                    {errors.password && <span className='text-sm text-red-500'>Please enter password.</span>}
                </div>
                {/* button */}
                <div className='flex justify-around mt-4'>
                <button className="mt-6 btn btn-secondary  px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Login</button>
                    <p>Not registered?{" "}
                        <Link to='/signup' className=''>
                            <span className='underline text-blue-500 cursor-pointer'>Signup</span>
                        </Link> 
                    </p>
                </div>
            </form>
        </div>
      </dialog>
    </div>
  )
}

export default Login
