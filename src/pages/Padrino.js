import React from "react";
import { Link } from "react-router-dom";
import Encabezado from "../componentes/EncabezadoSI";
import APIInvoke from '../utils/APIInvoke'
import swal from "sweetalert";

class Padrino extends React.Component{
   
    constructor(args){
        super(args)
        this.state={
            padrinos: []
        }

        this.Remove= this.Remove.bind(this)
    }

    async componentDidMount(){
        const response = await APIInvoke.invokeGET("/api/v1/padrinos/")
        
        this.setState({
            padrinos:response
        })
    }

    async componentDidUpdate(){
        const response = await APIInvoke.invokeGET("/api/v1/padrinos/")
        
        this.setState({
            padrinos:response
        })
    }

    async Remove(e, padrino) {
        e.preventDefault();
        swal({
            title:"Eliminar",
            text:"Estas seguro que desea eliminar el padrino con documento "+padrino.persona.doc,
            icon: "warning",
            buttons: ["No","De acuerdo"]
        }).then(respuesta=>{
            if(respuesta){
                APIInvoke.invokeDELETE(`/api/v1/padrinos/${padrino.persona.doc}/`)
                swal({
                    text:"El padrino se ha eliminado correctamente",
                    icon:"success"})
            }
        })
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
                            {
                                arregloPadrinos.length === 0 ? <div className="alert alert-warning">No existen Registros.</div>:
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
                                                    <Link type="button" className="btn btn-outline-primary" to={`/editar-padrino/${padrino.persona.doc}`}>Editar</Link>
                                                    <button type="button" className="btn btn-outline-primary" >Asignar Niño</button>
                                                    <button type="button" className="btn btn-outline-primary" onClick={(e) => this.Remove(e, padrino)}>Eliminar</button>
                                                </td>
                                            </tr>
                                        )
                                    }
                                    </tbody>
                                </table>

                            }
                            
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}
export default Padrino;