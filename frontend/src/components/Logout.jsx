import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'

function Logout() {
    const [authUser, setAuthUser] = useAuth()

    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null
            })
            localStorage.removeItem('user')
            toast.success("Logout Successfully!");
            setTimeout(()=>{    
                window.location.reload();
            },2000)
        } catch (error) {
            toast.error("Error: "+ error.message)
            setTimeout(()=>2000);
        }
    }

  return (
    <div className='text-white'>
      <button className="btn btn-error text-white" onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout
