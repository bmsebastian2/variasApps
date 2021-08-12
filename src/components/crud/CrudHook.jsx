import React, {useState} from 'react'
import './crudcss.css'
import FormPersona from './FormPersona'
import HookCardList from './HookCardList'


const CrudHook = () => {
    const resetPersona = {nombre : '', apellido : '', id : ''}
    const [personaList, setPersonaList] = useState([])
    const [persona, setPersona] = useState(resetPersona)
    const [edit, setEdit] = useState(0)
   
  
    const agregarPersona =  (e) => {
        if(edit > 0){
            console.log(persona)
            let arr = personaList.map((a)=>(a.id === e.id)?e:a)
            console.log(arr)
            //  console.log(arr)   
             setPersonaList(arr)
             setPersona(resetPersona)
             setEdit(0)
        }else{
            setPersonaList([e,...personaList])
            setPersona(resetPersona)
        }
       
    }
    const buscarPersona = (e) => {
        setEdit(1)
        let encontrado = personaList.find(a => a.id == e)
        setPersona(encontrado)

    }
    const eliminar = (event) => {

            let num = 0
             let arr = []
             num = parseInt(event.target.id)
             arr = (personaList.filter( a => a.id !== num))
             setPersonaList(arr);    
    }
  
    

    return (
        <div>
            
            <div className="text-center text-danger">
                <p className="display-6">#10 React Hooks 😍 | Aplicación CRUD [ curso en Español 2020 ]</p>
            </div>


            <div className="row">
                
                <div className="col m-3 border">
                        <FormPersona     
                           persona = {persona}
                           setPersona = {setPersona}
                           edit = {edit}
                           agregarPersona = {agregarPersona}
                           setEdit = {setEdit}
                      
                         /> 
                </div>
                
                <div className="col text-center m-3 border"> 
                        <HookCardList 
                            personaList = {personaList}
                            buscarPersona= {buscarPersona}
                            eliminar = {eliminar}
                             
                            
                            />
                </div>

            </div>
            
            
         
        </div>
    )
}

export default CrudHook
