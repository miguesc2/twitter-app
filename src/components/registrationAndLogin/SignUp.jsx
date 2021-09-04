import { useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import '../../assets/styles/registrationAndLoginCss/SignUp.css'
import { baseUrlUser } from '../../services/urls';

function LoginPage({ months, twittericon }) {
  const arrayNumbers = []
  for(let i = 1;i <= 31;i++){
    arrayNumbers.push(i)
  }
  arrayNumbers.unshift(``)

  const arrayYears = []
  for(let i = 1901;i <= 2021;i++){
    arrayYears.push(i)
  }
  arrayYears.push(``)
  arrayYears.reverse()

  const [nameinput, setNameinput] = useState('');

  const handleInput = event => {
    setNameinput({
      ...nameinput,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async(e) => {
    e.preventDefault()
    try { await axios.post( baseUrlUser, nameinput,) } 
    catch(error) { 
      console.log(error)
    }
  }

  return (
    <div className="signup__container">
      <div className="signup__container_main">
        <div className="signup__contain--bird">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
            <g fill="rgba(29,161,242,1.00)">
              <path d={ twittericon } />
            </g>
          </svg>
        </div>
        
        <div className="signup__contain_texts">
          <h1>Creat your account</h1>
          <form className="signup__contain_form" onSubmit={ handleSubmit }>
            <div className="signup__contain_input">
              <span className="signup__contain_span">
                { nameinput === '' ? 0 : nameinput.username.length }/50
              </span>
              <label htmlFor="nameInput">Name</label>
              <input maxLength="50" type="text" id="nameInput" required onChange={ handleInput } name="username" />
            </div>
            <div className="signup__contain_input signup__contain_input--password">
              <label htmlFor="passwordInput">Password</label>
              <input type="password" id="passwordInput" required onChange={ handleInput } name="password" autoComplete="on" />
            </div>

            <div className="signup__contain_ancla">
              <a href="/">Use email</a>
            </div>

            <div className="signup__contain_birthday">
              <h2>Date of birth</h2>
              <p>This information will not be public. Please confirm your own age, even if this account is for a business, a pet, or something else.</p>
            </div>

            <div className="signup__contain_dropdown">
              <div className="signup__dropdown_item signup__dropdown_item-one">
                <select name="" id="1">
                  <option value="0" ></option>
                  {
                    months.map((month, index) => 
                      <option value="1" key={ index }>{month}</option>
                    )
                  }
                </select>
              </div>
              <div className="signup__dropdown_item signup__dropdown_item-two">
                <select name="" id="2">
                  {
                    arrayNumbers.map((number, index) => 
                      <option value="1" key={ index }>{number}</option>
                    )
                  }
                </select>
              </div>
              <div className="signup__dropdown_item signup__dropdown_item-three">
                <select name="" id="3">
                  {
                    arrayYears.map((number, index) => 
                      <option value="1" key={ index }>{number}</option>
                    )
                  }
                </select>
              </div>
            </div>

            <label className="signup__contain_nextbutton">
              <input type="submit" value="Next" />
            </label>
          </form>
        </div>
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

export default connect(mapStateToProps, null)(LoginPage)
