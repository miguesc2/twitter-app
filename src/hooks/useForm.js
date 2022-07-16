import { useState } from "react";
import axios from 'axios'
import { baseUrlUser } from '../services/urls';

const useForm = () => {
  const arrayNumbers = []
  const arrayYears = []  
  const [ nameinput, setNameinput ] = useState({username: '', password: ''});
    
  
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
      [event.target.name]: event.target.value
  })

  const handleSubmit = async(e) => {
    e.preventDefault()
    try { 
      const res = await axios.post( baseUrlUser, nameinput)
      setrequestResult(res.statusText)
    } catch(error) { 
      setrequestResult(error.response.statusText)
    }
  }

}
  
  return {
    arrayNumbers, arrayYears, handleInput, nameinput, handleSubmit
  }
}

export default useForm