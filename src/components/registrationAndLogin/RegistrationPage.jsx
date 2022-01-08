import { connect } from 'react-redux'
import { Redirect } from "react-router"
import '../../assets/styles/registrationAndLoginCss/RegistrationPage.css'
import Footer from './Footer'
import RegistrationPageButtons from './RegistrationPageButtons'

function RegistrationPage({ twittericon, login }) {
  return (
    <>
    { login.length !== 0 ? <Redirect to="/home" /> :
      <div className="register__container">

        {/* TWITTER IMG - CONTENT LEFT */}
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

        {/* CONTENT RIGHT */}
        <RegistrationPageButtons/> 
      </div>
    }
    <Footer />
    </>
  )
}

const mapStateToProps = state => {
  return {
    twittericon: state.images.twittericon,
    login: state.userLogin,
  }
}

export default connect(mapStateToProps, null) (RegistrationPage)
