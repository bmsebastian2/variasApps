import React from 'react'
import HookBotonAddEdit from './HookBotonAddEdit'


const FormPersona = ({persona, setPersona, edit, agregarPersona, setEdit}) => {
    
    const  {nombre , apellido} = persona
    
    // setPersona({id : Math.floor(Math.random() * (500 - 0)) + 0})
    // const {nombre, apellido} = persona
    
    const handleFunction = (e) => {
         e.preventDefault()
         agregarPersona(persona)   
           
    }
    const changePersona = (e) =>{
        if(edit>0){
            setPersona({...persona,[e.target.name] : e.target.value})
        }else{
            let i = ( Math.floor(Math.random() * (500 - 0)) + 0 )
            setPersona({...persona,[e.target.name] : e.target.value, id : i})
        }
    
        
     
       
    }

    return (
        <div>
            <div className="text-center m-5">
                <p className="display-6">Formulario:</p>               

            </div>
            <div className="">
                <form action="" className="text-center" onSubmit= {handleFunction}>
                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Nombre</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name = 'nombre'
                        value = {nombre}
                        onChange = {(e)=>changePersona(e)}
                        required = {true}
                       
                    />
                     <span className="input-group-text" id="basic-addon1">Apellido</span>
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Username" 
                        name = 'apellido'
                        value = {apellido}
                        onChange = {(e)=>changePersona(e)}
                        required = {true}
                    />
                </div>
                   
                   <HookBotonAddEdit edit = {edit} setEdit = {setEdit}/>
                    
                        
                </form>
            </div>
            
        </div>
    )
}

export default FormPersona
