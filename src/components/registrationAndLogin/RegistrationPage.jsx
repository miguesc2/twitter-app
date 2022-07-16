import { connect } from 'react-redux'
import { Redirect } from "react-router"
import Footer from './Footer'
import RegisterLeft from './RegisterLeft'
import RegisterRight from './RegisterRight'
import '../../assets/styles/registrationAndLoginCss/RegistrationPage.css'

function RegistrationPage({ login, all }) {
  return (
    <>
      { login.length !== 0 ? <Redirect to="/home" /> 
        : <div className="register__container">
            <RegisterLeft props={ all } />
            <RegisterRight props={ all } /> 
          </div>
      }
      <Footer />
    </>
  )
}

const mapStateToProps = state => {
  return {
    all: state.images,
    login: state.userLogin,
  }
}

export default connect(mapStateToProps, null) (RegistrationPage)
