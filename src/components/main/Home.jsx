import axios from 'axios';
import { connect } from 'react-redux'
import '../../assets/styles/mainCss/Home.css'
import HomeCenter from './HomeCenter/HomeCenter'
import HomeLeft from './HomeLeft/HomeLeft'
import HomeRight from './HomeRight/HomeRight'
import { baseUrlRefreshToken } from '../../services/urls'

const Home = ({ username, userLogin }) => {
  let urlRefresh = baseUrlRefreshToken
  axios.get(urlRefresh, {
    params: { username }
  })
  .then(response => {
    console.log(response.data)
  })
  .catch((error) => {
    console.log(error.response.data);
  });

  return (
    <div className="container__main">
      <div className="container__main_left">
        <HomeLeft />
      </div>

      <div className="container__main_center">
        <HomeCenter />
      </div>

      <div className="container__main_right">
        <HomeRight />
      </div>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    userLogin: state.userLogin,
    username: state.userLogin?.data?.user?.username,
  }
}

export default connect(mapStateToProps, null)(Home)
