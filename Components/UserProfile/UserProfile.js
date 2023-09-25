import React, { useContext } from 'react'
import { loginContext } from '../../Contexts/loginContext'
import { Outlet ,Link} from 'react-router-dom'
import {BsFillCartFill} from 'react-icons/bs'
function UserProfile() {
  const [currentUser,error,userLoginStatus,login,logout]=useContext(loginContext)
  return (
    <div className='container-fluid'>
      <div className='navbar justify-content-center g-4'>
        <p className='p p-dark display-5 mx-3' style={{display:"inline"}}>Welcome</p>
        <p className='mt-3 mx-3'>{currentUser.username}</p>
        <Link to='manage-account' className='links mx-3'>Manage Account</Link>
        
      </div>
    <h4 className='products'>To view your products, click <span className='here here-secondary'><Link className='' to='/products' style={{textDecoration:"none"}}>here</Link></span></h4>
    </div>
  )
}

export default UserProfile