import React, { useState } from 'react'
import axios from 'axios';

const Login = () => {
    const [state,setState]=useState({
        userName:"",
        password:""
    });

    const handleClick=()=>{
        axios.post("http://localhost:8090/auth/login",state).then(result=>{
            console.log(result);
            localStorage.setItem("token",result.data.token);
        }).catch(err=>{
            console.log(err);
        })

    }
    const handleChange=(event)=>{
        setState({
        ...state,[event.target.name]:event.target.value
        })
    }
  return (
    <div>

        <input  type='text' name='userName' placeholder='Username' onChange={handleChange}/>
        <input type='password' name='password' placeholder='Password' onChange={handleChange}/>
        <button onClick={handleClick}>
            Signin
        </button>
    </div>
  )
}

export default Login