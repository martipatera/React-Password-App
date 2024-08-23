import {BrowserRouter, Routes, Route} from "react-router-dom"
import ErrorPage from "./pages/ErrorPage"
import CreatePasswordPage from "./pages/CreatePasswordPage"
import MyPasswords from "./pages/MyPasswords"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import Footer from "./components/Footer"
import NavbarFlowbite from "./components/NavbarFlowbite"
import CreatePassword from "./components/CreatePassword"


function App() {

  return (
    <>
     <BrowserRouter>
      <NavbarFlowbite/>
        
        <div id="content" >
      <Routes>
        
        <Route path="/create_password" element={<CreatePasswordPage/>}></Route>
        <Route path="/mypasswords" element={<MyPasswords></MyPasswords>}></Route>
        <Route path="/" element={<SignUp></SignUp>}></Route>
        <Route path="/signin" element={<SignIn></SignIn>}></Route>
        <Route path="*" element={<ErrorPage></ErrorPage>}></Route>
        
      </Routes>
        <Footer></Footer>
        </div>
        
     </BrowserRouter>
    </>
  )
}

export default App
