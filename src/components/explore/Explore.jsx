import React from 'react'
import Layout from '../../containers/Layout'
import '../../assets/styles/others/Explore.css'

function Explore() {
  return (
    <Layout>
      <div className="container__main_center">
        <div className="divProfile">
          <div className="exploreSearch">
            <div className="homeRight_magnifyingGlassBg">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
                <g fill="rgb(83, 100, 113)">
                  <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
                </g>
              </svg>
            </div>
        
            <div className="homeRight_InputBg">
              <input type="text" className="homeRight_bgSearchInput seeker" placeholder="Search(no functionality)" />
            </div>
            
            <div className="homeRight_XBg">
              <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--X" alt="registerSvg">
                <g fill="black">
                  <path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z" />
                </g>
              </svg>
            </div>
          </div>
          
          <div className="profileMultimediaExplorer">
            <span style={{ width: "16.6%" }} className="onlySection">For you</span>
            <span style={{ width: "16.6%" }}>Trends</span>
            <span style={{ width: "16.6%" }}>News</span>
            <span style={{ width: "16.6%" }}>Sports</span>
            <span style={{ width: "16.6%" }}>Entertainment</span>
            <span style={{ width: "16.6%" }}>Other</span>
          </div>

          <div>
            <img data-bs-toggle="modal" data-bs-target="#modalImageProfileRandom" className="bannerImg" src="https://api.lorem.space/image/game?w=700&amp;amp;amp;amp;h=400" alt="img" />
          </div>

          <div className="trendsIn">
            <span>Trend in Video Games</span>
            <p>GTA 6</p>
            <span>18,200 Tweets</span>
          </div>
          <div className="trendsIn">
            <span>Trends</span>
            <p>Hello</p>
            <span>54,800 Tweets</span>
          </div>
          <div className="trendsFlex">
            <div>
              <span>World News</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illo omnis veniam?</p>
              <span>33,000 Tweets</span>
            </div>
            <img src="https://media.istockphoto.com/photos/metaverse-conceptwoman-using-laptop-with-planet-screen-picture-id1359501913?k=20&m=1359501913&s=612x612&w=0&h=4vSKg3pznUhKJhRPXwjRGrKTM4VzPxbrmaosKVTeV7g=" alt="img" />
          </div>
          <div className="trendsIn">
            <span>Trend in Video Games</span>
            <p>GTA 6</p>
            <span>18,200 Tweets</span>
          </div>
          <div className="trendsIn">
            <span>Trends</span>
            <p>Hello</p>
            <span>54,800 Tweets</span>
          </div>
          <div className="trendsFlex">
            <div>
              <span>World News</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illo omnis veniam?</p>
              <span>33,000 Tweets</span>
            </div>
            <img src="https://images.unsplash.com/photo-1625191657244-31aede08b673?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8ZnV0Ym9sfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
          </div>
          <div className="trendsIn">
            <span>Trend in Video Games</span>
            <p>GTA 6</p>
            <span>18,200 Tweets</span>
          </div>
          <div className="trendsIn">
            <span>Trends</span>
            <p>Hello</p>
            <span>54,800 Tweets</span>
          </div>

          <div className="trendsFlex">
            <div>
              <span>World News</span>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur illo omnis veniam?</p>
              <span>33,000 Tweets</span>
            </div>
            <img src="https://images.unsplash.com/photo-1586182987320-4f376d39d787?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlkZW8lMjBnYW1lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="img" />
          </div>

          <h5 className="h1_others">Others</h5>
          <div className="Home__center_whatprofile Home__center_tweetsection Home__explore_tweetsection">

            <div className="Home__center_whatprofile-img">
              <img title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
            </div>
            
            <div className="Home__center_whatprofile-content">
              <div className="Home__center_whatprofile-input">
                <div className="Home__center_topTweetText">
                  <div>
                    <span className="Home__center_TextProfile">user46</span>
                    <span className="Home__center_TextUsername">@user46</span>
                    <span className="Home__center_Dot">·</span>
                    <span className="Home__center_Time">hace 14 horas</span>
                  </div>
                  
                  <div>
                    <svg viewBox="0 0 30 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
                      <g fill="rgba(29,161,242,1.00)">
                        <circle cx="5" cy="12" r="2"></circle>
                        <circle cx="12" cy="12" r="2"></circle>
                        <circle cx="19" cy="12" r="2"></circle>
                      </g>
                    </svg>
                  </div>
                </div>

                <div>
                  <figure className="Home__center_figcapTweet">
                    <figcaption>Let's share images from our gallery!</figcaption>
                    <img className="Home__center_imgTweet" src="https://cdn.pixabay.com/photo/2015/08/25/03/50/background-906135__340.jpg" alt="imgtesting" />
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Explore