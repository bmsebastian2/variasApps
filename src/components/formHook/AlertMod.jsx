import React from 'react'

const AlertMod = ({element}) => {
    return (
        <div className='alert alert-success mt-2' role="alert">
           {<p>{element.email}</p>} - {<p>{element.password}</p>}
        </div>
    )
}

export default AlertMod
