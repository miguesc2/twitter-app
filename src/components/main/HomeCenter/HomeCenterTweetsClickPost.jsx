import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import { baseUrlPostComments, baseUrlPosts } from '../../../services/urls';
import HomeCenterComments from './HomeMiniC/HomeCenterComments';
import HomeCenterInteractions from './HomeMiniC/HomeCenterInteractions';
import Layout from '../../../containers/Layout';
import PageLoading from '../../../containers/PageLoading';
import useFormHome from '../../../hooks/useFormHome';

import '../../../assets/styles/mainCss/HomeCenterTweets.css'

function HomeCenterTweetsClickPost({ usernameLogin, usernameId }) {
  const { setUsersArray, setGetComment, usersArray, getComment } = useFormHome()
  const { postId } = useParams()
  const [ onePost, setOnePost ] = useState([])
  const [ tweetValue, setTweetValue ] = useState("")
  const [ booleann, setBooleann ] = useState(true)
  
  let empty = ""
  const handleChange = e => setTweetValue( e.target.value )
  tweetValue.length > 0 && ( empty = "classColor" )

  useEffect(() => {
    const getData = () => axios.get(baseUrlPosts).then( post => setUsersArray( post.data ))
    getData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    const getData = () => axios.get( baseUrlPostComments ).then( item => setGetComment( item.data ))
    getData()
  }, [ usersArray, booleann ]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const getItem = () => {
      let item = ( usersArray.find (item => item.id === parseInt(postId)) )
      item !== undefined && setOnePost( item )
    }
    getItem()
  }, [ usersArray ]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = async() => {
    if ( tweetValue.length === 0 ) {
      alert('No se puede comentar con un mensaje vacío!')
    } else {
      try {
        await axios.post(baseUrlPostComments, { 
          "comment": tweetValue, "image": null, "author": usernameId, "social_post": ( postId ), "likes": [] 
        })
        .then(() => {
          setTweetValue("")
          setBooleann( !booleann )
        })
      } catch ( error ) { console.log( error.message ) }
    }
  }

  return (
    <>
      <Layout>
        <div className="modal fade" id="modalImage" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl">
            <div className="modal-content">
              <img 
                  data-bs-toggle="modal" 
                  data-bs-target="#modalImage" 
                  alt="imgtesting" 
                  src="https://api.lorem.space/image/movie?w=1300&amp;amp;amp;amp;h=600"
              />
            </div>
          </div>
        </div>
        
        { onePost.length === 0 
          ? 
            <div className='stylePLoading'><PageLoading /></div> 
          :
            <>
              <div className="container__main_center"> 
                <div className="Home__center_whatprofile-content" id="vv1">
                    
                    <div className="Home__center_whatprofile-input" id={ onePost.id }>

                      {/* head */}
                      <div className="Home__center_topTweetText" id="topTweetText">
                        <div className='flexImgName'>
                            <div className="Home__center_whatprofile-img" id="profile-img">
                              <Link to='/home'>
                                <svg viewBox="0 0 24 24" aria-hidden="true" className="arrowBack" alt="">
                                  <g fill="rgb(0,0,0)">
                                    <path d="M20 11H7.414l4.293-4.293c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0l-6 6c-.39.39-.39 1.023 0 1.414l6 6c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L7.414 13H20c.553 0 1-.447 1-1s-.447-1-1-1z"></path>
                                  </g>
                                </svg>
                              </Link>

                              <Link to={ `/profile/${ onePost.author }` } className="linksGlobal">
                                { onePost.author === usernameLogin 
                                  ?
                                    <img className="profileImg" title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
                                  :
                                    <img className="profileImg" title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
                                }
                              </Link>
                            </div>
                          
                          <div className="flexUser">
                            <Link to={ `/profile/${ onePost.author }` } className="linksGlobal">
                              <span className="Home__center_TextProfile">{ onePost.author }</span>
                            </Link>
                            
                            <a href="#x" className="linksGlobal">
                              <span className="Home__center_TextUsername">@{ onePost.author }</span>
                            </a>
                          </div>
                        </div>

                        <div>
                          <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                            <g fill="rgba(29,161,242,1.00)">
                              <circle cx="5" cy="12" r="2"></circle>
                              <circle cx="12" cy="12" r="2"></circle>
                              <circle cx="19" cy="12" r="2"></circle>
                            </g>
                          </svg>
                        </div>
                      </div>

                      {/* post content */}
                        <div>
                          <figure className="Home__center_figcapTweet" id="letterContent">
                            <figcaption>{ onePost.body }</figcaption>
                            {/* <button> */}
                              <img data-bs-toggle="modal" data-bs-target="#modalImage" className="Home__center_imgTweet" src={ onePost.image } alt="imgtesting" />
                            {/* </button> */}
                          </figure>
                        </div>

                      <div className="dateOnePost">
                        <a href="#x" className="linksGlobal" id="letterContentDate">
                          <span className="Home__center_Time">{ `${ onePost.created_on.substring(11,16) }  -  ${ onePost.created_on.substring(0,10) }`}</span>
                        </a>
                      </div>

                      {/* interactions */}
                      <HomeCenterInteractions id={ onePost.id } usernameLogin={ usernameLogin } likes={ onePost.likes } comments={ onePost.comments } />
                    </div>

                    {/* comments */}
                    <div className="placeToComment">
                      <img src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" />
                      <input type="text" placeholder="Tweet your answer" name="comment" onChange={ handleChange } value={ tweetValue } />
                      
                      <label className="home__center_contain_nextbutton" htmlFor="TweetId">
                        <input className={ empty } type="submit" id="TweetId" value="Tweet" onClick={ handleSubmit } />
                      </label>
                    </div>

                    <div>
                      <HomeCenterComments getCommentsOnAPost={ getComment } usernameLogin={ usernameLogin } />
                    </div>
                </div>   
              </div>
            </>
        }
      </Layout>
    </>
  )
}

const mapStateToProps = state => {
  return {
    usernameLogin: state.userLogin.data.user.username,
    usernameId: state.userLogin.data.user.id
  }
}

export default connect( mapStateToProps, null ) ( HomeCenterTweetsClickPost )