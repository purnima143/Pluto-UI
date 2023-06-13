import React, { useRef, useState } from 'react'
import './Container.css'
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp'
const Container = () => {
    const[login,setLogin] = useState(true);

    const handleClick = () =>{
        setLogin(!login);

        containerRef.current.classList.toggle("active");
    }
    const containerRef = useRef(null);

  return (
    <div className='container' ref={containerRef}>
        <Login />
        <div className='side-div'>
            <div className='para'><p>{login? "Don't have account ?": "Alread have a account !"}</p></div>
            <div className='bu'><button type='button' className='btn' onClick={handleClick} >{login ? "Signup" : "Login"}</button></div>
        </div>
        <SignUp />
    </div>
  )
}

export default Container