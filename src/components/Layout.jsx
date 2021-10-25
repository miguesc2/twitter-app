import HomeLeft from "./main/HomeLeft/HomeLeft"
import HomeRight from "./main/HomeRight/HomeRight"

const Layout = ({ children }) => (
  <div className="App">
    <div className="container__main">
      <div className="container__main_left">
        <HomeLeft />
      </div>

        { children }

      <div className="container__main_right">
        <HomeRight />
      </div>
    </div>
  </div>
)

export default Layout