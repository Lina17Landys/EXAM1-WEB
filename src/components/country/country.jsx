import { useState } from 'react'
import './country.css'

const Country = ({ destinosdla }) => {
    return (
     
      <div>
        <h1>Aviable hotels</h1>
        
          {destinosdla.map((item, index) => (
            <div>
            <h1 key={index}>
              {item.nombre}  
            </h1>
            <p>{item.precio}</p>
            
            </div>
          ))}
       
      </div>
    );
  };

export default Country