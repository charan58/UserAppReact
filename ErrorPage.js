import React from 'react'
import { useRouteError } from 'react-router-dom'
function ErrorPage() {
  const error=useRouteError(); 
  return (
    <div className='text-center m-3'>
      <p>{error.data}</p>
    </div>
  )
}

export default ErrorPage