import React, { useState } from 'react';
import '../common.css'

const Main = () => {
  return (
    <div className='container'>
      <img className='main-background' src='pages/background.png'/>
      <img className='main-logo' src='driftlogo.svg' />
      <p className='main-start-adventure-text'>your next adventure awaits</p>
      <button className='main-login-button'> sign up </button>
      <button className='main-login-button-2'> login </button>
    </div>
  )
}

export default Main;
