import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import { baseUrlPosts, baseUrlProfile, baseUrlRefreshToken } from '../../services/urls';
import Layout from '../Layout'
import ProfilePosts from './ProfilePosts';

function Profile({ username }) {
  let urlRefresh = baseUrlRefreshToken
  //let urlProfile = baseUrlProfile
  const url = baseUrlPosts
  const { postsId } = useParams()
  const [ posts, setPosts ] = useState([])
  const [ tokenValue, setTokenValue ] = useState('')
  const [ booleann, setBooleann ] = useState(false)
  
  useEffect(() => {
    getData()
    tokenUser()
    //tokenUserProfile()
  }, [postsId])
  
  const getData = () => {
    axios.get(url)
    .then(post => {
      setPosts(post.data)
    }).catch((e) => console.log(`Hubo un error: ${ e }`))
  }

  let results = posts.filter(function(userSearch) {
    return userSearch.author === postsId;
  })

  /* TOKEN AND PROFILE */
  const tokenUser = () => {
    axios.get(urlRefresh, { params: { username }})
    .then(response => {
      const myTokn = response.data.token
      //console.log(data)

      axios.get(urlRefresh, { params: {username: postsId} })
      .then(resp => {
        const profileTokn = resp.data.token
        myTokn === profileTokn ? setTokenValue("Editar perfil") : setTokenValue("Seguir")
      })
      .catch((error) => { console.log(error.response.data) });

      /* axios.get(urlProfile, { headers: {authorization: `Token ${response.data.token}`} })
      .then(response => {
        console.log(response.data)
      })
      .catch((error) => { console.log(error.response.data) }); */
    })
    .catch((error) => { console.log(error.response.data) });
  }

  return (
    <>
      <button type="button">{tokenValue}</button>

      <Layout>
        <div className="Home__center_whatprofile-img">
          <img src="https://i.ibb.co/Bs9LLZ2/avatardefault.png" alt="imgProfile" />
        </div>
          <div className="Home__center_whatprofile-content">
            { results.length === 0 ?
              <h1>"Espere unos segundos, si no se realiza la carga, es probable que el usuario no tenga tweets"</h1>
              : results.map(res => <ProfilePosts res={ res } key={res.id} />)
            }
          </div>
      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return { username: state.userLogin.data.user.username }
}

export default connect(mapStateToProps, null)(Profile)
