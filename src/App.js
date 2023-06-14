import React, { useState } from "react";

import logo from './logo.svg';
import './App.css';
import {Login} from "./Login";
import {Register} from "./Register";
import {MyProfile} from "./MyProfile";

import Session from 'react-session-api';
import { BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  const [currentForm, setCurrentForm] = useState('login');

  const toggleForm = (formName) => {
    console.log(formName);
    setCurrentForm(formName);
  }
   return (
    <div className="App">

      {
        // currentForm === "login" ? <Login  onFormSwitch={toggleForm} /> : <Register  onFormSwitch={toggleForm}/>
        currentForm === "login" ? 
        (<Login  onFormSwitch={toggleForm} /> )
        : 
        (currentForm === "register"?
        <Register  onFormSwitch={toggleForm}/>
        :
        <MyProfile   onFormSwitch={toggleForm}/>
        )
        
        
      }

    </div>
  ); 
/*   return (
  <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route index element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="dashboard" element={<Dashboard />} />
    </Routes>
  </BrowserRouter>
</React.StrictMode>
  ); */
}

export default App;
