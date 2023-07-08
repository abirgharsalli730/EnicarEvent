import React, { useState } from "react";
import Navbar from "../Component/Navbar";
import {Link} from 'react-router-dom';
import validation from "./RegisterValidationForm";

const Register=()=>{
    const [values,SetValues]=useState({
        name:'',
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
        <h1>You can join us to become an admin with us!</h1>
<div className='d-flex justify-content-center align-items-center bg-primary vh-100'>

<div className='bg-white p-3 rounded w-25'>
<h2>Registration</h2>
    <form action="" onSubmit={handleSubmit}>
    <div className="mb-3">
            <label htmlFor="name"> <strong>Name</strong></label>
            <input type="text" placeholder='Enter Name' name="name"
             onChange={handleInput} className='form-control rounded-0'/>
                {errors.name && <span className="text-danger"> {errors.name} </span>}
              </div>
        <div className="mb-3">
            <label htmlFor="email"> <strong>Email</strong></label>
            <input type="email" placeholder='Enter Email' name="email"
             onChange={handleInput} className='form-control rounded-0'/>
             {errors.email && <span className="text-danger"> {errors.email} </span>}
              </div>  
              <div className="mb-3">
              <label htmlFor="password"> <strong>Password</strong></label>
              <input type="password" placeholder='Enter password' name="password"
              onChange={handleInput} className='form-control rounded-0'/>
                             {errors.password && <span className="text-danger"> {errors.password} </span>}
              </div>
              <button type="Submit" className='btn btn-success w-100 rounded-0'> <strong>Register</strong></button>
              <p >You are agree to our terms and policies</p>
              <Link to="/SignUp">
              <button type="Submit" className='btn btn-default border w-100 bg-light rounded-0 text-decoration-none'> <strong>Log In</strong></button>
              </Link>
        
    </form>
</div>
</div>

        </>
    )
}
export default Register;