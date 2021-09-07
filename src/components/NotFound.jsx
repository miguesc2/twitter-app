import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      PAGE NOT FOUND
      <div>
        <Link to="/">Inicio</Link>
      </div>
      <div>
        <Link to="/signup">Registro</Link>
      </div>
      <div>
        <Link to="/login">Inicia Sesion</Link>
      </div>
      <div>
        <Link to="/home">Home</Link>
      </div>
    </div>
  )
}

export default NotFound
