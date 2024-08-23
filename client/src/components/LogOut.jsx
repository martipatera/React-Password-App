import React from 'react'
import { logOut } from '../redux/LoggedIn'
import { useDispatch, useSelector } from 'react-redux' 

function LogOut() {
    const {loggedIn, email} = useSelector((state)=> state.login)
    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(logOut())
        

    }

  return (
    <div>
        <button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap' onClick={logout}>Logout</button>
        <button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap hover:pointer-events-none'>{email}</button>
    </div>
    
  )
}

export default LogOut