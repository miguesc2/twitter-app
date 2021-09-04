import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      PAGE NOT FOUND
      <div>
        <Link target="_blank" to="/">Inicio</Link>
      </div>
      <div>
        <Link target="_blank" to="/signup">Registro</Link>
      </div>
      <div>
        <Link target="_blank" to="/login">Inicia Sesion</Link>
      </div>
      <div>
        <Link target="_blank" to="/home">Home</Link>
      </div>
    </div>
  )
}

export default NotFound
