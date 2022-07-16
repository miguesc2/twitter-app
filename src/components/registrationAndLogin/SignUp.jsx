import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import '../../assets/styles/registrationAndLoginCss/SignUp.css'

function SignUp({ months, twittericon }) {
  return (
    <div className="signup__container">
      <div className="signup__container_main">
        <div className='signup__iconsTop'>
        
        {/* X icon */}
          <div className="signup__contain--bird">
            <Link to="/" className='signup__pleft'>
                <svg viewBox="0 0 40 40" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
                  <g fill=""><path d="M13.414 12l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L12 10.586 6.207 4.793c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L10.586 12l-5.793 5.793c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L12 13.414l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L13.414 12z" /></g>
                </svg>
            </Link>
          </div>
          
        {/* twitter Icon */}
          <div className="signup__contain--bird">
            <svg viewBox="0 0 24 24" aria-hidden="true" className="signup__main--svg" alt="registerSvg">
              <g fill="rgba(29,161,242,1.00)">
                <path d={ twittericon } />
              </g>
            </svg>
          </div>
        </div>

        {/* starting form */}
        <div className="signup__contain_texts">
          <h1>creat your account</h1>

          <SignUpForm months={ months } />
        </div>

          {/* {
            requestResult === "Created" ? <Redirect to="/login" /> : */}
              <label className="{ buttonNext }">
                <input type="submit" value="Next" form='CreateForm' />
              </label>
          {/* } */}
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    months: state.months,
    twittericon: state.images.twittericon,
  }
}

export default connect(mapStateToProps, null)(SignUp)
