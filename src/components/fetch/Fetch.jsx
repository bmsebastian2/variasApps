import React from 'react'
import { useState, useEffect } from 'react'

import './fetch.css'

const Fetch = () => {
    
    const [state, setState] = useState({})
    const [company, setCompany] = useState('AMZN')
    const [arr, setArr] = useState([])
    const [windowsColor, setWindowsColor] = useState('alert alert-warning')
    
    

    const contenido1 = (dir) =>{
                (dir === 'AMZN')? setWindowsColor('alert alert-warning')      
                :(dir === 'AAPL')? setWindowsColor('alert alert-dark')
                :setWindowsColor('alert alert-success')
            
            fetch(`https://twelve-data1.p.rapidapi.com/quote?symbol=${dir}&interval=1day&outputsize=30&format=json`, {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "93e937d1femsh276fac52acef522p12ed5ajsn93211a76f93d",
                    "x-rapidapi-host": "twelve-data1.p.rapidapi.com"
                }
            })
            .then(response => response.json() )
            .then(data => {
                let {name, currency, datetime, fifty_two_week} = data
                setState({...state, name : name, currency : currency, datetime : datetime, fifty:  fifty_two_week})             
                setArr(Object.entries(fifty_two_week))
             
            })
            .catch(err => {
                console.error(err);
            });
           
        }
    
        useEffect(() => {
                        
            contenido1(company)
            
        }, [company])
    
    return (

        
        <div>
                <div className=" text-dark text-center">
                    <p className="display-6">#12 Fetch</p>
                </div>

                <div className="contenedorFetch">

                    <div className="border">
                            <button className = 'btn btn-warning' onClick={() => setCompany('AMZN')}>AMAZON</button>
                            <button className = 'btn btn-dark ' onClick={() => setCompany('AAPL')}>APPEL</button>
                            <button className = 'btn btn-success' onClick={() => setCompany('EUR/USD')}>EUR/USD</button>
                    </div>

                    <div className="border p-2">
                            <p>Contenido : </p>

                            <div className="border">
                            
                            <div className="card" >
                                <div className="card-body">
                                    <h5 className="card-title">{state.name}</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">{state.datetime}</h6>
                                    <div className="">
                                         {
                                                arr.map((element,items) => <div key = {items} className= {windowsColor} role="alert">
                                                        {element[0]} --- {element[1]} 
                                                    </div> )
                                        }
                                    </div>
                                   
                                    <a href="/" className="card-link">Card link</a>
                                    <a href="/" className="card-link">Another link</a>
                                </div>
                            </div>
                            
                              
                            </div>    
                    </div>


                </div>



        </div>
    )
}

export default Fetch
