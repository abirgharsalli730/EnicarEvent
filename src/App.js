import React from "react";
import { BrowserRouter,Routes, Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';
import Home from './Component/Home';
import Events from './Component/Events';
import Contact from './Component/Contact';
import Navbar from './Component/Navbar';
import Register from "./Component/Register";
import SignUp from "./Component/SignUp";
import SignUpValidation from "./Component/SignUpValidation";
import Admin from "./Component/Admin";
import Add from "./Component/Add";
import Edit from "./Component/Edit";


const App=()=>{

  return(
    <div className="App"
    
    style={{
      
      backgroundColor: "LightCyan"	,
      backgroundPosition: 'center',
    }}
  >

   <switch>
   <Routes>
    <Route exact path="/" Component={Home}/>
    <Route path="/Events" Component={Events}/>
    <Route path="/Contact" Component={Contact}/>
    <Route path="/Navbar" Component={Navbar}/>
    <Route path="/SignUp" Component={SignUp}/>
    <Route path="/Register" Component={Register}/>
    <Route path="/Admin" Component={Admin}/>
    <Route path="/create" Component={Add}/>
    <Route path='update/: id' Component={Edit}/>
    
    </Routes>
   </switch>
    </div>

  )
}
export default App;
