import React from 'react'
import './SignUp.css'

const SignUp = () => {
  return (
    <div className='signup'>
        <h1>SignUp</h1>
        <form>
            <input type={'email'} placeholder={'E-mail'} />
            <input type={'password'} placeholder={'Password'} />
            <input type={'password'} placeholder={'Renter Password'} />
            <button type={'subomit'}>SignUp</button>
        </form>
    </div>
  )
}

export default SignUp