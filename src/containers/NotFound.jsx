import '../assets/styles/NotFound.css'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <p>Page Not Found.</p>
      <div>
        <Link className="linkStyle" to="/">Inicio</Link>
      </div>
    </div>
  )
}

export default NotFound
