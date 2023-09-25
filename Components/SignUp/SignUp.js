import React from 'react'
// import './SignUp.css'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios';
function SignUp() {
  const {register,handleSubmit,formState:{errors}}=useForm();
  //Error useState
  const [error,setError]=useState("")
  const navigate=useNavigate();
  const submitRegister=(newuserdata)=>{
    //post request
    axios.post('http://localhost:4000/user-api/register',newuserdata)
    .then((response)=>{
        if(response.status===201)
        {
          //navigate the user
          navigate('/sign-in')
        }
        if(response.status!==201)
        {
          setError(response.data.message)
        }
    })
    .catch(err=>{
      //client was given a error response
      if(err.response)
      {
        setError(err.message)
      }
      //client never received a response
      else if(err.request)
      {
        setError(err.message)
      }
      else{
        setError(err.message)
      }
    })
  }
  return (
    <div className='row container-fluid'>
      <div className='col-sm-8'>
        <img src='https://plus.unsplash.com/premium_photo-1684225765349-072e1a35afc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80'
        alt='not found' width='850rem '/>
      </div>
      <div className='col-sm-4'>
      <h2 className='text-center'>Register</h2>
      <div className='col-sm-9 col-md-7 mx-auto'>
        <hr/>
        {
          error.length!==0&&<p className='text-danger'>{error}</p>
        }
        <form onSubmit={handleSubmit(submitRegister)}>
          <div className='form-group mb-3'>
            <label htmlFor='username' >Username</label><br/>
            <input type='text' {...register("username",{required:true,minLength:4})} id='username' className='form-control bg-white' style={{broder:"none"}} autocomplete="on"></input>
            {
              errors.username?.type==="required"&&<span className='text-danger'>*this field is required</span>
            }
            {
              errors.username?.type==="minLength"&&<span className='text-danger'>*minimum 4 characters please</span>
            }
          </div>
          <div className='form-group mb-3'>
            <label htmlFor='password' >Password</label><br/>
            <input type='password' {...register("password",{required:true})} id='password' className='form-control bg-white' style={{broder:"none"}} autocomplete="on"></input>
            {
              errors.password?.type==="required"&&<span className='text-danger'>*this field is required</span>
            }
          </div>
          <div className='mb-3 form-group'>
            <label htmlFor='email'>E-mail</label>
            <input type='email' {...register("email",{required:true})} id='email' className='form-control' autocomplete="on"></input>
            {
              errors.email?.type==="required"&&<span className='text-danger'>*this field is required</span>
            }
          </div>
          <div className= 'text-center'><button className='btn btn-primary w-100' onClick={submitRegister}>Create</button></div>
        </form>
        <p className='mt-2'>Have an account? <span><Link className='link' to='/sign-in'>Login</Link></span></p>
      </div>
      </div>
    </div>
  )
}

export default SignUp