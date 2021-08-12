import React,{useState} from 'react'

const Formulario = () => {

    const [objeto, setObjeto] = useState({nombre : '', apellido : ''})
    const {nombre,apellido} = objeto;

    const handleSubmit = (e) => {
           setObjeto({
               ...objeto,[e.target.name] : e.target.value
           })
    }
    const omSubmit = (e) => {
        e.preventDefault()
        console.log(objeto)
    }
    return (
        <div>
             <div className="text-center text-primary">
                <p className="display-6">#06 Curso de React Hooks [ Formularios onChange & onSubmit]</p> 

                <div className="row">
                    <div className="col border border-success">
                        <form action="" onSubmit={omSubmit}>
                            <input 
                                type="text" 
                                className = 'form form-control my-2'
                                placeholder = 'Ingrese nombre' 
                                name = 'nombre'
                                onChange = {handleSubmit}  

                            />
                             <input 
                                type="text" 
                                className = 'form form-control my-2'
                                placeholder = 'Ingrese apellido' 
                                name = 'apellido'
                                onChange = {handleSubmit}    

                            />
                            <input 
                                type="submit" 
                                placeholder='Enviar'
                                className='btn btn-primary my-2'

                            />
                        </form>

                    </div>
                    <div className="col border border-primary">
                        <p className='display-4'>{nombre}</p>
                        <p className='display-4'>{apellido}</p>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">

                </div>
            </div>
               
        </div>
    )
}

export default Formulario
