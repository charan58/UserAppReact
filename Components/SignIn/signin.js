import React from 'react'
import { useEffect,useContext} from 'react'
import './signin.css'
import {useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { loginContext } from '../../Contexts/loginContext'
function SignIn() {
  const {register,handleSubmit,formState:{errors}}=useForm();

  const navigate=useNavigate();

  


  //login context
  const [currentUser,error,userLoginStatus,login,logout]=useContext(loginContext)
  

  const formSubmit=(userLogData)=>{
    login(userLogData)
  }


  useEffect(()=>{
    if(userLoginStatus===true)
    {
      navigate('/user-profile')
    }
    },[userLoginStatus])
  
  return (
    <div className='container-fluid row'>
      <div className='col-sm-8'>
        <img src='https://www.lifewire.com/thmb/r-YhjBsGO0xMsxnSHR6KWAOtHP8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1044887418-2c55ea6711c54fcf9171e8db427635b3.jpg' 
        alt='not found' width='750rem'/>
      </div>
      <div className='col-sm-4'>
      <h2 className='text-center p-2'>Login</h2>
      <div className='col-sm-9 col-md-7  mx-auto'>
        <hr/>
        {
          error.length!==0&&<p className='text-danger'>{error}</p>
        }
        <form onSubmit={handleSubmit(formSubmit)}>
          <div className='form-group mb-3'>
            <label htmlFor='username' >Username</label><br/>
            <input type='text' {...register("username",{require:true})} id='username' className='form-control bg-white' style={{broder:"none"}} autocomplete="on"></input>
          </div>
          <div className='form-group mb-3'>
            <label htmlFor='password' >Password</label><br/>
            <input type='password' {...register("password",{required:true})} id='password' className='form-control bg-white' style={{broder:"none"}} autocomplete="on"></input>
          </div>
          <div className='mb-3 text-center'><button className='btn btn-success w-100' onClick={formSubmit}>Login</button></div>
        </form>
        <p className=''>Don't have an account? <span><Link to='/sign-up' className='link'>SignUp</Link></span></p> 
      </div>
      </div>
    </div>
  )
}

export default SignIn