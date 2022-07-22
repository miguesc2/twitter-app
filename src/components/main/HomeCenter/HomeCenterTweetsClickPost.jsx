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
  const { postId } = useParams() //get id from my url
  const [ onePost, setOnePost ] = useState([])
  const [ tweetValue, setTweetValue ] = useState("")
  const [ booleann, setBooleann ] = useState(true)
  let empty = ""
  tweetValue.length > 0 && ( empty = "classColor" )

  useEffect(() => {
    const url = baseUrlPosts
    const getData = () => {
      axios.get(url).then( post => setUsersArray( post.data )).catch((e) => console.log(`Hubo un error: ${ e }`))
    }
    getData()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  useEffect(() => {
    const url = baseUrlPostComments
    const getData = () => {
      axios.get(url).then( item => setGetComment( item.data )).catch((e) => console.log(`Hubo un error: ${ e }`))
    }
    getData()
  }, [ usersArray, booleann ]) // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    const getItem = () => {
      let item = ( usersArray.find ( item => item.id === parseInt( postId ) ))
      item !== undefined && setOnePost( item )
    }
    getItem()
  }, [ usersArray ]) // eslint-disable-line react-hooks/exhaustive-deps

  const handleChange = e => setTweetValue( e.target.value )

  const handleSubmit = async() => {
    let url = baseUrlPostComments
    if ( tweetValue.length === 0 ) {
      alert('No se puede comentar con un mensaje vacío!')
    } else {
      try {
        await axios.post( url, { "comment": tweetValue, "image": null, "author": usernameId, "social_post": ( postId ), "likes": [] } )
        .then(() => {
          setTweetValue("")
          setBooleann( !booleann )
        }).catch(e => console.log(`Hubo un error: ${ e.message }`))      
      } catch ( error ) { console.log( error.message ) }
    }
  }

  return (
    <>
      <Layout>        
        {
          onePost.length === 0 ? <div className='stylePLoading'><PageLoading /></div> :
          <>
            <div className="container__main_center">
              
              <div className="Home__center_whatprofile-content" id="vv1">
                  <div className="Home__center_whatprofile-input" id={ onePost.id }>
                    {/* head */}
                    <div className="Home__center_topTweetText" id="topTweetText">
                      <div className='flexImgName'>
                        <Link to={ `/profile/${ onePost.author }` } className="linksGlobal">
                          <div className="Home__center_whatprofile-img" id="profile-img">
                            <img title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
                          </div>
                        </Link>
                        
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
                    <Link to={`/homewatchpost/${ onePost.id }`} className="linksGlobal">
                      <div>
                        <figure className="Home__center_figcapTweet" id="letterContent">
                          <figcaption>{ onePost.body }</figcaption>
                          <img className="Home__center_imgTweet" src={ onePost.image } alt="imgtesting" />
                        </figure>
                      </div>
                    </Link>

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
                    <HomeCenterComments getCommentsOnAPost={ getComment } />
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

export default connect(mapStateToProps, null) (HomeCenterTweetsClickPost)