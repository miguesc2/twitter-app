import { Link } from 'react-router-dom';
import HomeCenterInteractions from './HomeMiniC/HomeCenterInteractions';
import '../../../assets/styles/mainCss/HomeCenterTweets.css'

function HomeCenterTweets( props ) {
  const { id, body, created_on, author, likes, usernameLogin, image, comments } = props
  let date = new Date()
  const toHours = 60 * 60 * 1000

  return (
    <>
      <Link to={ `/profile/${ author }` } className="linksGlobal">
        <div className="Home__center_whatprofile-img">
          { author === usernameLogin ?
            <img title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
            :<img title="view profile" src="https://cdn-icons-png.flaticon.com/512/1177/1177568.png" alt="imgProfile" />
          }
        </div>
      </Link>
      
      <div className="Home__center_whatprofile-content">
          <div className="Home__center_whatprofile-input" id={ id }>
            {/* head */}
            <div className="Home__center_topTweetText">
              <div>
                <Link to={ `/profile/${ author }` } className="linksGlobal">
                  <span className="Home__center_TextProfile">{ author }</span>
                </Link>
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
    </>
  )
}

export default HomeCenterTweets
