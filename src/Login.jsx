import { useState } from "react"
import "./index.css"

const Login = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return(
        <div className="flex flex-col justify-around items-center rounded w-2/5 h-3/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col relative gap-7">
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
                    placeholder="enter password" className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setPass(e.target.value)}/>

                <button
                    type="submit"
                    className="w-2/5 h-[3em] bg-cyan-400 duration-500 flex justify-center items-center rounded cursor-pointer">
                    Log In
                </button>
            </form>
            <button onClick={() => props.onFormSwitch("register")} className="text-sm">You Do not have an account? <span className="text-blue-400">Register here</span></button>
        </div>
    )
}

export default Login
