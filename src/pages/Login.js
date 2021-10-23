import React from "react";
import { Link } from "react-router-dom";

class Login extends React.Component{
    
    constructor(args){
        super(args);
        this.state={
            email:'',
            password:''
        }

        this.handleLogin= this.handleLogin.bind(this);
    }
    
    handleLogin(event){
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]:[value]
    })
}

    render(){
        return(
            <div>
                <div className= "container mt-5 p-4 text-center border border-dark">
                    <h3>Iniciar Sesion</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="Correo" className="form-label">Correo </label>
                            <input type="email" className="form-control" id="exampleInputEmail1" name="email" value={this.state.email} onChange={this.handleLogin} aria-describedby="emailHelp" />
                            <div id="emailHelp" className="form-text">Jamas compartiremos tu informacion con terceros.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInput" className="form-label">Contraseña</label>
                            <input type="password" className="form-control" id="password" name="password" value={this.state.password} onChange={this.handleLogin} />
                        </div>
                        <div className="row">
                            <Link to="/dashboard/" className="btn btn-primary">Ingresar</Link>

                        </div>
                        <Link to="/" className="btn btn-light">Atras </Link>
                        <Link to="/crear-padrino/" className="btn btn-light">Registrarse </Link>
                        
                        
                    </form>
                </div>
            </div>
        )
    }
}
export default Login