import axios from 'axios';
import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import { baseUrlPosts, getComments } from '../../services/urls';
import Layout from '../../containers/Layout'
import ProfilePosts from './ProfilePosts';
import useFormHome from '../../hooks/useFormHome';
import '../../assets/styles/Profile.css'
import { Link } from 'react-router-dom';
import PageLoading from '../../containers/PageLoading';

function Profile({ username }) {
  const { postsId } = useParams()
  const { setGetComment, setUsersArray, usersArray }  = useFormHome()
  
  useEffect(() => {
    const url = baseUrlPosts
    const getData = () => {
      axios.get( url )
      .then( post => setUsersArray( post.data )).catch((e) => console.log(`Hubo un error: ${ e }`))
      .catch(e => console.log(`Hubo un error: ${ e }`))
      getComments().then(item => setGetComment( item.data ))
    }
    getData()
  }, [ postsId ])  // eslint-disable-line react-hooks/exhaustive-deps
  
  let results = usersArray.filter( userSearch => userSearch.author === postsId )
  
  return (
    <>
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
                { results.length < 2 ? <small>{ results.length } Tweet</small> : <small>{ results.length } Tweets</small>}
              </div>
            </div>
            
            <div className="divProfileBanner">
              <img className="bannerImg" src="https://api.lorem.space/image/game?w=700&amp;amp;amp;amp;h=225" alt="img" />
              { postsId === username ?
                <img className="profileImg" title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
                :<img className="profileImg" title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
              }
              <div className="profileEdit">
                { username === postsId ? <input type="button" value="Editar perfil" /> : <input type="button" value="Seguir" /> }
              </div>
            </div>
          </div>

          <div className="profileDesc">
            <div className="profileDescName">
              <p className="profileName">{ postsId }</p>
              <small>@{ postsId }</small>
            </div>
            <span className="profileDescText">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo, fuga. Molestias, fugit!</span>
            
            <div className="profileFollowers">
              <span>Se unió en julio de 2016</span>
              <span><strong>0</strong> siguiendo</span>
              <span><strong>0</strong> seguidores</span>
            </div>
          </div>

          <div className="profileMultimedia">
            <a href="#x" style={{ width: "20%" }} className="onlySection"><span>Tweets</span></a>
            <a href="#x" style={{ width: "35%" }}><span>Tweets y respuestas</span></a>
            <a href="#x" style={{ width: "25%" }}><span>Fotos y videos</span></a>
            <a href="#x" style={{ width: "20%" }}><span>Me gusta</span></a>
          </div>
          
          {/* <div className="Home__center_whatprofile-content" id="vv1"> */}
            { results.length === 0 ?
              <PageLoading />
              : results.map(res => <ProfilePosts res={ res } key={ res.id } usernameLogin={ username } />)
            }
          {/* </div> */}
        </div>
      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return { username: state.userLogin.data.user.username }
}

export default connect(mapStateToProps, null)(Profile)
