import React from "react";
import Encabezado from "../componentes/EncabezadoSI";
import {Link} from 'react-router-dom'


class Dashboard extends React.Component{

    
    render(){
        return(
            <div>
                <Encabezado />
                    <div className="container">
                        <div className="row">
                            <div className="card m-3" >
                                {/*<img src={ninosIcon} className="card-img-top" alt="Icono Niños" width="18rm" height=""/>*/}
                                <div className="card-body">
                                    <h5 className="card-title">Niños</h5>
                                    <p className="card-text">Ingresa aqui para administrar niños.</p>
                                    <Link to="/niños" className="btn btn-primary">Ir a niños</Link>
                                </div>
                            </div>
                            <div className="card m-3" >
                                {/*<img src={padrinoIcon} width="18rm" height="" className="card-img-top" alt="Icono Padrinos"/>*/}
                                <div className="card-body">
                                    <h5 className="card-title">Padrinos</h5>
                                    <p className="card-text">Ingresa aqui para administrar padrinos.</p>
                                    <Link to="/padrinos" className="btn btn-primary">Ir a Padrinos</Link>
                                </div>
                            </div>
                            <div className="card m-3">
                                <Link className="text-decoration-none" to="/home/">
                                    {/*<img src={salidaIcon} className="card-img-top" width="18rm" height="" alt="Icono Niños"/>*/}
                                    </Link>
                                <div className="card-body">
                                    <Link to="/" className=" text-decoration-none"><h5 className="card-title">Salida Segura</h5></Link>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        )
    }

}

export default Dashboard;