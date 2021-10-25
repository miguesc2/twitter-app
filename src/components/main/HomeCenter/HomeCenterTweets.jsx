import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setDatas } from '../../../actions/action';
import '../../../assets/styles/mainCss/HomeCenterTweets.css'
import HomeCenterInteractions from './HomeMini/HomeCenterInteractions';

function HomeCenterTweets(props) {
  const { id, body, image, created_on, author, likes, username, usernameLogin } = props

  /* const slicesDate = created_on
  const sliceDate = slicesDate.substring(0,10); */
  
  /* const sendPropsPost = () => {
    props.setDatas({id, body, image, created_on, author, likes, username, usernameLogin})
    //localStorage.setItem('saveDataPost', JSON.stringify({id, body, image, created_on, author, likes, username, usernameLogin}))
  } */

  return (
    <>
      <div className="Home__center_whatprofile-img">
        <img src="https://i.ibb.co/Bs9LLZ2/avatardefault.png" alt="imgProfile" />
      </div>
      
      <div className="Home__center_whatprofile-content">
          <div className="Home__center_whatprofile-input" id={ id }>
          {/* <Link to={`/homewatchpost/${id}`} className="linksGlobal" onClick={ sendPropsPost }> */}
          <Link to={`/homewatchpost/${id}`} className="linksGlobal">
            <div className="Home__center_topTweetText">
              <div>
                <span className="Home__center_TextProfile">{ author }</span>
                <span className="Home__center_TextUsername">@{ author }</span>
                <span className="Home__center_Dot">·</span>
                <span className="Home__center_Time">{ created_on }</span>
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
                <figcaption>{ body }</figcaption>
                { image === null ? <img className="Home__center_imgTweet" src={ image } alt="imgtesting" style={{display: 'none'}} /> : <img className="Home__center_imgTweet" src={ image } alt="imgtesting" /> }
              </figure>
            </div>
            </Link>

            <HomeCenterInteractions id={id} usernameLogin={usernameLogin} likes={likes}/>
          </div>

      </div>   
    </>
  )
}
const mapStateToProps = state => {
  return {
    usernameLogin: state.userLogin.data.user.username
  }
}
/* const mapDispatchToProps = {
  setDatas
} */

//export default connect(mapStateToProps, mapDispatchToProps) (HomeCenterTweets)
export default connect(mapStateToProps, null) (HomeCenterTweets)
