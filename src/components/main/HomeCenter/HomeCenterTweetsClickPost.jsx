import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux'
import { useParams } from 'react-router';
import { baseUrlPosts } from '../../../services/urls';
import Layout from '../../../containers/Layout';
import HomeCenterInteractions from './HomeMiniC/HomeCenterInteractions';
import '../../../assets/styles/mainCss/HomeCenterTweets.css'
import PageLoading from '../../../containers/PageLoading';
import useFormHome from '../../../hooks/useFormHome';

function HomeCenterTweetsClickPost({ usernameLogin }) {
  const { setUsersArray, editedUsersArray } = useFormHome()
  const { postId } = useParams() //get id from my url
  const [ onePost, setOnePost ] = useState([])
  const url = baseUrlPosts
  let item = []

  useEffect(() => {
    const getData = () => {
      axios.get(`${ url }`)
      .then( post => {
        setUsersArray(post.data)
      }).catch((e) => console.log(`Hubo un error: ${ e }`))
    }    
    getData()
  }, [])

  useEffect(() => {
    const getItem = () => {
      item = ( editedUsersArray.find ( item => item.id == postId ))
      item !== undefined && setOnePost(item)
    }
    getItem()
  }, [ editedUsersArray ])

  return (
    <>
      <Layout>        
        {
          onePost.length === 0 ? <div className='stylePLoading'><PageLoading /></div> :
          <>
            <div className="Home__center_whatprofile-img">
              <img src="https://i.ibb.co/Bs9LLZ2/avatardefault.png" alt="imgProfile" />
            </div>
          
            <div className="Home__center_whatprofile-content">
              <div className="Home__center_whatprofile-input" id={ onePost.id }>
                <div className="Home__center_topTweetText">
                  <div>
                    <span className="Home__center_TextProfile">{ onePost.author }</span>
                    <span className="Home__center_TextUsername">@{ onePost.author }</span>
                    <span className="Home__center_Dot">·</span>
                    <span className="Home__center_Time">{ onePost.created_on.substring(0,10) }</span>
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
                <div>
                  <figure className="Home__center_figcapTweet">
                    <figcaption>{ onePost.body }</figcaption>
                      <img className="Home__center_imgTweet" src={ onePost.image } alt="imgtesting" /> 
                  </figure>
                </div>

                <div className="Home__center_likesTweet">
                  <div><span>679 Retweets</span></div>
                  <div><span>114 Tweets citados</span></div>
                  <div><span>{ onePost.likes.length } Me gusta</span></div>
                </div>

                <HomeCenterInteractions id={ onePost.id } usernameLogin={ usernameLogin } likes={ onePost.likes } />
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
    usersPosts: state.userPosts,
    setData: state.saveDataPost,
    usernameLogin: state.userLogin.data.user.username
  }
}

export default connect(mapStateToProps, null) (HomeCenterTweetsClickPost)
