import React from 'react';
import APIInvoke from '../utils/APIInvoke';
import { Link } from "react-router-dom";
import Encabezado from '../componentes/EncabezadoSI';
import swal from 'sweetalert';


class EditarPadrino extends React.Component{

   
    constructor(args){
        super(args)
        this.state={
            tipo_doc:'CC',
            doc:'',
            apellido:'',
            nombres: '',
            fec_nac: '',
            foto: '',
            direccion: '',
            fec_registro: '',
            ciudad_res:'',
            telefono:'',
            email:'',
            contrasena:'',
        }
        
        this.handleChangePadrino = this.handleChangePadrino.bind(this);
        this.ActualizarPadrino=this.ActualizarPadrino.bind(this);
    }
    async componentDidMount(){
        document.getElementById("doc").focus()
        const padrinoDoc= this.props.match.params.padrino_doc;
        const response= await APIInvoke.invokeGET(`/api/v1/padrinos/${padrinoDoc}`)
        console.log(response)

        this.setState({
            tipo_doc:response.persona.tipo_doc,
            doc:response.persona.doc,
            apellido:response.persona.apellido,
            nombres: response.persona.nombres,
            fec_nac: response.persona.fec_nac,
            foto: response.persona.foto,
            direccion: response.persona.direccion,
            fec_registro: response.persona.fec_registro,
            ciudad_res:response.ciudad_res,
            telefono:response.telefono,
            email:response.email,
            contrasena:response.contrasena,
        })
    }

    handleChangePadrino(event) {
        const name = event.target.name;
        const value = event.target.value;
        console.log("nombre:"+name+"  Valor:"+value)
        this.setState({
            [name]:[value]
        })
      }

    async ActualizarPadrino(){
        
        const data=JSON.stringify({
            persona:{
                tipo_doc:this.state.tipo_doc.toString(),
                doc: this.state.doc.toString(),
                apellido:this.state.apellido.toString(),
                nombres: this.state.nombres.toString(),
                fec_nac: this.state.fec_nac.toString(),
                foto: this.state.foto.toString(),
                direccion: this.state.direccion.toString(),
                fec_registro: this.state.fec_registro.toString()
            },      
            ciudad_res:this.state.ciudad_res.toString(),
            telefono:this.state.telefono.toString(),
            email:this.state.email.toString(),
            contrasena:this.state.contrasena.toString()  
            })
            swal({
                title:"Editar",
                text:"Estas seguro que desea editar los campos "+this.state.doc,
                icon: "warning",
                buttons: ["No","De acuerdo"]
            }).then(respuesta=>{
                if(respuesta){
                    var response = APIInvoke.invokePUT('/api/v1/padrinos/', data)
                    
                }
                    if (response.id !== 0){
                        swal({
                        text:"El padrino se ha editado correctamente",
                        icon:"success"})
                        this.props.history.push(`/padrinos`)
                    }else{
                    }
            })      
    }
    
    
    render(){
        return(
            <div>
                <Encabezado />
               <div className="container pt-5">
                <div className="text-center pb-3" ><h3 className="modal-title">Editar Padrinos</h3></div>
                        <form className="form form-control">
                    
                            <Link to="/padrinos/" className="btn btn-secondary mr-2">Cancelar</Link>
                            <button onClick={this.ActualizarPadrino} type="button" className="btn btn-primary ">Guardar</button>
                            <div className="card mt-3">
                                <div className="card-header text-center"> Informacion Personal</div>
                                <div className="card-body">

                                    <div className="mb-3">
                                        <label htmlFor="tipo_doc" className="col-form-label">Tipo de Documento:</label>
                                        <select className="form-select" id="tipo_doc" aria-label="Default select example" name="tipo_doc" value={this.state.tipo_doc} onChange={this.handleChangePadrino} required disabled>
                                            <option disabled></option>
                                            <option value="CC">Cedula de Ciudadania</option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="RC">Registro Civil</option>
                                            <option value="CE">Cedula de Extranjeria</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="doc_padrino" className="col-form-label" >Documento:</label>
                                        <input type="text" className="form-control" name="doc" id="doc" value={this.state.doc} onChange={this.handleChangePadrino} disabled/>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="nombres_padrino" className="col-form-label">Nombres Completo:</label>
                                        <div className="input-group">
                                            <input type="text" className="form-control" id="nombres_padrino" name="nombres" placeholder="Nombres" value={this.state.nombres} onChange={this.handleChangePadrino} />
                                            <input type="text" className="form-control" id="apellidos_padrino" name="apellido" placeholder="Apellidos" value={this.state.apellido} onChange={this.handleChangePadrino} />
                                        </div>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="fec_nac_padrino" className="col-form-label">Fecha de nacimiento:</label>
                                        <input type="date" className="form-control" id="fec_nac_padrino" name="fec_nac" value={this.state.fec_nac} onChange={this.handleChangePadrino} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="ciudad_padrino" className="col-form-label">Ciudad de Residencia:</label>
                                        <input type="text" className="form-control" id="ciudad_padrino" name="ciudad_res" value={this.state.ciudad_res} onChange={this.handleChangePadrino}  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="direccion_padrino" className="col-form-label">Direccion:</label>
                                        <input type="text" className="form-control" id="direccion_padrino" name="direccion" value={this.state.direccion} onChange={this.handleChangePadrino}  />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="telefono_padrino" className="col-form-label">Telefono:</label>
                                        <input type="tel" className="form-control" id="telefono_padrino" name="telefono" value={this.state.telefono} onChange={this.handleChangePadrino}  />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="foto_padrino" className="col-form-label">Foto:</label>
                                        <input type="text" className="form-control" id="foto_padrino" name="foto" value={this.state.foto} onChange={this.handleChangePadrino}/>
                                    </div>                         
                                </div>
                            </div>
                            
                            <div className="card mt-3">
                                <div className="card-header text-center">Datos de Inicio de Sesion</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="usuario_padrino" className="col-form-label">Usuario:</label>
                                        <input type="text" className="form-control" id="usuario_padrino" name="email" value={this.state.email} onChange={this.handleChangePadrino} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="contrasena_padrino" className="col-form-label">Contraseña: </label>
                                        <input type="password" className="form-control" id="contrasena_padrino" name="contrasena"  value={this.state.contrasena} onChange={this.handleChangePadrino}/>
                                    </div>
                                </div>
                            </div>
                            <Link to="/padrinos/" className="btn btn-secondary">Cancelar</Link>
                            <button onClick={this.ActualizarPadrino} type="button" className="btn btn-primary">Guardar</button>
                        </form>
            </div> 
            </div>
            
        );
    }
    }
export default EditarPadrino;