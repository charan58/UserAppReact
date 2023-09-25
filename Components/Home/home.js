import React from 'react'

function home() {
  return (
    <div className='row '>
      <h1 className='text-center'>Home</h1> 
      <div className='col-sm-8 '>
        <img src='https://images.ctfassets.net/pdf29us7flmy/2FGoY1OTJEAy7M5myH5XgE/88a4e0fffa926bbcb89510a488690036/Submitting-a-writing-sample-for-job-FINAL-no-paper-02.jpg' 
        alt='not found' width='780rem'className='m-3'/>
      </div>
      <div className='col-sm-4'>
      
      <p className=' mt-5 display-5'>This is a Web App </p>
      <p className='text-lead'>(under development)</p>
      <h5 className='align-right'>-Developing by Charan Sulluru</h5>
      </div>
    </div>
  )
}

export default home