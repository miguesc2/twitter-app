import HomeCenter from './HomeCenter/HomeCenter'
import Layout from '../../containers/Layout'
import '../../assets/styles/mainCss/Home.css'

const Home = () => {
  return (
    <Layout>
      <div className="container__main_center"> <HomeCenter /> </div>
    </Layout>
  )
}

export default Home
