import { useState } from 'react'
import { connect } from 'react-redux';
import axios from 'axios'
import '../../assets/styles/SignUp.css'
import { baseUrl } from '../../services/notes';

function LoginPage({ months }) {
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
    try { await axios.post( baseUrl, nameinput,) } 
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
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
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
  }
}

export default connect(mapStateToProps, null)(LoginPage)
