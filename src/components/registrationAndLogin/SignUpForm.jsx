import React, { useEffect, useState } from 'react'
import axios from 'axios'
import useForm from '../../hooks/useForm';
import { baseUrlUser } from '../../services/urls';

function SignUpForm({ months }) {
    const { arrayNumbers, arrayYears, handleInput, nameinput } = useForm()
    const [ buttonNext, setButtonNext ] = useState("signup__contain_nextbutton")
    const [ requestResult, setrequestResult ] = useState("")
    const [ booleann, setBooleann ] = useState(false);
    const [ valueClass, setValueClass ] = useState("signup__contain_input")
    const [ valueClassPassw, setValueClassPassw ] = useState("signup__contain_input signup__contain_input--password")

    const handleSubmit = async(e) => {
        e.preventDefault()
        try { 
          const res = await axios.post( baseUrlUser, nameinput)
          setrequestResult(res.statusText)
        } 
        catch(error) { 
          setrequestResult(error.response.statusText)
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
          if ( nameinput.length != 0 ) {
            if ( nameinput.username.length >= 4 && nameinput.password.length >= 4 ) {
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
    )
}

export default SignUpForm