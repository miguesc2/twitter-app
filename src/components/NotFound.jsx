import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      PAGE NOT FOUND
      <Link to="/">Inicio</Link>
      <Link to="/loginpage">Registro</Link>
    </div>
  )
}

export default NotFound
