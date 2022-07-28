import React from 'react'
import { useParams } from 'react-router-dom'
import Layout from '../../containers/Layout'

function ExploreRight() {
    const postsId = useParams()
    const arr = [
        { text: "The meme for the funniest people on the planet", img: "https://i.pinimg.com/originals/98/11/02/981102ebb06a742daf1da03e6d485dfe.jpg", hashtag: <strong>#UnFulvo</strong>, img1: "https://cdn.pixabay.com/photo/2020/03/09/23/35/bonobo-4917396__340.jpg", img2: "https://cdn.pixabay.com/photo/2018/04/18/09/48/animal-3329963__340.png" },
        { text: "I'll get a job somehow.", img: "https://cdn.pixabay.com/photo/2017/03/14/03/20/woman-2141808__340.jpg", hashtag: <strong>#secureAJob</strong>, img1: "https://cdn.pixabay.com/photo/2017/01/14/10/56/people-1979261__340.jpg", img2: "https://cdn.pixabay.com/photo/2016/11/19/14/00/code-1839406__340.jpg" },
        { text: "Do we agree that we all read comics?", img: "https://cdn.pixabay.com/photo/2017/10/16/08/53/cat-2856531__340.jpg", hashtag: <strong>#comics</strong>, img1: "https://cdn.pixabay.com/photo/2018/03/18/11/55/cartoon-3236539__340.jpg", img2: "https://cdn.pixabay.com/photo/2013/07/12/15/24/wrestler-149840__340.png" },
        { text: "What is this trend?", img: "https://cdn.pixabay.com/photo/2014/12/20/19/53/decollete-574354__340.jpg", hashtag: <strong>#onlyFans</strong>, img1: "https://cdn.pixabay.com/photo/2016/10/13/00/03/girl-1736419__340.jpg", img2: "https://cdn.pixabay.com/photo/2014/01/30/01/36/girl-254708__480.jpg" }
    ]

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
              <input type="text" className="homeRight_bgSearchInput seeker" placeholder="Search(no functionality)" value={ arr[ postsId.postsId ].hashtag.props.children } />
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
            <span style={{ width: "20%" }} className="onlySection">Outstanding</span>
            <span style={{ width: "20%" }}>More recent</span>
            <span style={{ width: "20%" }}>People</span>
            <span style={{ width: "20%" }}>Photos</span>
            <span style={{ width: "20%" }}>Videos</span>
          </div>

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
                    <span className="Home__center_Time">hace { Math.floor(Math.random()*25) } horas</span>
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
                    <figcaption>{ arr[postsId.postsId].hashtag } { arr[postsId.postsId].text }</figcaption>
                    <img className="Home__center_imgTweet" src={ arr[postsId.postsId].img } alt="imgtesting" />
                  </figure>
                </div>
              </div>
            </div>
          </div>

          <div className="trendsIn">
            <span>@TylerVelez</span>
            <p>I love the { arr[postsId.postsId].hashtag }</p>
            <span>200 likes</span>
          </div>
          <div className="trendsIn">
            <span>@lawrenceffoster</span>
            <p>Ohh, again { arr[postsId.postsId].hashtag } is trending</p>
            <span>145 likes</span>
          </div>
          <div className="trendsFlex">
            <div>
              <span>@johnStanton</span>
              <p>I will leave an iconic image!! { arr[postsId.postsId].hashtag }</p>
              <span>3000 Likes</span>
            </div>
            <img src={ arr[postsId.postsId].img1 } alt="img" />
          </div>

          <div className="Home__center_whatprofile Home__center_tweetsection Home__explore_tweetsection">

            <div className="Home__center_whatprofile-img">
              <img title="view profile" src="https://api.lorem.space/image/face?w=200&amp;amp;amp;amp;h=200" alt="imgProfile" /> 
            </div>
            
            <div className="Home__center_whatprofile-content">
              <div className="Home__center_whatprofile-input">
                <div className="Home__center_topTweetText">
                  <div>
                    <span className="Home__center_TextProfile">Monica Holmes</span>
                    <span className="Home__center_TextUsername">@MonikJolms</span>
                    <span className="Home__center_Dot">·</span>
                    <span className="Home__center_Time">hace { Math.floor(Math.random()*25) } horas</span>
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
                    <figcaption>{ arr[postsId.postsId].hashtag } I'll drop this and run</figcaption>
                    <img className="Home__center_imgTweet" src={ arr[postsId.postsId].img2 }  alt="imgtesting" />
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

export default ExploreRight