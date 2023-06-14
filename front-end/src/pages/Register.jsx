import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{ToastContainer, toast} from 'react-toastify';
export default function Register() {

    
    const [values,setValues] = useState({
        email:"",
        password:"",
        confirm_password:"",        
    })

    const handelSubmit = (e) => {
        e.preventDefault();
    }
  return (

    <div className='container'>
        <h2>Register Account</h2>
        <form onSubmit={(e) => handelSubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Email'onChange={(e)=>setValues({...values,[e.target.name]: e.target.va})}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='password'onChange={(e)=>setValues({...values,[e.target.name]: e.target.va})}/>
            </div>
            <div>
                <label htmlFor="password">Confirm Password</label>
                <input type="password" name="confirm_password" placeholder='password'onChange={(e)=>setValues({...values,[e.target.name]: e.target.va})}/>
            </div>
            <button type='submit'>Submit</button>
            <span>
                Already have a Account?<Link to="/login">Login</Link>
            </span>
        </form>
        <ToastContainer></ToastContainer>
    </div>
  )
}