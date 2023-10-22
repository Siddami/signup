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
        <div className="flex flex-col justify-around items-center rounded md:w-2/5 h-4/5 shadow-2xl gap-3 max-w-md p-4">
            <form onSubmit={handleSubmit} className="flex flex-col relative gap-4">
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
                    className="w-2/5 h-[3em] bg-cyan-400 duration-500 flex justify-center items-center rounded cursor-pointer">
                    Log In
                </button>
                <div id="signInButton">
                    <GoogleLogin
                        cliendid={clientId}
                        buttonText="Sign Up with Google"
                        onSuccess={onsuccess}
                        onFailure={onfailure}
                        cookiePolicy={'single-host-origin'}
                        isSignedIn={true}
                        className="w-4/5 h-[3em] bg-cyan-400 duration-500 flex justify-center items-center rounded cursor-pointer"
                    />
                </div>
            </form>
            <button onClick={() => props.onFormSwitch("login")} className="text-sm">Already have an account? <span className="text-blue-400">Login</span></button>
        </div>
    )
}

export default Register
