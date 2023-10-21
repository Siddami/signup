import { useState, useEffect } from "react"
import Login from "./Login"
import Register from "./Register"
import {gapi} from "gapi-script"
import "./index.css"

const clientId = "772119509134-m92sev6a3dhcn30c14s5me094ulsbht8.apps.googleusercontent.com/";

function App() {
  useEffect(() => {
    function start(){
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
    }

    gapi.load('client:loadAuth2', start);
  })

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
