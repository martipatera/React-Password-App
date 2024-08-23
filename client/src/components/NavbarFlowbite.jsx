
import { Link } from 'react-router-dom'
import Toggle from './Toggle'
import blackTransparent from "../assets/blackTransparent.png"
import whiteTransparent from "../assets/whiteTransparent.png"
import { logIn, logOut } from '../redux/LoggedIn'
import { useDispatch, useSelector } from 'react-redux'
import LogOut from './LogOut'

export default function NavbarFlowbite() {
  const {loggedIn} = useSelector((state)=>state.login)

    const navbar = [
        {
        name: "Create Password",
        route: "/create_password"
        },
        {
            name: "My passwords",
            route: "/mypasswords"
        }
        
]

    


  return (

    <nav id='navbar' className="fixed w-full z-20 top-0 start-0 border border-white">
      <div className=" flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/">
          <img src={whiteTransparent} className="h-10" alt="Password App Logo"></img>
        </Link>
      <div className="flex justify-end flex-wrap items-center gap-5 md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        {
          !loggedIn? 
          <div>
            <Link to="/"><button className='border-2 py-2 px-4 sm:px-6 mr-4 rounded-full whitespace-nowrap'>Sign Up</button></Link>
            <Link to="/signin"><button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap'>Sign In</button></Link></div> 
            : 
            <div><LogOut></LogOut></div>
        }
            
            <Toggle></Toggle>
          <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-0 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 " aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            
        </button>
        
      </div>
      <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 ">
            {
                navbar.map(({name, route}, index) => {
                    return <Link key={index} to={route}><li key={index} className='block md:py-2 md:px-4 border border-white rounded-full text-white  md:bg-transparent " aria-current="page'>{name}</li></Link>
                    }
                )
            }
          
        </ul>
      </div>
      </div>
    </nav>
    )


}