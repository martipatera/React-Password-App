import React, { useEffect, useState} from 'react';
import CopyBtn from '../components/CopyBtn';
import { logIn, logOut } from '../redux/LoggedIn';
import { useDispatch, useSelector } from 'react-redux'
import { Link } from "react-router-dom"





function CreatePasswordPage() {
    const {loggedIn} = useSelector((state)=>state.login)


    let [passwordName, setPasswordName] = useState("");
    const [password, setPassword] = useState("");
    const [passwordInput, setPasswordInput] = useState("");

    

    const generatePassword = () => {
        const passwordArr = [
            ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
            ..."abcdefghijklmnopqrstuvwxyz",
            ..."0123456789",
            ..."!@#$%^&*()-_=+[]{}|;:',.<>?/`~"
        ];
        let generatedPassword = "";
        for (let i = 0; i < 16; i++) {
            const randomIndex = Math.floor(Math.random() * passwordArr.length);
            const randomValue = passwordArr[randomIndex];
            generatedPassword += randomValue;
        }
        setPassword(generatedPassword);
    };

    useEffect(() => {
        if (password) {
            setPasswordInput(password);
            setPasswordName("");
            importDB();
        }
    }, [password]);

    const clearOutput = () => {
        if (passwordInput === "" && passwordName === "") {
            window.alert("Nothing to clear");
            
        } else {
            setPasswordInput("");
            setPasswordName("");
        }
        
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!passwordName) {
            window.alert("Enter a password name at least 5 chars long");
        } else {
            generatePassword();
        }
    };

    const importDB = async () => {
        const responseApi = await fetch("http://localhost:3000/api/post_passwords/", {
            method: "POST",
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: passwordName, password: password, id: _id})
        });
        const data = await responseApi.json();
        console.log(data);
    };

    return (
        <div className='h-screen w-full sm:px-10 md:px-10 lg:px-20 xl:px-32 2xl:px-48'>
            {loggedIn? 
                    <div className='h-screen flex justify-center items-center w-full '>
                    <form className='border-2 border-white rounded-2xl px-4 py-6 w-full sm:w-10/12 sm:mx-10 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12 mx-auto'>
                        <div className='flex flex-col sm:flex-row justify-center items-center gap-2'>
                            <label className='rounded-2xl shadow-xl px-4 py-3 border whitespace-nowrap' htmlFor="password">Password name:</label>
                            <input className='rounded-2xl shadow-xl px-4 py-3 border placeholder-center text-black w-full' value={passwordName} onChange={(e) => setPasswordName(e.target.value)} type="text" name="password" id="password" placeholder='Enter a password name' />
                        </div>
                        <div className='flex flex-col sm:flex-row justify-center items-center mt-4 mb-4 gap-4'>
                            <button className="text-white font-semibold px-4 py-3 border rounded-full shadow-xl bg-primary-600 hover:bg-primary-700 scale-105 transition-all active:bg-primary-500" onClick={handleSubmit}>Generate password</button>
                            <button className="text-white font-semibold px-4 py-3 border rounded-full shadow-xl bg-primary-600 hover:bg-primary-700 scale-105 transition-all active:bg-primary-500" onClick={clearOutput}>Clear</button>
                        </div>
                        <div className={passwordInput === "" ? "" : "flex flex-row justify-between items-center bg-inherit border pl-10 rounded-full shadow-xl text-center"}>
                            <span>{passwordInput}</span>
                            {password && passwordInput ? (
                                <CopyBtn password={password} />
                            ) : null}
                        </div>
                        {password && passwordInput ? <p className='text-center mt-6'>Your password has been saved successfully</p> : null}
                    </form>
                </div>
                    : 
                <div className='h-screen flex flex-col justify-center items-center w-full '>
                        <p>SignUp or SignIn to start</p><br/>
                        <Link to="/"><button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap'>Sign Up</button></Link>
                        <Link to="/signin"><button className='border-2 py-2 px-4 sm:px-6 rounded-full whitespace-nowrap'>Sign In</button></Link>
                </div>
            }
            
        </div>
    );
}

export default CreatePasswordPage;
