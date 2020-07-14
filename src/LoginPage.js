import React from "react"
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Login from "./Login"
import SignUp from "./SignUp"
import Background from "./Background-image.jpg"

function LoginPage() {

    return(
        <div style={{
            backgroundImage: `url(${Background})`,backgroundRepeat: 'no-repeat',width:'100%',height:'100%',backgroundSize: 'cover'
         }}>
            <BrowserRouter>
                <Switch>
                    <Route path='/' exact component={Login} />
                    <Route path='/SignUp' component={SignUp} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default LoginPage