import { useState } from "react";
import axios from 'axios'
import { baseUrlUser } from '../services/urls';

const useForm = () => {  
  const arrayNumbers = []
  const arrayYears = []  
  const [ nameinput, setNameinput ] = useState({ username: '', password: '' });
  const [ booleann, setBooleann ] = useState(false); //To hide the number /50
  const [ valueClass, setValueClass ] = useState("signup__contain_input")
  const [ valueClassPassw, setValueClassPassw ] = useState("signup__contain_input signup__contain_input--password") 
  const [ requestResult, setrequestResult ] = useState("")
  const months = [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ]
  
  for( let i = 1; i <= 31; i++ ) {
    arrayNumbers.push(i)
  }
  for( let i = 1901; i <= 2021; i++ ) {
    arrayYears.push(i)
  }
  arrayYears.reverse()
    
  const handleInput = event => {
    setNameinput({
      ...nameinput,
      [ event.target.name ]: event.target.value
    })
  }
  
  const handleSubmit = async(e) => {
    e.preventDefault()
    try { 
      const res = await axios.post( baseUrlUser, nameinput)
      setrequestResult( res.statusText )
    } catch( error ) { 
      setrequestResult( error.response.statusText )
    }
  }

  const FunctionAlert = () => { //these functions put the blue line on the border
    setBooleann(true)
    setValueClass("signup__contain_noInput")
    setValueClassPassw("signup__contain_input signup__contain_input--password")
  }
  const FunctionAlertPassw = () => {
    setBooleann(false)
    setValueClassPassw("signup__contain_noInput signup__contain_input--password")
    setValueClass("signup__contain_input")
  }
  
  return { arrayNumbers,  arrayYears,  handleInput,  nameinput,  handleSubmit,  FunctionAlert, 
    FunctionAlertPassw, booleann, valueClass, valueClassPassw,requestResult,months
  }
}

export default useForm