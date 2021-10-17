import React from "react";
import {Link} from 'react-router-dom'
import logo from "../assets/logo2.png"


class Encabezado extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-primary bg-opacity-40 ">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <Link className=" d-flex align-items-center col-md-1 mb-2 mb-md-0 text-dark text-decoration-none text-white" to="/">
              <img src={logo} alt="mdo" width="160" height="45" className=""/>
            </Link>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><Link to="/" className="nav-link px-2 link-secondary text-white">Home</Link></li>
              <li><Link to="#" className="nav-link px-2 link-dark text-white">¿Quienes Somos?</Link></li>
              <li><Link to="#" className="nav-link px-2 link-dark text-white">Colabora</Link></li>
              <li><Link to="#" className="nav-link px-2 link-dark text-white">FAQs</Link></li>
            </ul>
            <div className="col-md-3 text-end">
                <Link to="/dashboard/" className="btn btn-primary">Iniciar Sesion</Link>
                <Link to="/crear-padrino/" className="btn btn-light" >Registrarse</Link>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Encabezado;
