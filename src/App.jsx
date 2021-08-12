import './styles/app.css';
import React from "react";
import Array from './components/array/Array-005' 
import Navbar from './components/Navbar'
import Bienvenida from './components/Bienvenida';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Formulario from './components/formulario/Formulario';
import FormHook from './components/formHook/FormHook';
import   CrudHook from './components/crud/CrudHook'
import Figma from './components/figma/Figma';



function App() {
  return (
    <div className="App container border">
      <header className="App-header">
      <Router>
          <Navbar/>
        <Switch>
              <Route 
                path='/5'>
                <Array/>         
              </Route>
              <Route 
                   path='/formulario'>
                   <Formulario/>
              </Route>
              <Route 
                    path='/formHook'>
                   <FormHook/>
              </Route>
            
              <Route 
                   path='/crudHook'>
                  <CrudHook/>
              </Route>

              <Route 
                   path='/figma'>
                  <Figma/>
              </Route>
             
              <Route 
                   path='/'>
                    <Bienvenida/>
              </Route>
              #05 Curso de React Hooks [ Práctica #1 ]
          </Switch>
        </Router>
        </header>
         
    </div>
  );
}

export default App;
