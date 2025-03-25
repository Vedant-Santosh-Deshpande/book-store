// import React from 'react'
// import { Link, Navigate } from 'react-router-dom'
// import Login from './Login'
// import {useForm} from 'react-hook-form'
// import axios from 'axios'
// import toast from 'react-hot-toast'

// const Signup = () => {
//     const {
//             register,
//             handleSubmit,
//             formState: { errors },
//           } = useForm();

//         const onSubmit =async (data) => {
//             const userInfo={
//                 fullname:data.fullname,
//                 email:data.email,
//                 password:data.password
//             }
//             await axios.post('http://localhost:4001/user/signup',userInfo)
//             .then((res)=>{
//                 console.log(res.data);
//                 if(res.data){
//                     toast.success('Signup successful')
//                 }
//                 localStorage.setItem("user", JSON.stringify(res.data.user) );
//                 <Navigate to='/' />
//             }).catch((err)=>{
//                 if(err.response){
//                     console.log(err);
//                     toast.error('Error: '+err.response.data.message)
                    
//                 }
//             })
//         }
//   return (
//     <>
//         <div className='flex h-screen items-center justify-center'>
//             <div className="w-[600px]">
//                 <div className="modal-box relative">
//                     <form onSubmit={handleSubmit(onSubmit)} method="dialog">
//                     {/* if there is a button in form, it will close the modal */}
//                         <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5">✕</Link>
                        
//                         <h3 className="font-bold text-xl text-black ">Signup</h3>
                        
//                         {/* email */}
//                         <div className='mt-4 space-y-2'>
//                             <span className='text-black text-sm'>Name</span>
//                             <br/>
//                             <input type="text"
//                             placeholder='Enter your fullname' 
//                             className='w-80 px-3 py-3 border-2 rounded-md outline-none'
//                             {...register('fullname', { required: true })}
//                             />
//                             <br />
//                             {errors.fullname && <span className='text-sm text-red-500'>Please enter name.</span>}
//                         </div>

//                         <div className='mt-4 space-y-2'>
//                             <span className='text-black text-sm '>Email</span>
//                             <br/>
//                             <input type="email"
//                             placeholder='Enter your email' 
//                             className='w-80 px-3 py-3 border-[2px] rounded-md outline-none'
//                             {...register('email', { required: true })}/>
//                             <br />
//                             {errors.email && <span className='text-sm text-red-500'>Please enter email.</span>}
//                         </div>

//                         {/* password */}
//                         <div className='mt-4 space-y-2'>
//                             <span className='text-black text-sm'>Password</span>
//                             <br/>
//                             <input type="password"
//                             placeholder='Enter your password' 
//                             className='w-80 px-3 py-3 border rounded-md outline-none'
//                             {...register('password', { required: true })}
//                             />
//                             <br />
//                             {errors.password && <span className='text-sm text-red-500'>Please enter password.</span>}
//                         </div>
//                         {/* button */}
//                         <div className='flex justify-around mt-7'>
//                         <button className="mt-6 btn btn-secondary  px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Signup</button>
//                             <p className='pt-3 text-md'>Have account?{" "}
//                                 <button className='' onClick={()=> document.getElementById("my_modal_3").showModal()}>
//                                     <span className='underline text-blue-500 cursor-pointer'>Login</span>
//                                 </button> 
//                                 <Login/>
//                             </p>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }

// export default Signup



import React from 'react'
import { Link, Navigate, useLocation, useNavigate } from 'react-router-dom' // ✅ Use useNavigate
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import toast from 'react-hot-toast'

const Signup = () => {
    
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const nevigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        };

        await axios.post('http://localhost:4001/user/signup', userInfo)
        .then((res) => {
            console.log(res.data);
            if (res.data) {
                toast.success('Signup successful');
                setTimeout(()=>{},2000);
                nevigate(from, {replace: true});
            }
            localStorage.setItem("user", JSON.stringify(res.data.user));
        })
        .catch((err) => {
            if (err.response) {
                console.log(err);
                toast.error('Error: ' + err.response.data.message);
                setTimeout(()=>{},2000)
            }
        });
    };

    return (
        <>
            <div className='flex h-screen items-center justify-center'>
                <div className="w-[600px]">
                    <div className="modal-box relative">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog">
                            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-5 top-5">✕</Link>
                            
                            <h3 className="font-bold text-xl text-black ">Signup</h3>
                            
                            {/* Name Input */}
                            <div className='mt-4 space-y-2'>
                                <span className='text-black text-sm'>Name</span>
                                <br/>
                                <input type="text"
                                    placeholder='Enter your fullname' 
                                    className='w-80 px-3 py-3 border-2 rounded-md outline-none'
                                    {...register('fullname', { required: true })}
                                />
                                <br />
                                {errors.fullname && <span className='text-sm text-red-500'>Please enter name.</span>}
                            </div>

                            {/* Email Input */}
                            <div className='mt-4 space-y-2'>
                                <span className='text-black text-sm '>Email</span>
                                <br/>
                                <input type="email"
                                    placeholder='Enter your email' 
                                    className='w-80 px-3 py-3 border-[2px] rounded-md outline-none'
                                    {...register('email', { required: true })}
                                />
                                <br />
                                {errors.email && <span className='text-sm text-red-500'>Please enter email.</span>}
                            </div>

                            {/* Password Input */}
                            <div className='mt-4 space-y-2'>
                                <span className='text-black text-sm'>Password</span>
                                <br/>
                                <input type="password"
                                    placeholder='Enter your password' 
                                    className='w-80 px-3 py-3 border rounded-md outline-none'
                                    {...register('password', { required: true })}
                                />
                                <br />
                                {errors.password && <span className='text-sm text-red-500'>Please enter password.</span>}
                            </div>

                            {/* Submit Button */}
                            <div className='flex justify-around mt-7'>
                                <button className="mt-6 btn btn-secondary px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                                    Signup
                                </button>
                                <p className='pt-3 text-md'>Have an account?{" "}
                                    <button className='' onClick={() => document.getElementById("my_modal_3").showModal()}>
                                        <span className='underline text-blue-500 cursor-pointer'>Login</span>
                                    </button> 
                                    <Login/>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Signup;
