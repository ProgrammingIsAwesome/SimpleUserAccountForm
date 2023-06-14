import React, {useState} from "react";

import Session from 'react-session-api';

export const Login =(props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);

        let pEmail=Session.get(email+"_email");
        if(pEmail===1){
            console.log("reached here");
            let pPass=Session.get(email+"_pass");
            if(pass!==pPass){
                alert("Wrong password");
            }else{
                Session.set("loggedInUser",email);
                props.onFormSwitch('myprofile');
            }
        }else{
            alert("An account with this email does not exist.");
        }
        // console.log(Session.get())
    }

    
    return (
        <div className="auth-form-container">
            <h2>Login</h2>
        <form className="login-form" onSubmit= {handleSubmit}>
            
            <label htmlFor="email">email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="youemail@gmail.com" id="email" name="email"/>
            <label htmlFor="password">password</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password"/>
            <button type="submit">Log In</button>
            {/* <button onClick={logIn}>Log In</button> */}
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
        </div>
    )
}