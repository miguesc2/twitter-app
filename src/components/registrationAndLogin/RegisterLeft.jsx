import React from 'react'

function RegisterLeft({ props }) {  
  return (
    <div className="register__container--imgs">
      <div className="register__contain--background">
        <img src="https://i.ibb.co/8dqcVjp/fondo-Twitter.png" alt="registerBackground" className="register__background" />
      </div>

      <div className="register__contain--bird">
        <svg viewBox="0 0 24 24" aria-hidden="true" className="register__svg" alt="registerSvg">
          <g fill="white"> <path d={ props.twittericon } /> </g>
        </svg>
      </div>
    </div>
  )
}

export default RegisterLeft