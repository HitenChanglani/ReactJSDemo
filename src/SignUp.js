import React, { useState } from "react"
import axios from "axios"
import "./SignUp.css"
import { Link } from "react-router-dom"

function SignUp() {
    const [userName, setUserName] = useState(undefined)
    const [password, setPassword] = useState(undefined)
    const [name, setName] = useState({firstName: '', lastName: ''})
    const [gender, setGender] = useState(undefined)
    //const [address, setAddress] = useState({fLine: '', sLine: '', city: '', zipCode: undefined})

    //Function to create a new user
    function CreateUser() {
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
                axios.post('http://localhost:3000/user', {id: userName, "Username": userName, "Password": password, "Name": name, "Gender": gender}).then(res => {
                    alert("User successfully created!")
                })
            }
        })
    }
    
    return (
        <div className='Sign-up-form'>
            <h3>Sign Up to create a new account. It's free :)</h3>
            <fieldset>
                <legend>First Name:</legend>
                <input type='text' value={name.firstName} onChange={e => setName({...name, firstName: e.target.value})} />
            </fieldset><br/>

            <fieldset>
                <legend>Last Name:</legend>
                <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value})} />
            </fieldset><br/>
            
            <fieldset>
            <legend>Gender:</legend>
                <input name='gender' type='radio' value='male' checked={gender === 'male'} onChange={e => setGender(e.target.value)} />Male
                <input name='gender' type='radio' value='female' checked={gender === 'female'} onChange={e => setGender(e.target.value)} />Female
                <input name='gender' type='radio' value='other' checked={gender === 'other'} onChange={e => setGender(e.target.value)} />Other
            </fieldset><br/>

            <fieldset>
                <legend>Username:</legend>
                <input type='email' value={userName} onChange={e => setUserName(e.target.value)} />
            </fieldset><br />

            <fieldset>
                <legend>Password:</legend>
                <input type='password' value={password} onChange={e => setPassword(e.target.value)} />
            </fieldset><br />

            <button onClick={CreateUser} >Sign Up</button>

            <hr></hr>

            <p>Already a user? <Link to='/'>Login</Link></p>
        </div>
    )

}

export default SignUp