import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import Session from 'react-session-api';

// const fs = require('fs');
// const writeFileP = require("write-file-p");
// console.log(fs);


export const Register =(props) => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        if(email===""||pass===""||name===""){
            alert("Fill in all details before clicking 'Register' button");
        }else{
            Session.set("loggedInUser",email);
            Session.set(email+"_email",1);
            Session.set(email+"_name",name);
            Session.set(email+"_pass",pass);
            props.onFormSwitch('myprofile');
        }

    }


    return (
        <div className="auth-form-container">
                        <h2>Register</h2>

        <form  className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type= "email" placeholder="youemail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type= "password" placeholder="********" id="password" name="password"/>
            <button  onClick={(e) => handleSubmit}>Register</button>
        </form>
        <button  className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Log in here.</button>
        </div>
    )
}