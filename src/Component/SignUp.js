import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import {Link} from 'react-router-dom';
import  validation from './SignUpValidation';



const SignUp=()=>{
    const [values,SetValues]=useState({
        email:'',
        password:''
    })
    const[errors,setErrors]= useState({})
    const handleInput=(event)=>{
      SetValues(prev => ({...prev, [event.target.name]: [event.target.values]}))}

const handleSubmit=(event)=>{
    event.preventDefault();
    setErrors(validation(values));}
    return(

        <>
    <Navbar />
    
<h1>Are you already an Admin! Connect here!</h1>
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>
    
<div className='bg-white p-3 rounded w-25'>
  <h2>Log In</h2>
    <form action="" onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email"> <strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name='email'
            onChange={handleInput} className='form-control rounded-0'/>
             {errors.email && <span className="text-danger"> {errors.email} </span>}
              </div>  
              <div className="mb-3">
              <label htmlFor="password"> <strong>Password</strong></label>
              <input type="password" placeholder='Enter password' name='password'
               onChange={handleInput} className='form-control rounded-0'/>
             {errors.password && <span className="text-danger"> {errors.password} </span>}
              </div>


              
              <button type="submit" className='btn btn-success w-100 rounded-0'> <strong>Log in</strong></button>
            
              <p >You are agree to our terms and policies</p>
              <Link to="/Register">
              <button type="Submit" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> <strong>Create an Account</strong></button>
              </Link>
        
    </form>
</div>
</div>

    
   </> 
    )  
}

 
export default SignUp;



