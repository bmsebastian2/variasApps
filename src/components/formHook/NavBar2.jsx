import React from 'react'
import { useForm } from "react-hook-form"


const NavBar2 = ({setList,list}) => {
    const { register, handleSubmit, reset, setFocus,formState: { errors } } = useForm()
    const addUser = (e) =>{
        setList([
            ...list,e
        ])
       
        reset(e.target)  
        setFocus('email')
    }
    
    return (
        <form action="" className='mt-3 text-center' onSubmit={handleSubmit(addUser)}>
        <div className="form-floating mb-3">
            <input 
                type="email" 
                className="form-control" 
                id="floatingInput" 
                placeholder="name@example.com"
                {...register('email',{required:true})}
            
                />
                  {errors.email && <span className='text-danger'>This field is required</span>}
            <label forHtml="floatingInput">Email address</label>
        </div>
        <div class="form-floating">
            <input 
                type="password" 
                className="form-control" 
                id="floatingPassword" 
                placeholder="Password"
                {...register('password',{required:true})}
                />
                {errors.password && <span className='text-danger'>This field is required</span>}
            <label for="floatingPassword">Password</label>
        </div>
        <input 
            type="submit" 
            className="btn btn-primary mt-3" />
    </form>
    )
}

export default NavBar2
