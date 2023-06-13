import React from 'react'
import './Login.css'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login</h1>
        <form>
            <input type={'email'} placeholder={'E-mail'} />
            <input type={'password'} placeholder={'Password'} />
            <button type={'subomit'}>Login</button>
        </form>
    </div>
  )
}

export default Login