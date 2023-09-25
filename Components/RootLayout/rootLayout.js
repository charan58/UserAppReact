import React from 'react'
import Navbar from '../Navbar/navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../Footer/footer'
function rootLayout() {
  return (
    <div>
      <Navbar/>
      {/* placeholder */}
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default rootLayout