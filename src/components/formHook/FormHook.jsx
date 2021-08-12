import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import AlertMod from './AlertMod'
import NavBar2 from './NavBar2';

const FormHook = () => {

    const { register, handleSubmit, setFocus, reset, formState: { errors } } = useForm();
    
    const [list, setList] = useState([])
    
    const onSubmit = (e) =>{
        
        reset(e.target)
        setFocus('correo')
    }
  
    return (
        <div>
             <div className="text-center text-danger">
                <p className="display-6">#07 Curso de React Hooks [ React Hook Form ]</p>
            </div>

            <div className="row">
                <div className="col-4 border">
                    <form action="" onSubmit = {handleSubmit(onSubmit)}>
                            <div className="mb-3">
                                    <label htmlFor="exampleFormControlInput1" className="form-label">Dirección Email</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"
                                        {...register('correo',{required:true})}                                     

                                        />
                                        {errors.correo && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="mb-3">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Ingrese información</label>
                                    <textarea className="form-control"
                                         id="exampleFormControlTextarea1"
                                         rows="3"
                                         {...register('informacion',{required:true})}

                                         />
                                         {errors.informacion && <span className="text-danger">This field is required</span>}



                            </div>
                            <div className="mb-3">
                                    <select {...register('detalles',{required:true})} className="form-select" aria-label="Default select example" >
                                        <option value="">Open this select menu</option>
                                        <option
                                            value='express'
                                      
                                          >Express hoy
                                        </option>
                                        <option
                                           value="24h"
                                           
                                        >Normal 24 horas
                                        </option>
                                        <option
                                            value="free"
                                            
                                            >Gratis 48 horas
                                            </option>
                                        
                                    </select>
                                    {errors.detalles && <span className="text-danger">This field is required</span>}
                            </div>
                            <div className="mb-3">
                                <div className="form-check form-switch">
                                <input 
                                    className="form-check-input" 
                                    type="checkbox" 
                                    id="flexSwitchCheckDefault"
                                    {...register('vip')}
                                    />
                                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Acepto lo terminos</label>
                                </div>
                            </div>
                            <input className = 'btn btn-primary mb-3' type="submit" />
                    </form>

                </div>
                <div className="col-4 border text-center">
                    {(list.length>0)?
                        list.map((a, item) => <AlertMod key = {item} element = {a} />):'No existen regsitros'
                    }
                    
                </div>
                <div className="col-4 border">

                        <NavBar2 
                            setList = {setList} 
                            list = {list}
                        />
                   

                </div>
            </div>
        </div>
    )
}

export default FormHook
