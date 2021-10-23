import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Padrino from "../pages/Padrino";
import RegistroPadrino from "../pages/RegistroPadrino"
import Niños from "../pages/Niños"
import RegistroNiño from "../pages/RegistroNiño";
import Login from "../pages/Login";
import EditarPadrino from "../pages/EditarPadrino";
import EditarNiño from "../pages/EditarNiño";


class App extends React.Component{
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/crear-padrino/" exact component={RegistroPadrino} />
          <Route path="/crear-niño/" exact component={RegistroNiño} />
          <Route path="/dashboard/" exact component={Dashboard} />
          <Route path="/padrinos/" exact component={Padrino} />
          <Route path="/editar-padrino/:padrino_doc" exact component={EditarPadrino} />
          <Route path="/niños/" exact component={Niños} />
          <Route path="/editar-niño/:nino_doc" exact component={EditarNiño}/>


        </Switch>
      </Router>
    )
    
  }
}

export default App;
