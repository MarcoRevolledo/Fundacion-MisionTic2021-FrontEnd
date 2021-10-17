import React from 'react'
import APIInvoke from '../utils/APIInvoke';

class RegistroNiño extends React.Component{
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
            fec_registro:'',
            acudiente:'',
            contacto_acudiente:'',
            indicativo_contacto_acudiente:''
        }
        this.handleChangePersona = this.handleChangePersona.bind(this);
        this.addPersona=this.addPersona.bind(this)
    }

    async componentDidMount(){
        
    }

    handleChangePersona(event){
        const name = event.target.name;
        const value = event.target.value;
        console.log("nombre:"+name+"  Valor:"+value)
        this.setState({
            [name]:[value]
        });
    }

    async addPersona(){
   
        let data=JSON.stringify({
           persona:{
                doc:this.state.doc.toString(),
                apellido:this.state.apellido.toString(),
                direccion:this.state.direccion.toString(),
                fec_nac:this.state.fec_nac.toString(),
                fec_registro:this.state.fec_registro.toString(),
                foto:this.state.foto.toString(),
                nombres:this.state.nombres.toString(),
                tipo_doc:this.state.tipo_doc.toString()
            },
            acudiente:this.state.acudiente.toString(),
            contacto_acudiente: this.state.contacto_acudiente.toString()  
        })
        const response = await(APIInvoke.invokePOST('/api/v1/niños/', data))
        return console.log(response)
    }
    
    render(){

        return (
        <div className="container">  
            <h5 className="modal-title">Registro niños Beneficiarios</h5>
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
                                    <div className="input-group">
                                        <span className="input-group-text">+</span>
                                        <input type="number" className="form-control col-1" id="indicativo_contacto_acudiente" name="indicativo_contacto_acudiente" value={this.state.indicativo_contacto_acudiente} onChange={this.handleChangePersona} />
                                        <input type="tel" className="form-control" id="contacto_acudiente" name="contacto_acudiente" value={this.state.contacto_acudiente} onChange={this.handleChangePersona} />
                                    </div>
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

                                    <div className="mb-3">
                                        <label htmlFor="fec_registro_nino" className="col-form-label">Fecha de registro:</label>
                                        <input type="date" className="form-control" id="fec_nac_nino" name="fec_registro" value={this.state.fec_registro} onChange={this.handleChangePersona} />
                                    </div>

                                </div>
                            </div>
                        </form>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                        <button onClick={this.addPersona} type="button" className="btn btn-primary">Guardar</button>
                    </div>
            </div>
        

        )}
}
export default RegistroNiño;