import React, { useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import { useParams } from 'react-router';

import { baseUrlPosts, baseUrlProfile, baseUrlRefreshToken, baseUrlUser, getComments } from '../../services/urls';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Layout from '../../containers/Layout'
import ModalDeleteProfile from '../../containers/ModalDeleteProfile';
import PageLoading from '../../containers/PageLoading';
import ProfilePosts from './ProfilePosts';
import useFormHome from '../../hooks/useFormHome';

import '../../assets/styles/Profile.css'

function Profile({ username, stateDelete }) {
  const { postsId } = useParams()
  const { setGetComment, setUsersArray, usersArray }  = useFormHome()
  const [ userfilter, setUserFilter ] = useState([])
  const [ infoUser, setInfoUser ] = useState(null)
  const [ changeLettersOfFollower, setChangeLettersOfFollower ] = useState(true)
  const followUpRequest = () => setChangeLettersOfFollower( !changeLettersOfFollower )

  useEffect(() => {
    const getData = () => {
      axios.get( baseUrlPosts ).then( post => setUsersArray( post.data ))
      getComments().then(item => setGetComment( item.data ))
    }
    getData()
  }, [ postsId, stateDelete ]) // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    axios.get( baseUrlUser )
    .then(r => {
      let res = r.data.filter(u => u.username === postsId)
      setUserFilter(res)
    })
  }, [ postsId ])
    
  useEffect(() => {
    const getToken = async() => {
      axios.get( baseUrlRefreshToken, { params: { username: postsId } } )
      .then(res => {
        const response = async() => {
          if ( userfilter.length !== 0 ) {
            await axios.get( `${ baseUrlProfile }${ userfilter[0].id }`, { 
              headers: { Authorization: `Token ${ res.data.token }`} 
            })
            .then(x => setInfoUser(x.data)).catch(e => console.log(e.message))
          }
        }
        response()
      })
    }
    getToken()
  }, [ userfilter ]) // eslint-disable-line react-hooks/exhaustive-deps
  
  const clearLocalStorage = event => {
    event.preventDefault()
    localStorage.clear()
    window.location.reload();
  }

  let results = usersArray.filter( userSearch => userSearch.author === postsId )

  return (
    <>
      <ModalDeleteProfile />
      
      <div className="modal fade" id="modalImageProfile" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <img alt="imgtesting" src="https://api.lorem.space/image/face?w=1000&amp;amp;amp;amp;h=500" />
          </div>
        </div>
      </div>
      
      <div className="modal fade" id="modalImageProfileRandom" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-xl">
          <div className="modal-content">
            <img alt="imgtesting" src="https://api.lorem.space/image/game?w=1300&amp;amp;amp;amp;h=600" />
          </div>
        </div>
      </div>
      
      <Layout>
        <div className="container__main_center">
          <div className="divProfile">
            <div className="divProfileHeader">
              <div>
                <Link to='/home'>
                  <svg viewBox="0 0 24 24" aria-hidden="true" className="" alt="">
                    <g fill="rgb(0,0,0)">
                      <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                    </g>
                  </svg>
                </Link>
              </div>
              
              <div>
                <p>{ postsId }</p>
                { results.length < 2 
                  ? <small>{ results.length } Tweet</small> 
                  : <small>{ results.length } Tweets</small>
                }
              </div>
            </div>
            
            <div className="divProfileBanner">
              <img data-bs-toggle="modal" data-bs-target="#modalImageProfileRandom" className="bannerImg" src="https://api.lorem.space/image/game?w=700&amp;amp;amp;amp;h=225" alt="img" />
              { postsId === username 
                ?
                  <img data-bs-toggle="modal" data-bs-target="#modalImageProfile" className="profileImg" title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
                :
                  <img data-bs-toggle="modal" data-bs-target="#modalImageProfile" className="profileImg" title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
              }

              <div className="profileEdit">
                { username === postsId 
                  ? 
                    <>
                      <input className="editProfile logoutof" type="button" value={`Log out of ${ username }`} onClick={ clearLocalStorage } />  
                      <input className="editProfile" type="button" value="Delete profile" data-bs-toggle="modal" data-bs-target="#modalDelete" style={{ marginLeft: '5px' }} />  
                    </>
                  :
                    <input 
                      className={ changeLettersOfFollower ? "FollowClass" : "FollowingClass" } 
                      type="button" 
                      value={ changeLettersOfFollower ? "Follow" : "Following" } 
                      onClick={ followUpRequest } 
                    /> 
                }
              </div>
            </div>
          </div>

          <div className="profileDesc">
            <div className="profileDescName">
              <p className="profileName">{ postsId }</p>
              <small>@{ postsId }</small>
            </div>

            <span className="profileDescText">A description should go here, such as I like books or art and rain.</span>
            
            <div className="profileFollowers">
              <span>Se unió en { infoUser !== null && infoUser.date_created }</span>
              <span><strong>0</strong> siguiendo</span>
              <span><strong>0</strong> { infoUser !== null && infoUser.followers } seguidores</span>
            </div>
          </div>

          <div className="profileMultimedia">
            <a href="#x" style={{ width: "20%" }} className="onlySection"><span>Tweets</span></a>
            <a href="#x" style={{ width: "35%" }}><span>Tweets y respuestas</span></a>
            <a href="#x" style={{ width: "25%" }}><span>Fotos y videos</span></a>
            <a href="#x" style={{ width: "20%" }}><span>Me gusta</span></a>
          </div>
          
          { results.length === 0 
            ? <PageLoading />
            : results.reverse().map( res => <ProfilePosts res={ res } key={ res.id } usernameLogin={ username } /> )
          }
        </div>
      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return {
    username: state.userLogin.data.user.username,
    stateDelete: state.stateDeletePost,
  }
}

export default connect( mapStateToProps, null )( Profile )
