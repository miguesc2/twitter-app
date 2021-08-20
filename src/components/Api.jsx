import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function Api() {
  const url = 'https://twiter-api.herokuapp.com/accounts/profile/'
  const [users, setUsers] = useState()

  const fetchApi = async () => {
    const response = await fetch(url)
    const responseJSON = await response.json()
    setUsers(responseJSON)
  }


  const urltwo = 'https://twiter-api.herokuapp.com/accounts/user/'
  const [userstwo, setUserstwo] = useState()

  const fetchApitwo = async () => {
    const responsetwo = await fetch(urltwo)
    const responseJSONTWO = await responsetwo.json()
    setUserstwo(responseJSONTWO)
  }


  useEffect(() => {
    fetchApi()
    fetchApitwo()
  }, [])

  return (
    <div>
      <ul>
        {!users ? '...Loading' : users.map((user, index) => {
          return <li key={ index }>{ user.date_created } { user.verified ? <label>Verificado</label> : <label>No Verificado</label> } </li>
        })}
        {!userstwo ? '...Loading' : userstwo.map((usertwo, index) => {
          return <li key={ index }>{ usertwo.username } { usertwo.is_superuser ? <label>Es Super Usuario</label> : <label>No es super usuario</label> } </li>
        })}
      </ul> 
    </div>
  )
}

export default Api
