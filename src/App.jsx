import { useState } from "react"
import Login from "./Login"
import Register from "./Register"
import "./index.css"

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    setCurrentForm(formName)
  }

  return(
    <div className="h-[100vh] w-full flex justify-center items-center">
       {
          currentForm === "login"? <Login onFormSwitch={toggleForm}/>: <Register onFormSwitch={toggleForm}/>
       }
    </div>
  )
}

export default App
