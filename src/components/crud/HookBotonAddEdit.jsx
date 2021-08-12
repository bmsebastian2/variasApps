import React from 'react'

const HookBotonAddEdit = ({edit,setEdit}) => {
    
   
    return (
        <div>
             {
             
                (edit > 0)?
                   <>
                     <p>Agregar <span className=" nuevoUsuario" onClick={()=>setEdit(0)}>Nuevo Usuario</span></p>
                     <input  type="submit" className = 'btn btn-warning m-3' value = 'Editar'/>
                   </>
                    
                
                :
                
                    <input  type="submit" className = 'btn btn-success m-3' />
            }
        </div>
    )
}

export default HookBotonAddEdit
