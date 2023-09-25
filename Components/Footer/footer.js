import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {BsFacebook,BsInstagram,BsTwitter} from 'react-icons/bs'
function Footer() {
  return (
    <div className=' container w-1 fixed-bottom'>
      <hr></hr>
      <footer className=' flex-wrap justify-content-between '>
        <div className='row'>
          <div className='col-sm-4'>
            <p className="text-muted" style={{display:"block"}}>© 2025 Graduate, Inc</p>
          </div>
          <ul className='nav col-sm-4 justify-content-end list-unstyled d-flex'>
            <li className='ms-3'><BsFacebook/></li>
            <li className='ms-3'><BsInstagram/></li>
            <li className='ms-3'><BsTwitter/></li>
          </ul>
          <ul className='nav col-sm-4 justify-content-end list-unstyled d-flex'>
            <li className='ms-3'><Link to='/features'className='flinks'>Features</Link></li>
            <li className='ms-3'><Link to='/pricing' className='flinks'>Pricing</Link></li>
            <li className='ms-3'><Link to='/about-us' className='flinks'>About</Link></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}

export default Footer