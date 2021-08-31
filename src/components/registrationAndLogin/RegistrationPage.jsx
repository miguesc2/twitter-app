import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import '../../assets/styles/registrationAndLoginCss/RegistrationPage.css'

function RegistrationPage({ twittericon, googleicon, appleicon }) {    
  return (
    <>
      <div className="register__container">
        <div className="register__container--imgs">
          <div className="register__contain--background">
            <img src="https://abs.twimg.com/sticky/illustrations/lohp_1302x955.png" alt="registerBackground" className="register__background" />
          </div>
          <div className="register__contain--bird">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="register__svg" alt="registerSvg">
              <g fill="white">
                <path d={ twittericon } />
              </g>
            </svg>
          </div>
        </div>

        <div className="register__container--main">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="register__main--svg" alt="registerSvg">
            <g fill="rgba(29,161,242,1.00)">
              <path d={ twittericon } />
            </g>
          </svg>
          <h1>What is happening now</h1>
          <h2>Join Twitter today.</h2>
          <div className="register__container_main">
            <div className="register__main--icons">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="register__main_icon--svg" alt="registerSvg">
                <g>
                  <path fill={ googleicon.colors[0] } d={ googleicon.paths[0] } />
                  <path fill={ googleicon.colors[1] } d={ googleicon.paths[1] } />
                  <path fill={ googleicon.colors[2] } d={ googleicon.paths[2] } />
                  <path fill={ googleicon.colors[3] } d={ googleicon.paths[3] } />
                </g>
              </svg>
              <span>Sign up with Google</span>
            </div>

            <div className="register__main--icons">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="register__main_icon--svg" alt="registerSvg">
                <g fill="black">
                  <path d={ appleicon } />
                </g>
              </svg>
              <span>Sign up with Apple</span>
            </div>

            <div className="register__main--icons">
              <Link to="/signup">
                <span>Sign up with phone number or email</span>
              </Link>
            </div>

            <div className="register__main--icons register__main__icons--links">
              <small>By registering, you accept the <a href="/">Terms of Service</a> and the <a href="/">Privacy Policy</a>, including the <a href="/"> Use of Cookies</a>.</small>
            </div>

            <div className="register__main--icons register__main__icons--links">
              <p>Do you already have an account? <a href="/">Log in</a></p>
            </div>
          </div>
        </div>  
      </div>
      <footer className="register__container--footer">
        <ul className="register__container_list--footer">
        <li><small><a href="/">About </a></small></li>
        <li><small><a href="/">Help Center </a></small></li>
        <li><small><a href="/">Terms of Service </a></small></li>
        <li><small><a href="/">Privacy Policy </a></small></li>
        <li><small><a href="/">Cookies policy</a></small></li>
        <li><small><a href="/">Ad information </a></small></li>
        <li><small><a href="/">Blog </a></small></li>
        <li><small><a href="/">Condition </a></small></li>
        <li><small><a href="/">Jobs </a></small></li>
        <li><small><a href="/">Brand Resources </a></small></li>
        <li><small><a href="/">Adversiting </a></small></li>
        <li><small><a href="/">Marketing </a></small></li>
        <li><small><a href="/">Twitter for business </a></small></li>
        <li><small><a href="/">Developers </a></small></li>
        <li><small><a href="/">Guide </a></small></li>
        <li><small><a href="/">Setting </a></small></li>
        <li><small><a href="/">© 2021 Twitter, Inc. </a></small></li>
      </ul>
      </footer>
    </>
  )
}

const mapStateToProps = state => {
  return {
    twittericon: state.images.twittericon,
    googleicon: state.images.googleicon,
    appleicon: state.images.appleicon,
  }
}

export default connect(mapStateToProps, null) (RegistrationPage)
