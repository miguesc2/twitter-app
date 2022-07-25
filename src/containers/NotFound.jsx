import { Link } from "react-router-dom";
import '../assets/styles/NotFound.css'

const NotFound = () => (
  <div className="notFound">
    <p>Page Not Found.</p>
    <div><Link className="linkStyle" to="/">Inicio</Link></div>
  </div>
)

export default NotFound
