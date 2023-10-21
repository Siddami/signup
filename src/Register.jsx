import { useState } from "react"
import "./index.css"

const Register = (props) => {
    const {email, setEmail} = useState('');
    const {pass, setPass} = useState('');
    const {name, setName} = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email)
    }
    return(
        <div className="flex flex-col justify-around items-center rounded w-2/5 h-4/5 shadow-2xl">
            <form onSubmit={handleSubmit} className="flex flex-col relative gap-4">
                <label htmlFor="name">Fullname</label>
                <input
                    value={name}
                    type="name"
                    name="name"
                    placeholder="Full Name"
                    className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setName(e.target.value)}/>
                <label htmlFor="email">Email</label>
                <input
                    value={email}
                    type="email"
                    placeholder="yourEmail"
                    className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor="password">Password</label>
                <input
                    value={pass}
                    type="password"
                    placeholder="yourPassword" className="focus:outline-blue-400 text-center p-4"
                    onChange={(e) => setPass(e.target.value)}/>

                <button
                    type="submit"
                    className="w-2/5 h-[3em] bg-cyan-400 duration-500 flex justify-center items-center rounded cursor-pointer">
                    Log In
                </button>
            </form>
            <button onClick={() => props.onFormSwitch("login")}>Already have an account? <span className="text-blue-400">Login</span></button>
        </div>
    )
}

export default Register
