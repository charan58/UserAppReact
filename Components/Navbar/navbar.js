import React ,{useContext}from 'react'
import './navbar.css'
import {Link} from 'react-router-dom'
import { loginContext } from '../../Contexts/loginContext'
function Navbar() {
  const [currentUser,error,userLoginStatus,login,logout]=useContext(loginContext)

  // const activeLink={
  //   color:"#ffaa00",
  //   fontSize:"1.2rem",
  //   fontWeight:"bold"
  // }
  // const inActiveLink={
  //   color: "#EEF0F2",
  //   fontSize:"1.2rem"
  // }
  return (
    <div className='row m-2'>
      <div className=' img-navigation col-sm-4 col-xs-12 top-left '>
        <Link><img  src='https://blog.paessler.com/hubfs/blog/2018-10/it-user-types.png
        ' alt='web-app-logo' width='80.2rem' className='m-2'/>
        </Link>
        
      </div>
      <div className='col-sm-8 col-xs-12'>
          <div className='top-navigation align-right '>
            <Link to='/' className='links'>Home</Link>
            <p>|</p>
            <Link to='/sign-up' className='links'>Signup</Link>
            <p>|</p>
            {
              !userLoginStatus?(<Link to='/sign-in'className='links'>SignIn</Link>)
              :
              (<Link to='/sign-in' className='links' onClick={logout}>SignOut</Link>)
            }
            
            
          </div>
      </div>
      <hr/>
    </div>
  )
}

export default Navbar