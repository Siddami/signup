/* eslint-disable react/prop-types */
import { GoogleLogin } from "react-google-login"
import { useState } from "react"
import "./index.css"

const clientId = "772119509134-m92sev6a3dhcn30c14s5me094ulsbht8.apps.googleusercontent.com";

const Register = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');
    const {name, setName} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    const onsuccess = (res) => {
        console.log("LOGIN SUCCESS! Current user: ", res.profileObj);
    }

    const onfailure = (res) => {
        console.log("LOGIN FAILURE! res: ", res);
    }

    return(
        <div className="flex flex-col justify-around items-center rounded w-4/5 h-[90%] shadow-2xl gap-3 p-4">
            <form onSubmit={handleSubmit} className="flex flex-col relative gap-6 w-4/5">
                <label htmlFor="name">Fullname</label>
                <input
                    value={name}
                    type="name"
                    name="name"
                    placeholder="enter full name"
                    className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    type="email"
                    placeholder="example@gmail.com"
                    className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    type="password"
                    placeholder="yourpassword" className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setPass(e.target.value)}/>

                <button
                    type="submit"
                    className="md:w-2/5 w-4/5 h-[3em] bg-cyan-400 duration-500 flex justify-center items-center rounded cursor-pointer m-auto">
                    Log In
                </button>
                <div id="signInButton" className="m-auto md:w-2/5 w-4/5 h-[3em] duration-500 flex justify-center items-center rounded-md cursor-pointer">
                    <GoogleLogin
                        cliendid={clientId}
                        buttonText="Sign In with Google"
                        onSuccess={onsuccess}
                        onFailure={onfailure}
                        cookiePolicy={'single-host-origin'}
                        isSignedIn={true}
                        className="w-full"
                    />
                </div>
            </form>
            <button onClick={() => props.onFormSwitch("login")} className="md:text-base text-sm">Already have an account? <span className="text-blue-400">Login</span></button>
        </div>
    )
}

export default Register
