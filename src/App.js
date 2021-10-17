import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Padrino from "./pages/Padrino";
import RegistroPadrino from "./pages/RegistroPadrino"
import Niños from "./pages/Niños"
import RegistroNiño from "./pages/RegistroNiño";

class App extends React.Component{
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/dashboard/" exact component={Dashboard}></Route>
          <Route path="/padrinos/" exact component={Padrino}></Route>
          <Route path="/crear-padrino/" exact component={RegistroPadrino}></Route>
          <Route path="/niños/" exact component={Niños}></Route>
          <Route path="/crear-niño/" exact component={RegistroNiño}></Route>

        </Switch>
      </Router>
    )
    
  }
}

export default App;
