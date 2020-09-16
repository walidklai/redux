import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { fakeAuth } from './../App'

function Login(props) {
    const [redirecting, setRedirecting] = useState(false)
    const login = () => {
        fakeAuth.authentificate(() => {
            setRedirecting(true)
        })
    }
    const {from}=props.location.state ||{from:{pathname:'/'}}
    return (
        <div>
            {redirecting ?
                <Redirect to={from} /> :
                <div>
                    <p>you must login to view the page {from.pathname}</p>
                    <button onClick={login}>login</button>
                </div>
            }

        </div>
    )
}

export default Login
