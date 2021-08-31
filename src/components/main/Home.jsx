import React from 'react'
import '../../assets/styles/mainCss/Home.css'
import HomeCenter from './HomeCenter/HomeCenter'
import HomeLeft from './HomeLeft/HomeLeft'
import HomeRight from './HomeRight/HomeRight'

function Home() {
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

export default Home
