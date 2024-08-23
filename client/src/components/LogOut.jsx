import React from 'react'
import { logOut } from '../redux/LoggedIn'
import { useDispatch, useSelector } from 'react-redux' 

function LogOut() {
    const login = useSelector((state)=> state.login.loggedIn)
    const dispatch = useDispatch()

    const logout = () =>{
        dispatch(logOut())
        

    }

  return (
    <button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap' onClick={logout}>Logout</button>
  )
}

export default LogOut