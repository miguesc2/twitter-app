import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import { baseUrlPosts } from "../../services/urls";
import HomeCenterInteractions from "../main/HomeCenter/HomeMiniC/HomeCenterInteractions";

function ProfilePosts({ res, usernameLogin }) {
    const { author, body, comments, created_on, id, image, likes } = res
    const [ getId, setGetId ] = useState( null )
    const toHours = 60 * 60 * 1000
    let date = new Date()
    
    const deleteSecondStep = async() => {
      axios.delete(`${ baseUrlPosts }${ getId }`)
      setGetId(null)
    }
    const deleteFirstStep = id => { setGetId( id ) }
    const cancelDelete = () => { setGetId( null ) }
    // console.log(getId)
    
    return (
      <>  
        <>
          <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="staticBackdropLabel">Modal title</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  ...
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={ cancelDelete }>Cancel</button>
                  <button type="button" className="btn btn-primary" onClick={ deleteSecondStep }>Accept</button>
                </div>
              </div>
            </div>
          </div>
        </>

        <div className="Home__center_whatprofile Home__center_tweetsection">

          <div className="Home__center_whatprofile-img">
          { author === usernameLogin ?
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
                    author === usernameLogin ?
                    <button type="button" className="btn btnModal" data-bs-toggle="modal" data-bs-target="#staticBackdrop" onClick={() => deleteFirstStep(id) }>
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
              <HomeCenterInteractions id={ id } usernameLogin={ usernameLogin } likes={ likes } comments={ comments } />
            </div>
          </div>
        </div>
      </>
    )
}

export default ProfilePosts;