import React from 'react';
import Encabezado from '../componentes/Encabezado';
import APIInvoke from '../utils/APIInvoke';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';

class EditarNiño extends React.Component{

    constructor(args){
        super(args)
        this.state={
            tipo_doc:'',
            doc:'',
            apellido:'',
            nombres:'',
            fec_nac:'',
            foto:'',
            direccion:'',
            acudiente:'',
            contacto_acudiente:'',
            fec_registro:''
        }
        this.handleChangePersona= this.handleChangePersona.bind(this)
        this.editPersona=this.editPersona.bind(this)
    }
    async componentDidMount(){
        const Niñodoc= this.props.match.params.nino_doc;
        const response= await APIInvoke.invokeGET(`/api/v1/niños/${Niñodoc}`)
        console.log(response)

        this.setState({
            tipo_doc:response.persona.tipo_doc,
            doc:response.persona.doc,
            apellido:response.persona.apellido,
            nombres:response.persona.nombres,
            fec_nac:response.persona.fec_nac,
            foto:response.persona.foto,
            direccion:response.persona.direccion,
            acudiente:response.acudiente,
            contacto_acudiente:response.contacto_acudiente,
            fec_registro:response.persona.fec_registro
            
        })
    }
    
    handleChangePersona(event){
        const name = event.target.name;
        const value = event.target.value;
        console.log("nombre:"+name+"  Valor:"+JSON.stringify(value))
        this.setState({
            [name]:[value]
        });
    }

    async editPersona(){
        const data=JSON.stringify({
            persona:{
                tipo_doc:this.state.tipo_doc.toString(),
                doc: this.state.doc.toString(),
                apellido:this.state.apellido.toString(),
                nombres: this.state.nombres.toString(),
                fec_nac: this.state.fec_nac.toString(),
                fec_registro:this.state.fec_registro.toString(),
                foto: this.state.foto.toString(),
                direccion: this.state.direccion.toString(),
            },      
            acudiente:this.state.acudiente.toString(),
            contacto_acudiente:this.state.contacto_acudiente.toString()
            })
            swal({
                title:"Editar",
                text:"Estas seguro que desea editar los campos "+this.state.doc,
                icon: "warning",
                buttons: ["No","De acuerdo"]
            }).then(respuesta=>{
                if(respuesta){
                    var response = APIInvoke.invokePUT('/api/v1/niños/', data)
                    
                }
                    if (response.id !== 0){
                        swal({
                            text:"El niño se ha editado correctamente",
                            icon:"success"})
                        this.props.history.push(`/niños/`)
                    }else{
                        swal({
                            text:"Ha ocurrido un error",
                            icon:"error"})
                    }
            })                

    }
    render(){
        return(
            <div>
                <Encabezado />
                <div className="container pt-5">  
            <div className="text-center pb-3"><h5 className="modal-title">Editar niños Beneficiarios</h5></div>
            <div className="row aling-rigth">
                <Link to="/niños/"type="button" className="btn btn-secondary col-auto" >Cerrar</Link>
                <button onClick={this.addPersona} type="button" className="btn btn-primary col-auto">Guardar</button>
            </div>
            <form>
            <div className="card">
                <div className="card-header text-center">Datos del Acudiente</div>
                <div className="card-body">
                    <div className="mb-3">
                        <label htmlFor="nombre_acudiente" className="col-form-label">Nombre:</label>
                        <input type="text" className="form-control" id="nombre_acudiente" name="acudiente" value={this.state.acudiente} onChange={this.handleChangePersona}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="contacto_acudiente" className="col-form-label">Telefono:</label>
                        <input type="tel" className="form-control" id="contacto_acudiente" name="contacto_acudiente" value={this.state.contacto_acudiente} onChange={this.handleChangePersona} />

                    </div>
                </div>
            </div>
                        <div className="card mt-3">
                            <div className="card-header text-center"> Datos Del Niño</div>
                                <div className="card-body">
                                    <div className="mb-3">
                                        <label htmlFor="tipo_doc" className="col-form-label">Tipo de Documento:</label>
                                        <select className="form-select" id="tipo_doc" aria-label="Default select example" name="tipo_doc" value={this.state.tipo_doc} onChange={this.handleChangePersona}>
                                            <option value="" disabled></option>
                                            <option value="TI">Tarjeta de Identidad</option>
                                            <option value="RC">Registro Civil</option>
                                            <option value="CE">Cedula de Extranjeria</option>
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="doc_nino" className="col-form-label" >Documento:</label>
                                        <input type="text" className="form-control" id="doc_nino" name="doc" value={this.state.doc} onChange={this.handleChangePersona} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="nombres_nino" className="col-form-label">Nombres:</label>
                                        <input type="text" className="form-control" id="nombres" name="nombres" value={this.state.nombres} onChange={this.handleChangePersona} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="apellidos_nino" className="col-form-label">Apellidos:</label>
                                        <input type="text" className="form-control" id="apellidos_nino" name="apellido" value={this.state.apellido} onChange={this.handleChangePersona} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="fec_nac_nino" className="col-form-label">Fecha de nacimiento:</label>
                                        <input type="date" className="form-control" id="fec_nac_nino" name="fec_nac" value={this.state.fec_nac} onChange={this.handleChangePersona} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="foto_nino" className="col-form-label">Foto:</label>
                                        <input type="text" className="form-control" id="foto_nino" name="foto" value={this.state.foto} onChange={this.handleChangePersona} />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="direccion_nino" className="col-form-label">Direccion:</label>
                                        <input type="text" className="form-control" id="direccion_nino" name="direccion" value={this.state.direccion} onChange={this.handleChangePersona}/>
                                    </div>
                                </div>
                            </div>
                            
                        </form>
                    <div className="modal-footer">
                        <Link to="/niños/"type="button" className="btn btn-secondary" >Cerrar</Link>
                        <button onClick={this.editPersona} type="button" className="btn btn-primary">Guardar</button>
                    </div>


            </div>
            </div>
            
            
        );
    }
    }
export default EditarNiño;