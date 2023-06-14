import React from "react";
import Session from 'react-session-api';

export const MyProfile =(props) => {
    let isEditing=false;
    let showPassword=false;

    let sEmail=Session.get("loggedInUser");
    let sName=Session.get(sEmail+"_name");
    let sPassword=Session.get(sEmail+"_pass");
    const togglePasswordVisibility=() => {
        if(!showPassword){
            document.getElementById("pPassword").type="text";
        } else {
            document.getElementById("pPassword").type="password";

        }
        showPassword=!showPassword;
    }
    const toggleTextEditable=() => {
        console.log("reached here");
        console.log("true: "+(typeof Session.get("haha")==='undefined')); 
        if(!Session.get("haha")){
            console.log("made it to here");
        }
        if(!isEditing){

            document.getElementById("pName").removeAttribute("disabled");
            document.getElementById("pEmail").removeAttribute("disabled");
            document.getElementById("pPassword").removeAttribute("disabled");
            document.getElementById("saveChanges").removeAttribute("disabled");
        }
        isEditing=true;
    }

    const saveChanges= ()=>{
        let name=document.getElementById("pName").value;
        let email=document.getElementById("pEmail").value;
        let pass=document.getElementById("pPassword").value;
        Session.set("email",email);
        Session.set(email+"_name",name);
        Session.set(email+"_pass",pass);
        sName=name;
        sEmail=email;
        sPassword=pass;
        document.getElementById("pName").setAttribute("disabled",true);
        document.getElementById("pEmail").setAttribute("disabled",true);
        document.getElementById("pPassword").setAttribute("disabled",true);
        document.getElementById("saveChanges").setAttribute("disabled",true);
        isEditing=false;
    }

    const logout = () => {
        Session.set("loggedInUser","");
        props.onFormSwitch('login');
    }


    return (
    <div>
        <h2>My Profile</h2>
        <div>My name: <input id="pName" type="text" size="20" defaultValue={sName} disabled /></div>
        <div>My email: <input id="pEmail" type="text" size="20" defaultValue={sEmail} disabled /></div>
        <div>My password: <input id="pPassword" type="password" size="20" defaultValue={sPassword} disabled />&thinsp;&thinsp;<button onClick={togglePasswordVisibility}>Show password</button></div>
        <button id="editInfo" onClick={toggleTextEditable}>Edit information</button>&thinsp;&thinsp;
        <button id="saveChanges" onClick={saveChanges}>Save changes</button>
        <button id="logout" onClick={logout}>Log out</button>
    </div>
    )
}