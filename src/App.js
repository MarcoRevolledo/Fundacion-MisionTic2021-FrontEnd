import "./App.css";
import React from "react";
import AppRoute from "./utils/AppRoute"
import AuthProvider from "./auth/AuthProvider";

class App extends React.Component{
  render() {
    return(
      <AuthProvider>
        <AppRoute /> 
      </AuthProvider>
     
    )
    
  }
}

export default App;
