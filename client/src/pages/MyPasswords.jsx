import React, { useEffect, useState } from 'react'
import DeleteAllBtn from '../components/DeleteAllBtn'
import DeleteBtn from '../components/DeleteBtn'
import CopyBtn from '../components/CopyBtn'
import { useDispatch, useSelector } from 'react-redux'
import { logIn, logOut } from '../redux/LoggedIn'
import { Link } from 'react-router-dom'
import CreatePassword from '../components/CreatePassword'


function MyPasswords() {
  
  
  const [passwords, setPasswords] = useState({}) // State pro data 
  const {msg, data} = passwords // Destructuring data
  const {loggedIn, email} = useSelector((state)=>state.login)
  

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/get_passwords")
        const result = await response.json()
        await setPasswords(result)
      } catch (error) {
        console.error(error)
      }
    }
    fetchApi()
  }, [passwords])




  return (

    loggedIn? <div className='h-screen flex flex-col justify-start gap-4 w-auto'>
    {data && data.length !== 0 ? (
      <div className='flex justify-center items-center gap-10 mt-24'>
        <CreatePassword></CreatePassword>
      </div>
    ) : (
      <p></p>
    )}

    {data && data.length > 0 ? ( // Pokud data existují a mají délku větší než 0
      [...data].filter(p=> p.email === email).reverse().map((password, index) => {// [...data] vytvori novy klon data a otoci ho, puvodni data se ale nezmeni 
        return (
          
          <div key={index} className='w-auto  sm:mx-10 md:mx-10 lg:mx-52 xl:mx-64 2xl:mx-96'>
            <div className={` flex items-center justify-between border-2 border-black rounded-2xl mx-auto my-0 text-black ${index % 2 === 0 ? "bg-zinc-400" : "bg-zinc-500"}`}>
              <div className='m-3 w-full'>
                <div className='flex gap-8 items-center'>
                <p className='font-semibold'>Name: </p>
                <p className='m-2  ml-4 border border-red-400 rounded-full p-2 px-5 bg-red-100 overflow-hidden text-ellipsis whitespace-nowrap'> {password.name}</p>
                </div>
                <div className='flex items-center w-auto '>
                  <p className='font-semibold mr-4'>Password:</p>
                  <div className=' flex flex-row justify-between items-center border border-red-400 rounded-full pl-5 bg-red-100 w-'>
                    <span className=' lg:px-8 overflow-hidden text-ellipsis md:px-0 whitespace-nowrap'>{password.password}</span>
                    <CopyBtn password={password.password}/>
                  </div>
                  <div className= 'w-full flex justify-end items-center'>
                    <DeleteBtn id={password._id} index={index}/></div>
                </div>
                <p className='text-xs mt-4'>Created: {password.createdAt}</p>
              </div>
            </div>
          </div>
        )
      })
    ) : (
      <div className='flex flex-col justify-center items-center mt-20'>
          <p>No passwords yet</p>
          <CreatePassword></CreatePassword>
      </div>
    )}
    {data && data.length !== 0 ? (
      <div className='flex justify-center items-center gap-10'>
        

        
      </div>
    ) : (
      <p></p>
      
      
    )}
  </div> 
    :
   <div  className='h-screen flex flex-col justify-center items-center w-full '>
    <p>SignUp or SignIn to start</p><br/>
    <Link to="/"><button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap'>Sign Up</button></Link>
    <Link to="/signin"><button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap'>Sign In</button></Link>
    </div>
   

    
    
  )
}

export default MyPasswords
