import React from 'react'

const CardCrud = ({pers,  buscarPersona,eliminar}) => {


    return (
        <div className="contenedorCard">
            <div className="contenedorInf">
                    <p>Id: ({pers.id}) Nombre : {pers.nombre} - Apellido : {pers.apellido}</p>
            </div>
            <div className="contenedorBoton">
                <button 
                    className="btn btn-outline-success m-3  btn-sm"
                    id = {pers.id}
                    onClick = {(event) =>  buscarPersona(event.target.id) }
                    >
                        Edit
                    </button>
                <button 
                    className="btn btn-outline-danger  btn-sm"
                    id = {pers.id}
                    onClick = {(event)=> eliminar(event) }
                    >
                        Eliminar
                </button>

            </div>
        </div>
    )
}

export default CardCrud
