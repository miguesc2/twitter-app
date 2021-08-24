import { useState } from 'react'
import { connect } from 'react-redux';
//import axios from 'axios'
//import { baseUrl } from '../../services/notes';
import '../../assets/styles/Login.css'

function LoginPage() {
  const [nameinput, setNameinput] = useState('');

  const handleInput = event => {
    setNameinput({
      ...nameinput,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
  }

  return (
    <div className="login__container">
      <div className="login__container_main">
        <div className="login__contain--bird">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="login__main--svg" alt="registerSvg">
            <g fill="rgba(29,161,242,1.00)">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
            </g>
          </svg>
        </div>
        
        <div className="login__contain_texts">
          <h1>Sign in to Twitter</h1>
          <form className="login__contain_form" onSubmit={ handleSubmit }>
            <div className="login__contain_input">
              <label htmlFor="nameInput">phone, email or user</label>
              <input maxLength="50" type="text" id="nameInput" required onChange={ handleInput } name="username" />
            </div>
            <div className="login__contain_input login__contain_input--password">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" id="passwordInput" required onChange={ handleInput } name="password" autoComplete="on" />
            </div>

            <label className="login__contain_nextbutton">
              <input type="submit" value="Log in" />
            </label>

            <div className="login__contain_ancla">
              <a href="/">Did you forget your password? · </a>
              <a href="/">Sign up on Twitter</a>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    months: state.months,
  }
}

export default connect(mapStateToProps, null)(LoginPage)
