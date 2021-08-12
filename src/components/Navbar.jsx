import React from 'react'
import {
 
  Link
} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
               
            <div className="container-fluid">
              
              <Link className="navbar-brand" to="/">INICIO</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav text-center">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/5">5 (Array)</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/formulario">6 (Formularios)</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/formHook">7 (formHook 1)</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/formHook2">8 (formHook 2)</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/crudHook">10 (Aplicación CRUD)</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/figma">11 (figma)</Link>
                  </li>
                </ul>        
            
              </div>
            </div>
           
</nav>
    )
}

export default Navbar
