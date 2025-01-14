import React, { useState, useEffect } from "react";
import {useNavigate} from 'react-router-dom'

const SignUp =()=>{
const [name, setName]=useState("");
const [email, setEmail]=useState("");
const [password, setPassword]=useState("");
const navigate = useNavigate();


useEffect(()=>{
    const auth =localStorage.getItem('user');
    if(auth){
        navigate('/')
    }
},[])


const collectionData=async()=>{
    console.warn(name,email,password);

    //API call
    let result = await fetch('http://localhost:5000/register',{
        method:'post',
        body: JSON.stringify({name,email,password}),
        headers:{
            'Content-type':'application/json'
        },
    });
    result = await result.json()
    console.warn(result);

    //To store data in local storage
    localStorage.setItem("user",JSON.stringify(result));
    navigate('/')
}


    return (
        <div className="ragister">
            <h1>Register</h1>
            <input className="inputBox" type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>

            <input className="inputBox" type="text" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email"/>

            <input className="inputBox" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="password"/>

            <button onClick={collectionData} className="signUpButton">sign Up</button>
        </div>
    );
}

export default SignUp;