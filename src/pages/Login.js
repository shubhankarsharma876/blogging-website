import React from 'react'
import {auth,provider} from "../firebase-config"
import {signInWithPopup} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
//we will be importing the useNavigate since after login we need them to get redirected to the home page

function Login({setIsAuth}) {
  let navigate= useNavigate();

  const signInWithGoogle =() =>{
        signInWithPopup(auth,provider).then((result)=>{
        // it will preserve the login if we close the browser then also
        localStorage.setItem("isAuth",true);
        setIsAuth(true);
        navigate("/");
      })
  }
  return (
    <div className='loginPage'>
      <p>
        Sign In With Google to Continue
      </p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}> Sign in with Google</button>
    </div>
  )
}

export default Login