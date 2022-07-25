import '../../../assets/styles/mainCss/HomeRight.css'

const HomeRight = () => (
  <>
    <div className="home__contain_Right">
      <div className="home__right_bgSearch">
        <div className="homeRight_magnifyingGlassBg">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--svg" alt="registerSvg">
            <g fill="rgb(83, 100, 113)">
              <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z" />
            </g>
          </svg>
        </div>
        
        <div className="homeRight_InputBg">
          <input type="text" className="homeRight_bgSearchInput" placeholder="Search(no functionality)" />
        </div>
        
        <div className="homeRight_XBg">
          <svg viewBox="0 0 24 24" aria-hidden="true" className="homeRight_magnifyingGlass--X" alt="registerSvg">
            <g fill="black">
              <path d="M8.914 7.5l5.793-5.793c.39-.39.39-1.023 0-1.414s-1.023-.39-1.414 0L7.5 6.086 1.707.293c-.39-.39-1.023-.39-1.414 0s-.39 1.023 0 1.414L6.086 7.5.293 13.293c-.39.39-.39 1.023 0 1.414.195.195.45.293.707.293s.512-.098.707-.293L7.5 8.914l5.793 5.793c.195.195.45.293.707.293s.512-.098.707-.293c.39-.39.39-1.023 0-1.414L8.914 7.5z" />
            </g>
          </svg>
        </div>
      </div>

      <div className="homeRight_Section mt-4">
        <p className="">What's going on</p>

        <div className="homeRight_Section_Spacing">
          <div className="homeRight_trendText">
            <span className="homeRight_trendTexts">Trend in Colombia</span>
            <img className="imgFulvo" src="https://i.pinimg.com/originals/98/11/02/981102ebb06a742daf1da03e6d485dfe.jpg" alt="futbolExpert" />
          </div>

          <p className="homeRight_trendPh">#UnFulvo</p>
          <p className="homeRight_trendPh homeRight_trendTexts">309 mil Tweets</p>
        </div>

        <div className="homeRight_Section_Spacing">
          <div className="homeRight_trendText">
            <span className="homeRight_trendTexts">Trend in EEUU</span>

            <svg viewBox="0 0 35 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
              <g fill="rgba(29,161,242,1.00)">
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>

          <p className="homeRight_trendPh">This project secures me a job</p>
          <p className="homeRight_trendPh homeRight_trendTexts">28.5 mil Tweets</p>
        </div>

        <div className="homeRight_Section_Spacing">
          <div className="homeRight_trendText">
            <span className="homeRight_trendTexts">Trend in EEUU</span>

            <svg viewBox="0 0 35 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
              <g fill="rgba(29,161,242,1.00)">
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>

          <p className="homeRight_trendPh">someone's comics</p>
          <p className="homeRight_trendPh homeRight_trendTexts">13 mil Tweets</p>
        </div>

        <div className="homeRight_Section_Spacing">
          <div className="homeRight_trendText">
            <span className="homeRight_trendTexts">Trend in EEUU</span>
            
            <svg viewBox="0 0 35 24" aria-hidden="true" className="login__main_home--icons" alt="registerSvg">
              <g fill="rgba(29,161,242,1.00)">
                <circle cx="5" cy="12" r="2"></circle>
                <circle cx="12" cy="12" r="2"></circle>
                <circle cx="19" cy="12" r="2"></circle>
              </g>
            </svg>
          </div>

          <p className="homeRight_trendPh">#only_fans?</p>
          <p className="homeRight_trendPh homeRight_trendTexts">458 Tweets</p>
        </div>
      </div>
    </div>
  </>
)

export default HomeRight
