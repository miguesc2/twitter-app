import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function RegistrationPageButtons({ twittericon, googleicon, appleicon }) {
  const arrayTexts = [
    "Sign in to Twitter", 
    "Sign in with Google (not avaible)", 
    "Sign in with Apple (not avaible)", 
    <Link to="/login" id="registration__noDecoration"> <span>Login with User</span> </Link>, 
    "You do not have an account?", 
    ""
  ]

  const arrayTextsOriginals = [
    "Join Twitter today",
    "Sign up with Google (not avaible)",
    "Sign up with Apple (not avaible)",
    <Link to="/signup" id="registration__noDecoration"> <span>Register as a New User</span> </Link>,
    "Do you already have an account?",
    <div className="register__main--icons register__main__icons--links">
      <small>By registering, you accept the
        <a href="/"> Terms of Service</a> and the <a href="/"> Privacy Policy</a>, including the
        <a href="/"> Use of Cookies</a>.
      </small>
    </div>
  ]

  const [ textChange, setTextchange ] = useState(arrayTextsOriginals)
  
  const changeTexts = (e) => {
    e.preventDefault()
    textChange[0] === "Join Twitter today" ? setTextchange(arrayTexts) : setTextchange(arrayTextsOriginals)
  }

  return (
    <div className="register__container--main">
      <svg viewBox="0 0 24 24" aria-hidden="true" className="register__main--svg" alt="registerSvg">
        <g fill="rgba(29,161,242,1.00)">
          <path d={ twittericon } />
        </g>
      </svg>
      
      <h1 className="mb-4">What is happening now</h1>
      <h2>{ textChange[0] }</h2>
      
      <div className="register__container_main mt-4">
        <div className="register__main--icons">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="register__main_icon--svg" alt="registerSvg">
            <g>
              <path fill={ googleicon.colors[0] } d={ googleicon.paths[0] } />
              <path fill={ googleicon.colors[1] } d={ googleicon.paths[1] } />
              <path fill={ googleicon.colors[2] } d={ googleicon.paths[2] } />
              <path fill={ googleicon.colors[3] } d={ googleicon.paths[3] } />
            </g>
          </svg>
          <span>{ textChange[1] }</span>
        </div>

        <div className="register__main--icons">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="register__main_icon--svg" alt="registerSvg">
            <g fill="black">
              <path d={ appleicon } />
            </g>
          </svg>
          <span>{ textChange[2] }</span>
        </div>

        <div className="register__main--icons register__main_icons-Link"> { textChange[3] } </div>

        { textChange[5] }

        <div className="register__main--icons register__main__icons--links">
          <p>{ textChange[4] } <a href="/login" onClick={ changeTexts }>Log in</a></p>
        </div>
      </div>
    </div> 
  )
}

const mapStateToProps = state => {
  return {
    twittericon: state.images.twittericon,
    googleicon: state.images.googleicon,
    appleicon: state.images.appleicon,
  }
}
  
export default connect(mapStateToProps, null) (RegistrationPageButtons)