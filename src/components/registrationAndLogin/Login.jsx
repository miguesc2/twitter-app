import axios from 'axios';
import { useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import '../../assets/styles/registrationAndLoginCss/Login.css'
import { baseUrlLogin } from '../../services/urls';
import { store } from '../../store';

function LoginPage({ twittericon }) {
  const [nameinput, setNameinput] = useState('');
  
  const handleInput = event => {
    setNameinput({
      ...nameinput,
      [event.target.name]: event.target.value
    })
  }

  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault()
    let url = baseUrlLogin
    
    axios.post(url, nameinput)
    .then(response => {
      store.dispatch({ type: 'loginrequest', payload: response })      
      console.log(response)
      history.push("/home")
    })
    .catch((error) => {
      console.log(error.response.data);
    });
  }

  return (
    <div className="login__container">
      <div className="login__container_main">
        <div className="login__contain--bird">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="login__main--svg" alt="registerSvg">
            <g fill="rgba(29,161,242,1.00)">
              <path d={ twittericon } />
            </g>
          </svg>
        </div>
        
        <div className="login__contain_texts">
          <h1>Sign in to Twitter</h1>
          <form className="login__contain_form" onSubmit={ handleSubmit }>
            <div className="login__contain_input">
              <label htmlFor="nameInput">username</label>
              <input type="text" id="nameInput" required name="username" onChange={ handleInput } />
            </div>
            <div className="login__contain_input login__contain_input--password">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" id="passwordInput" required name="password" autoComplete="on" onChange={ handleInput } />
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
    twittericon: state.images.twittericon,
  }
}

export default connect(mapStateToProps, null)(LoginPage)
