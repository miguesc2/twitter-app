import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import '../../assets/styles/registrationAndLoginCss/Login.css'
import { baseUrlLogin, baseUrlPosts } from '../../services/urls';
import { store } from '../../store';
import { loginrequest } from '../../actions/action';

function LoginPage(props, { twittericon }) {
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
      props.loginrequest(response)
      localStorage.setItem('userLogin', JSON.stringify(response))
      
      history.push("/home")
    })
    .catch((error) => {
      //console.log(error.response.data);
      console.log(error);
    });
  }

  const [buttonNext, setButtonNext] = useState("signup__contain_nextbutton")
  const [booleann, setBooleann] = useState(false);
  const [valueClass, setValueClass] = useState("signup__contain_input")
  const [valueClassPassw, setValueClassPassw] = useState("signup__contain_input signup__contain_input--password")
  const FunctionAlert = () => {
    setBooleann(true)
    setValueClass("signup__contain_noInput")
    setValueClassPassw("signup__contain_input signup__contain_input--password")
  }
  const FunctionAlertPassw = () => {
    setBooleann(false)
    setValueClassPassw("signup__contain_noInput signup__contain_input--password")
    setValueClass("signup__contain_input")
  }


  return (
    <div className="signup__container">
      <div className="signup__container_main">
        <img src={twittericon} alt="" />
      
        <div className='signup__iconsTop'>
          <div className="signup__contain--bird">
            <Link to="/" className='signup__pleft'>
                <svg viewBox="0 0 40 40" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
                  <g fill="">
                    <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z" />
                  </g>
                </svg>
            </Link>
          </div>

          <div className="signup__contain--bird">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
              <g fill="rgba(29,161,242,1.00)">
                <path d={ twittericon } />
              </g>
            </svg>
          </div>
        </div>

        <div className="signup__contain_texts">
          <h1>Sign in to Twitter</h1>

          <form className="signup__contain_form" onSubmit={ handleSubmit } id='CreateForm'>
            <div className={ valueClass }>
              <label htmlFor="nameInput">Name</label>
              <input maxLength="50" type="text" id="nameInput" required onChange={ handleInput } name="username" onClick={ FunctionAlert } className='focusss' />
            </div>

            <div className={ valueClassPassw }>
              <label htmlFor="passwordInput">Password</label>
              <input type="password" id="passwordInput" required onChange={ handleInput } name="password" autoComplete="on" onClick={ FunctionAlertPassw } />
            </div>
          </form>
        </div>
        <label className="signup__contain_nextNobutton">
          <input type="submit" value="Log in" form='CreateForm' />
        </label>

        <div className="login__contain_ancla">
          <a href="#">Did you forget your password? · </a>
          <a href="/signup">Sign up on Twitter</a>
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

const mapDispatchToProps = {
  loginrequest
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage)
