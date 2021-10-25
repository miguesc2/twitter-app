import { connect } from "react-redux"
import { Redirect, Route } from "react-router"

const PrivateRoute = ({ userAuth, component: Component, ...rest }) => {
  return (
    <Route { ...rest }>
      { userAuth.length === 0 ? <Redirect to="/login" /> : <Component /> }
    </Route>
  )
}

const mapStateToProps = state => {
  return {
    userAuth: state.userLogin
  }
}

export default connect(mapStateToProps, null) (PrivateRoute)
