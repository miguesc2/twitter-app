import React from 'react'
import { connect } from 'react-redux'
import { Link, Redirect, Route } from 'react-router-dom'

const Intermediary = ({ userAuth }) => (
  <Route>
    { userAuth.length === 0 
      ? 
        <div className="notFound">
          <p>If you were redirected to this page after creating your user, please login.</p>    
          <div><Link className="linkStyle" to="/login">login</Link></div>
        </div>
      :
        <Redirect to="/home" /> 
    }
  </Route>
)

const mapStateToProps = state => ({ userAuth: state.userLogin })
export default connect( mapStateToProps, null )( Intermediary )