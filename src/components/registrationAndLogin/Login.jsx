import axios from 'axios';
import { connect } from 'react-redux';
import { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { baseUrlLogin } from '../../services/urls';
import { loginrequest } from '../../actions/action';
import useForm from '../../hooks/useForm';
import '../../assets/styles/registrationAndLoginCss/Login.css'

function LoginPage(props) {
  const { FunctionAlert, FunctionAlertPassw, valueClass, valueClassPassw, handleInput, nameinput } = useForm()
  const history = useHistory()
  const [ issues, setIssues ] = useState(null)
  const [ message, setMessage ] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    axios.post( baseUrlLogin, nameinput )
    .then( response => {
      props.loginrequest( response )
      localStorage.setItem('userLogin', JSON.stringify( response ))
      history.push("/home")
    }).catch(error => { setIssues( error.message ) });
  }

  useEffect(() => {
    if ( issues !== null ) {
      if ( issues.substring(issues.length - 3) === '400' ) {
        setMessage('Make sure the user is created, or make sure the username does not contain spaces')
      }
      if ( issues.substring(issues.length - 3) === '409' ) {
        setMessage('Please click login again.')
      }
    }
  }, [ issues ])
 
  return (
    <div className="signup__container">
      <div className="signup__container_main">
        <img src={ props.twittericon } alt="imageNotFound" />
      
        <div className='signup__iconsTop'>
          <div className="signup__contain--bird">
            <Link to="/" className='signup__pleft'>
                <svg viewBox="0 0 40 40" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
                  <g>
                    <path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z" />
                  </g>
                </svg>
            </Link>
          </div>

          <div className="signup__contain--bird">
            <Link to="/">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
                <g fill="rgba(29,161,242,1.00)">
                  <path d={ props.twittericon } />
                </g>
              </svg>
            </Link>
          </div>
        </div>

        <div className="signup__contain_texts">
          <h1>Sign in to Twitter</h1>
          <span className="alertMessage">{ message }</span>

          <form className="signup__contain_form" onSubmit={ handleSubmit } id='CreateForm'>
            <div className={ valueClass }>
              <label htmlFor="nameInput">Name</label>
              <input 
                maxLength="50" 
                type="text" 
                id="nameInput"
                required 
                onChange={ handleInput } 
                name="username" 
                onClick={ FunctionAlert } 
                className='focusss'
              />
            </div>

            <div className={ valueClassPassw }>
              <label htmlFor="passwordInput">Password</label>
              <input 
                type="password" 
                id="passwordInput"
                required 
                onChange={ handleInput } 
                name="password" 
                autoComplete="on" 
                onClick={ FunctionAlertPassw }
              />
            </div>
          </form>
        </div>

        <label className="signup__contain_nextNobutton">
          <input type="submit" title="double click" value="Log in" form='CreateForm' />
        </label>


        <div className="login__contain_ancla">
          <a href="#x" style={{ cursor: 'default'}}>Did you forget your password? · </a>
          <a href="/signup">Sign up on Twitter</a>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({ twittericon: state.images.twittericon })
const mapDispatchToProps = { loginrequest }

export default connect( mapStateToProps, mapDispatchToProps )( LoginPage )
