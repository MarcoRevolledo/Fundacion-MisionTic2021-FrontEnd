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
            <div className="dropdown text-end col-md-1">
                    <Link to="#" className="d-block link-dark text-decoration-none dropdown-toggle text-end" id="menudesplegable" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="mdo" width="32" height="32" className="rounded-circle" />
                    </Link>
                    <ul className="dropdown-menu text-small" aria-labelledby="menudesplegable">
                        <li><Link to="/dashboard/" className="dropdown-item" >Dashboard</Link></li>
                        <li><Link to="/niños/" className="dropdown-item" >Niños</Link></li>
                        <li><Link to="/padrinos/" className="dropdown-item" >Padrinos</Link></li>
                        
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link to="/" Link className="dropdown-item" >Cerrar sesión</Link></li>
                    </ul>
                </div>
          </header>
        </div>
      </div>
    );
  }
}

export default Encabezado;
