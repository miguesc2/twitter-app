import { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import HomeCenterInteractions from "../main/HomeCenter/HomeMiniC/HomeCenterInteractions";
import Modal from '../../containers/Modal'
import { deletePost } from '../../actions/action';

function ProfilePosts( props ) {
    const { author, body, comments, created_on, id, image, likes } = props.res
    const [ getId, setGetId ] = useState(null)
    const toHours = 60 * 60 * 1000
    let date = new Date()
    
    const getEl = id => props.deletePost(id)

    return (
      <>
        <Modal getId={ getId } setGetId={ setGetId } />
        <div className="Home__center_whatprofile Home__center_tweetsection">

          <div className="Home__center_whatprofile-img">
            { author === props.usernameLogin ?
              <img title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
              :<img title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
            }
          </div>
      
          <div className="Home__center_whatprofile-content">
            <div className="Home__center_whatprofile-input" id={ id }>
              {/* head */}
              <div className="Home__center_topTweetText">
                <div>
                  <span className="Home__center_TextProfile">{ author }</span>
                  <Link to={`/homewatchpost/${ id }`} className="linksGlobal">
                    <span className="Home__center_TextUsername">@{ author }</span>
                    <span className="Home__center_Dot">·</span>
                    <span className="Home__center_Time">{
                      `${ 
                        Math.floor( Math.abs( date - new Date( created_on ) ) / toHours ) === 0 ? 
                        "recientemente . . ."  : 
                        Math.floor( Math.abs( date - new Date( created_on ) ) / toHours ) === 1 ?
                        "hace una hora" : 
                        Math.floor( Math.abs( date - new Date( created_on ) ) / toHours ) < 24 ? 
                        `hace ${ Math.floor( Math.abs( date - new Date( created_on ) ) / toHours ) } horas` :
                        `${ created_on.substring( 0,10 ) } - ${ created_on.substring( 11,16 ) }`
                      } `
                    }</span>
                  </Link>
                </div>
                
                <div>
                  {
                    author === props.usernameLogin ?
                    <button onClick={ () => getEl( id ) } type="button" className="btn btnModal" data-bs-toggle="modal" data-bs-target="#exampleModalToggle">
                      <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                        <g fill="rgba(29,161,242,1.00)">
                          <circle cx="5" cy="12" r="2"></circle>
                          <circle cx="12" cy="12" r="2"></circle>
                          <circle cx="19" cy="12" r="2"></circle>
                        </g>
                      </svg>
                    </button>
                    :
                    <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                      <g fill="rgba(29,161,242,1.00)">
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  }
                </div>
              </div>

              {/* post content */}
              <Link to={`/homewatchpost/${ id }`} className="linksGlobal">
                <div>
                  <figure className="Home__center_figcapTweet">
                    <figcaption>{ body }</figcaption>
                    <img className="Home__center_imgTweet" src={ image } alt="imgtesting" />
                  </figure>
                </div>
              </Link>

              {/* interactions */}
              <HomeCenterInteractions id={ id } usernameLogin={ props.usernameLogin } likes={ likes } comments={ comments } />
            </div>
          </div>
        </div>        
      </>
    )
}

const mapDispatchToProps = { deletePost }

export default connect(null, mapDispatchToProps)(ProfilePosts);