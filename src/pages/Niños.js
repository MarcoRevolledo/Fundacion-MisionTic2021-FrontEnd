import React from "react";
import Encabezado from "../componentes/Encabezado";
import APIInvoke from "../utils/APIInvoke";
import { Link } from "react-router-dom";


class Niños extends React.Component{
    constructor(args){
        super(args)
        this.state={
            niños: []
        }
    }

    async componentDidMount(){
        const response = await APIInvoke.invokeGET("/api/v1/niños/")
        
        this.setState({
            niños:response
        })
        console.log(this.state.niños)
    }

    render(){
        const arregloNiños=this.state.niños
        return <div>
            <Encabezado />
                <section>
                <div className="container">
                    <div className="d-grid gap-2">
                        <Link className="btn btn-primary" to="/crear-niño/">Crear Nuevo Niño</Link>
                    </div>
                    <div>
                        <table className="table table-bordered table-striped table-hover mt-4">
                            <thead>
                                <tr>
                                    <th scope="col">ID</th>
                                    <th scope="col">APELLIDOS</th>
                                    <th scope="col">NOMBRES</th>
                                    <th scope="col">PADRINO</th>
                                    <th scope="col">DIRECCION</th>
                                    <th scope="col">CONTACTO</th>
                                    <th scope="col">ACCIONES</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    arregloNiños.map(
                                        niño=>
                                        <tr>
                                            <td>{niño.id}</td>
                                            <td>{niño.persona.apellido}</td>
                                            <td>{niño.persona.nombres}</td>
                                            <td>{(niño.padrino === null ) ? "Este niño no se le ha asignado un padrino aun" : niño.padrino.persona.nombres+" "+niño.padrino.persona.apellido }</td>
                                            <td>{niño.persona.direccion}</td>
                                            <td>{niño.contacto_acudiente}</td>
                                            <td>
                                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modaleditar">Editar</button>
                                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalasignar">Asignar Padrino</button>
                                                <button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modaleliminar">Eliminar</button>
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
    }
}
export default Niños;