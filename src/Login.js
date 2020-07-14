import React, { useState } from "react"
import axios from "axios"
import SignUp from "./SignUp"
import "./Login.css"
import { Link } from "react-router-dom"

function Login() {
    const [loginStatus, setLoginStatus] = useState(false)
    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    //Function to check if the entered credentials are valid
    function HandleLogin() {
        axios.get('http://localhost:3000/user').then(res => {
            let dataList = res.data
            let isAvailable = false

            for(let i=0; i < dataList.length; i=i+1){
                if(userName === dataList[i].Username){
                    isAvailable = true
                    if(password === dataList[i].Password){
                        setLoginStatus(!loginStatus)
                    }
                    else {
                        alert("Incorrect Password!")
                    }
                }
            }
            if(!isAvailable) {
                alert("Username does not exist. Sign up to create your account!")
            }
        })
    }

    return (

        <div className="Login-form" >
            <fieldset>
                <legend>Enter your Username:</legend>
                <input type='email' value={userName} onChange={e => setUserName(e.target.value)} />
            </fieldset><br/>

            <fieldset>
                <legend>Enter your Password:</legend>
                <input type='password' value={password} onChange={e => setPassword(e.target.value) } />
            </fieldset><br/>

            <button onClick={HandleLogin} >{loginStatus ? "Logout" : "Login"}</button>
            <br /><br />

            <hr></hr>
            
            
            <p>Don't have an account? <Link to='/SignUp' >Sign Up</Link></p>

        </div>
        
    )

}

export default Login