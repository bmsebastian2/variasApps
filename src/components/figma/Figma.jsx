import React, { useState } from 'react'
import './figma.css'

import Boton1 from './Boton1';
import Boton2 from './Boton2';
import Boton3 from './Boton3';
import Inicio from './Inicio';




const Figma = () => {


    
    const [swMenu, setSwMenu] = useState(4)
    

    let cambioMenu = (e) => {
        
        setSwMenu(e.target.id)

    }
    let Objeto = {

        1 : <Boton1/>,
        2 : <Boton2/>,
        3 : <Boton3/>,
        4 : <Inicio/>

    }

    return (
        <div>
  
            
            <div className="contenedoRouter">
    
                <div className="cont1 cont">display1</div>
                <div className=""></div>
                <div className="cont cont2">
               
                            <div className="menu ">
                                
                                                <button className="btn btn-primary" id = '4' onClick={(event) =>cambioMenu(event)}>inicio</button>
                                                
                                                <button className="btn btn-primary" id = '1' onClick={(event) =>cambioMenu(event)} >Boton1</button>
                                                                                      
                                                <button className="btn btn-primary " id = '2' onClick={(event) =>cambioMenu(event)}>Boton1</button>
                                                                   
                                                <button className="btn btn-primary" id = '3' onClick={(event) =>cambioMenu(event)}>Boton3</button>
                                                                                                         
                                       
                            </div>
                </div>

          
                <div className="cont cont3">                    
                    
                                    {
                                        Objeto[swMenu]
                                    }                                                               
                  
                </div>
            
            
                <div className="cont cont4">display4</div>
                <div className=""></div>
                <div className="cont cont5">display5</div>
     
            </div>
            
        </div>
    )
}

export default Figma
