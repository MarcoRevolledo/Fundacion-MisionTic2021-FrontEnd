import React from "react";
import { Link } from "react-router-dom";
import Encabezado from "../componentes/Encabezado";
import APIInvoke from '../utils/APIInvoke'

class Padrino extends React.Component{
   
    constructor(args){
        super(args)
        this.state={
            padrinos: []
        }
    }

    async componentDidMount(){
        const response = await APIInvoke.invokeGET("/api/v1/padrinos/")
        
        this.setState({
            padrinos:response
        })
    }

    async remove(e, padrino) {
        e.preventDefault();
        await APIInvoke.invokeDELETE(`/api/v1/padrinos/${padrino.doc}/`)
    }    
    render(){

        const arregloPadrinos=this.state.padrinos
        return(
            <div>
                <Encabezado/>
                <section>
                    <div className="container">
                        <div className="d-grid gap-2">
                            <Link to="/crear-padrino/" className="btn btn-primary">Crear Nuevo Padrino</Link>
                        </div>
                        <div>
                            <table className="table table-bordered table-striped table-hover mt-4">
                                <thead>
                                    <tr>
                                        <th scope="col">ID</th>
                                        <th scope="col">CÉDULA</th>
                                        <th scope="col">APELLIDOS</th>
                                        <th scope="col">NOMBRES</th>
                                        <th scope="col">NIÑO</th>
                                        <th scope="col">DIRECCIÓN</th>
                                        <th scope="col">CONTACTO</th>
                                        <th scope="col">ACCIONES</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        arregloPadrinos.map(
                                            padrino=>
                                                <tr>
                                                <td>{padrino.id}</td>
                                                <td>{padrino.persona.doc}</td>
                                                <td>{padrino.persona.apellido}</td>
                                                <td>{padrino.persona.nombres}</td>
                                                <td></td>
                                                <td>{padrino.persona.direccion}</td>
                                                <td>{padrino.telefono}</td>
                                                <td>
                                                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modaleditar">Editar</button>
                                                    <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalasignar">Asignar Niño</button>
                                                    <button type="button" className="btn btn-outline-primary" onClick={this.remove}>Eliminar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}
export default Padrino;