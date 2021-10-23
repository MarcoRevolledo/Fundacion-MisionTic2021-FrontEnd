import React from "react";
import {NavLink} from 'react-router-dom'
import logo from "../assets/logo2.png"


class Encabezado extends React.Component {
  render() {
    return (
      <div>
        <div className="container-fluid bg-primary bg-opacity-40 ">
          <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
            <NavLink className=" d-flex align-items-center col-md-1 mb-2 mb-md-0 text-dark text-decoration-none text-white" to="/">
              <img src={logo} alt="mdo" width="160" height="45" className=""/>
            </NavLink>
            <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
              <li><NavLink to="/" className="nav-link px-2 link-secondary text-white">Home</NavLink></li>
              <li><NavLink to="#" className="nav-link px-2 link-dark text-white">¿Quienes Somos?</NavLink></li>
              <li><NavLink to="#" className="nav-link px-2 link-dark text-white">Colabora</NavLink></li>
              <li><NavLink to="#" className="nav-link px-2 link-dark text-white">FAQs</NavLink></li>
            </ul>
            <div className="col-md-3 text-end">
                <NavLink to="/login/" className="btn btn-primary">Iniciar Sesion</NavLink>
                <NavLink to="/crear-padrino/" className="btn btn-light" >Registrarse</NavLink>
            </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Encabezado;
