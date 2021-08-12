import React,{useState} from 'react'

const Array = () => {
    const [arrayNumero, setArrayNumero] = useState(['1','2','3','4'])
    const [number, setNumber] = useState(0)  
    const paisesEuropa = ['Italia','Holanda','España']
    const paisesLatinomarica = ['Uruguay','Chile']
    const unionArray = [...paisesEuropa,...paisesLatinomarica]

    return (
        <div >
            <div className="text-center text-success">
                <p className="display-6">#05 Curso de React Hooks [ JSX y Recorrer Arrays con Keys ]</p> 
            </div>
               
            <div>
                <div className="row">
                    <div className="col text-center">
                        {arrayNumero.map((a,item)=><p key = {item}>Recooriendo Array, valor :  {a}</p>)}
                    </div>
                    <div className="col text-center">
                        {unionArray.map((e,items) => <p key = {items}>Pais = {e}</p>)}

                    </div>

                </div>                
                <div className="row">
                    <div className="col border text-center">
                        <p className = "display-4">{number}</p>
                    </div>
                    <div className="">
                        <button className='btn btn-primary w-100' onClick = {()=>setNumber(number+1)}>Cuenta</button>
                    </div>
                </div>
                
                
            </div>
            
        </div>
    )
}

export default Array
