import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import { baseUrlUser } from '../../../../services/urls'
import HomeCenterInteractionsII from './HomeCenterInteractionsII'

function HomeCenterComments({ getCommentsOnAPost, usernameLogin }) {
  const [ users, setUsers ] = useState([])
  const toHours = 60 * 60 * 1000
  let id = useParams()
  let commentsOnThePost = getCommentsOnAPost.filter(item => item.social_post === parseInt( id.postId ))
  let allTheInformation = []
  let date = new Date()

  useEffect(() => {
    const getAll = async () => await axios.get(baseUrlUser).then(res => setUsers(res.data))
    getAll()
  }, [])

  if ( users.length !== 0 ) {
    allTheInformation = commentsOnThePost.map(item => {
      let findUsername = users.find( it => it.id === item.author )
      return {
        ...findUsername,
        ...item
      }
    })
  }
    
  return (
    <> 
      { 
        allTheInformation.reverse().map(item => {
          return (
            <div className='flexImgNameComment' key={ item.id }>
              <Link to={ `/profile/${ item.username }` } className="linksGlobal">
                <div className="Home__center_whatprofile-img">
                  { item.username === usernameLogin 
                    ?
                      <img className="profileImg" title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
                    :
                      <img className="profileImg" title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
                  }
                </div>
              </Link>

              <div className="Home__center_whatprofile-content">
                <div className="Home__center_whatprofile-input">

                  {/* head */}
                  <div className="Home__center_topTweetText">
                    <div>
                      <Link to={ `/profile/${ item.username }` } className="linksGlobal">
                        <span className="Home__center_TextProfile">{ item.username }</span>
                      </Link>

                      <span className="Home__center_TextUsername">@{ item.username }</span>
                      <span className="Home__center_Dot">·</span>
                      <span className="Home__center_Time">
                        {`${ 
                          Math.floor(Math.abs(date - new Date(item.created_on)) / toHours) === 0 ? 
                          "recientemente . . ."  : 
                          Math.floor(Math.abs(date - new Date(item.created_on)) / toHours) === 1 ?
                          "hace una hora" : 
                          Math.floor(Math.abs(date - new Date(item.created_on)) / toHours) < 24 ? 
                          `hace ${ Math.floor(Math.abs(date - new Date(item.created_on)) / toHours) } horas` :
                          `${ item.created_on.substring( 0,10 ) } - ${ item.created_on.substring( 11,16 ) }`
                        }`}
                      </span>
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
                    <figure className="Home__center_figcapTweet">
                      <figcaption>{ item.comment }</figcaption>
                    </figure>
                  </div>

                  {/* interactions */}
                  <HomeCenterInteractionsII  />
                </div>
              </div>   
            </div>
          )
        }) 
      } 
    </>
  )
}

export default HomeCenterComments