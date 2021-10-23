import React from "react";
import Encabezado from "../componentes/EncabezadoSI";
import APIInvoke from "../utils/APIInvoke";
import { Link } from "react-router-dom";
import swal from "sweetalert";


class Niños extends React.Component{
    constructor(args){
        super(args)
        this.state={
            niños: []
        }
    }

    async componentDidMount(){
        try{
            const response = await APIInvoke.invokeGET("/api/v1/niños/")

            this.setState({
            niños:response
        })
        console.log(this.state.niños)

        }catch(error){
            console.log(error)
        }
        
    }

    async componentDidUpdate(){
        const response = await APIInvoke.invokeGET("/api/v1/niños/")
        
        this.setState({
            niños:response
        })
    }

    Remove(e, niño) {

        e.preventDefault();
        swal({
            title:"Eliminar",
            text:"Estas seguro que desea eliminar el niño con documento "+niño.persona.doc,
            icon: "warning",
            buttons: ["No","De acuerdo"]
        }).then(respuesta=>{
            if(respuesta){
                APIInvoke.invokeDELETE(`/api/v1/niños/${niño.persona.doc}/`)
                swal({
                    text:"El niño se ha eliminado correctamente",
                    icon:"success"})
            }
        })
    } 


    

    render(){
        const arregloNiños=this.state.niños
        return <div>
            <Encabezado />
                <section>
                <div className="container">
                    <div className="d-grid gap-2">
                        <Link className="btn btn-primary" to="/crear-niño/">Crear Nuevo Niño</Link>
                        <br/>
                    </div>
                    <div>
                        {
                        arregloNiños.length === 0 ? <div className="alert alert-warning">No existen Registros.</div>:
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
                                                <Link type="button" className="btn btn-outline-primary" to={`/editar-niño/${niño.persona.doc}`}>Editar</Link>
                                                {/*<button type="button" className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#modalasignar">Asignar Padrino</button>*/}
                                                <button type="button" onClick={(e) => this.Remove(e, niño)} className="btn btn-outline-primary" >Eliminar</button>
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
    }
}
export default Niños;