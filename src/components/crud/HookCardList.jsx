import React from 'react'
import CardCrud from './CardCrud'

const HookCardList = ({personaList, buscarPersona,eliminar}) => {
   
    return (
        <div>
                               
          {(personaList.length > 0)?
             personaList.map( pers => (
                <CardCrud  
                    key = {pers.id}  
                    pers = {pers}  
                    buscarPersona = {buscarPersona}
                    eliminar = {eliminar}
                    />))
            :
            <p className="display-6">No se encuentra Personas</p>
            }
          

        </div>
    )
}

export default HookCardList
