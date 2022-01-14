import { useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import '../../assets/styles/registrationAndLoginCss/SignUp.css'
import { baseUrlUser } from '../../services/urls';
import { Link, Redirect } from 'react-router-dom';
import { useEffect } from 'react';

function SignUp({ months, twittericon }) {
  const arrayNumbers = []
  for(let i = 1;i <= 31;i++){
    arrayNumbers.push(i)
  }

  const arrayYears = []
  for(let i = 1901;i <= 2021;i++){
    arrayYears.push(i)
  }
  arrayYears.reverse()

  const [nameinput, setNameinput] = useState({username: '', password: ''});
  const [booleann, setBooleann] = useState(false);
  const [valueClass, setValueClass] = useState("signup__contain_input")
  const [valueClassPassw, setValueClassPassw] = useState("signup__contain_input signup__contain_input--password")
  const [buttonNext, setButtonNext] = useState("signup__contain_nextbutton")
  const [requestResult, setrequestResult] = useState("")
  console.log(requestResult)

  const handleInput = event => {
    setNameinput({
      ...nameinput,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try { 
      const res = await axios.post( baseUrlUser, nameinput)
      console.log(res.statusText)
      setrequestResult(res.statusText)
    } 
    catch(error) { 
      setrequestResult(error.response.statusText)
      //setrequestResult(res.statusText)
    }
  }

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

  useEffect(() => {
    function Analisis () {
      if(nameinput.length != 0) {
        if(nameinput.username.length >= 4 && nameinput.password.length >= 4) {
          setButtonNext("signup__contain_nextNobutton")
        }
        else{
          setButtonNext("signup__contain_nextbutton")
        }
      } 
      else {console.log("El valor es cero")}
    }
    Analisis()
  }, [nameinput])

  return (
    <div className="signup__container">
      <div className="signup__container_main">
      
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
          <h1>creat your account</h1>

          <form className="signup__contain_form" onSubmit={ handleSubmit } id='CreateForm'>
            <div className={ valueClass }>
              <label htmlFor="nameInput">Name</label>
              <input maxLength="50" type="text" id="nameInput" required onChange={ handleInput } name="username" onClick={ FunctionAlert } className='focusss' />
              { booleann === false ?  
                <span className="signup__contain_span"></span>
              :
                <span className="signup__contain_span">
                  { nameinput === '' ? 0 : nameinput.username.length }/50
                </span>
              }
            </div>

            <div className={ valueClassPassw }>
              <label htmlFor="passwordInput">Password</label>
              <input type="password" id="passwordInput" required onChange={ handleInput } name="password" autoComplete="on" onClick={ FunctionAlertPassw } />
            </div>

            <div className="signup__contain_ancla">
              <a href="#">Use email</a>
            </div>

            <div className="signup__contain_birthday">
              <h2>Date of birth</h2>
              <p>This information will not be public. Please confirm your own age, even if this account is for a business, a pet, or something else.</p>
            </div>

            <div className="signup__contain_dropdown">
              <div className="signup__dropdown_item signup__dropdown_item-one">
                <select name="" id="1" defaultValue={0}>
                  <option value="0" disabled="disabled">Month</option>
                  {
                    months.map((month, index) => 
                      <option value="1" key={ index }>{month}</option>
                    )
                  }
                </select>
              </div>
              <div className="signup__dropdown_item signup__dropdown_item-two">
                <select name="" id="2" defaultValue={0}>
                <option value="0" disabled="disabled">Day</option>
                  {
                    arrayNumbers.map((number, index) => 
                      <option value="1" key={ index }>{number}</option>
                    )
                  }
                </select>
              </div>
              <div className="signup__dropdown_item signup__dropdown_item-three">
                <select name="" id="3" defaultValue={0}>
                  <option value="0" disabled="disabled">Year</option>
                  {
                    arrayYears.map((number, index) => 
                    <option value="1" key={ index }>{number}</option>
                    )
                  }
                </select>
              </div>
            </div>

          </form>
        </div>

          {
            requestResult === "Created" ? <Redirect to="/login" /> :
              <label className={ buttonNext }>
                <input type="submit" value="Next" form='CreateForm' />
              </label>
          }
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    months: state.months,
    twittericon: state.images.twittericon,
  }
}

export default connect(mapStateToProps, null)(SignUp)
