//import axios from 'axios';
import { connect } from 'react-redux'
import '../../assets/styles/mainCss/Home.css'
import Layout from '../Layout'
import HomeCenter from './HomeCenter/HomeCenter'
//import { baseUrlRefreshToken, baseUrlProfile } from '../../services/urls'

const Home = ({ username }) => {
  //let urlRefresh = baseUrlRefreshToken
  //let urlProfile = baseUrlProfile

  /* TOKEN */
  /* axios.get(urlRefresh, {
    params: { username }
  })
  .then(response => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error.response.data);
  }); */

  /* PROFILE */
  /* axios.get(urlProfile, {
    headers: {authorization: "Token 7ba5a5229aa6cfa78ae271f1fa958351774c28a1"}
  })
  .then(response => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error.response.data);
  }); */

  return (
    <Layout>
      <div className="container__main_center">
        <HomeCenter />
      </div>
    </Layout>
  )
}

const mapStateToProps = state => {
  //console.log(state)
  return {
    username: state.userLogin.data.user.username,
  }
}

export default connect(mapStateToProps, null)(Home)
