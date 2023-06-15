import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import{ToastContainer, toast} from 'react-toastify';
import axios from 'axios';
export default function Login() {

    
    const [values,setValues] = useState({
        email:"",
        password:"",
    })

    const handelSubmit = async (e) => {
        e.preventDefault();
        try{
            const {data} = await axios.post("http://localhost:8080/login",{
                ...values,
            });
        }catch(err){
            console.log(err);
        }
    }
  return (

    <div className='container'>
        <h2>Login Account</h2>
        <form onSubmit={(e) => handelSubmit(e)}>
            <div>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder='Email'onChange={(e)=>setValues({...values,[e.target.name]: e.target.va})}/>
            </div>
            <div>
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder='password'onChange={(e)=>setValues({...values,[e.target.name]: e.target.va})}/>
            </div>
            <button type='submit'>Submit</button>
            <span>
                Not have a Account? <Link to="/register">Register</Link> it
            </span>
            <span>
                Forgot Password? <Link to="/forgot">Forgot</Link> it
            </span>
        </form>
        <ToastContainer></ToastContainer>
    </div>
  )
}
