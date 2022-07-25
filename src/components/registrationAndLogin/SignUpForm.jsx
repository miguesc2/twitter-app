import React, { useEffect, useState } from 'react'
import { Redirect } from 'react-router-dom';
import useForm from '../../hooks/useForm';

function SignUpForm() {
    const [ buttonNext, setButtonNext ] = useState("signup__contain_nextbutton")
    const { arrayNumbers, arrayYears, handleInput, nameinput, FunctionAlert, FunctionAlertPassw, booleann, valueClass, valueClassPassw, handleSubmit, requestResult, months } = useForm()
    const [ message, setMessage ] = useState('')

    useEffect( () => {
        function Analysis () {
            if ( nameinput.username.length >= 4 && nameinput.password.length >= 4 ) {
                setButtonNext("signup__contain_nextNobutton")
            } else { setButtonNext("signup__contain_nextbutton") }
        }
        Analysis()
    }, [ nameinput ] )

    useEffect(() => {
        if ( requestResult.length !== 0 ) {
            requestResult === 'Bad Request' && setMessage('Existing user, try another name, or make sure the username does not contain spaces')
        }
    }, [ requestResult ])


    return (
        <>
            <div className="signup__contain_texts">
                <h1>creat your account</h1>
                <span className="alertMessage">{ message }</span>

                <form className="signup__contain_form" onSubmit={ handleSubmit } id='CreateForm'>
                    <div className={ valueClass }>
                        <label htmlFor="nameInput">Name</label>
                        <input 
                            maxLength="50" 
                            minLength="4"
                            type="text" 
                            id="nameInput" 
                            required 
                            onChange={ handleInput } 
                            name="username" 
                            onClick={ FunctionAlert } 
                            className='focusss' 
                        />
                        
                        { booleann === false ?
                            <span className="signup__contain_span"></span>:
                            <span className="signup__contain_span">
                                { nameinput === '' ? 0 : nameinput.username.length }/50
                            </span>
                        }
                    </div>

                    <div className={ valueClassPassw }>
                        <label htmlFor="passwordInput">Password</label>
                        <input 
                            minLength="4"
                            type="password" 
                            id="passwordInput" 
                            required 
                            onChange={ handleInput } 
                            name="password" 
                            autoComplete="on" 
                            onClick={ FunctionAlertPassw } 
                        />
                    </div>

                    <div className="signup__contain_ancla">
                        <a href="#x" style={{ cursor: 'default' }}>Use email</a>
                    </div>

                    <div className="signup__contain_birthday">
                        <h2>Date of birth</h2>
                        <p>This information will not be public. Please confirm your own age, even if this account is for a business, a pet, or something else.</p>
                    </div>

                    <div className="signup__contain_dropdown">
                        <div className="signup__dropdown_item signup__dropdown_item-one">
                            <select name="Month" id="1" defaultValue={ 0 }>
                                <option value="0" disabled="disabled">Month</option>
                                    { months.map(( month, index ) => 
                                        <option value="1" key={ index }>{ month }</option>
                                    )}
                            </select>
                        </div>
                        
                        <div className="signup__dropdown_item signup__dropdown_item-two">
                            <select name="Day" id="2" defaultValue={ 0 }>
                                <option value="0" disabled="disabled">Day</option>
                                { arrayNumbers.map(( number, index ) => 
                                    <option value="1" key={ index }>{ number }</option>
                                )}
                            </select>
                        </div>

                        <div className="signup__dropdown_item signup__dropdown_item-three">
                            <select name="Year" id="3" defaultValue={ 0 }>
                                <option value="0" disabled="disabled">Year</option>
                                { arrayYears.map(( number, index ) => 
                                    <option value="1" key={ index }>{ number }</option>
                                )}
                            </select>
                        </div>
                    </div>
                </form>
            </div>

            { requestResult === "Created" ? 
                <Redirect to="/intermediary" /> :
                <label className={ buttonNext }> <input type="submit" value="Next" form='CreateForm' /></label>
            }
        </>
    )
}

export default SignUpForm