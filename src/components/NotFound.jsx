import '../assets/styles/NotFound.css'
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notFound">
      <p>Esta página no existe. Intenta hacer otra búsqueda.</p>
      <div>
        <Link className="linkStyle" to="/home">Iniciar Sesion</Link>
      </div><br />
      <div>
        <Link className="linkStyle" to="/">Inicio</Link>
      </div>
    </div>
  )
}

export default NotFound
