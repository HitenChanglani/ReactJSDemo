import React, { useState } from "react"
import axios from "axios"

function LoginPage() {
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
                        console.log("Yes!")
                        setLoginStatus(!loginStatus)
                    }
                    else {
                        console.log("Oh No!")
                        alert("Incorrect Password!")
                    }
                }
            }
            if(!isAvailable) {
                alert("Username does not exist. Sign up to create your account!")
            }
        })
    }


    //Function to create a new user
    function SignUp() {
        axios.get('http://localhost:3000/user').then(res => {
            let dataList = res.data
            let isAvailable = false

            for(let i=0; i < dataList.length; i=i+1){
                if(userName === dataList[i].Username){
                    isAvailable = true
                    break
                }
            }

            if(isAvailable){
                alert("User already exists!")
            }
            else{
                axios.post('http://localhost:3000/user', {id: userName, "Username": userName, "Password": password}).then(res => {
                    alert("User successfully created!")
                })
            }
        })
    }

    
    const login = loginStatus ? "Logout" : "Login" 

    return (
        <div className="LoginPageText" >
            <label>Enter your Username:</label><br /><br />
            <input value={userName} placeholder="Username" onChange={e => setUserName(e.target.value)} ></input><br /><br /><br />
            <label>Enter your Password:</label><br /><br />
            <input value={password} placeholder="Password" onChange={e => setPassword(e.target.value) } ></input><br /><br /><br />
            <button onClick={HandleLogin} >{login}</button>
            <button onClick={SignUp} >Sign Up!</button>
        </div>
    )

}

export default LoginPage