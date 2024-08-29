import { useState } from 'react'
import './hotel.css'

const HotelCategory = ({ hoteles }) => {
    return (
     
      <div>
        <h1>Aviable hotels</h1>
        
          {hoteles.map((item, index) => (
            <div>
            <h1 key={index}>
              {item.nombre}  
            </h1>
            <p>${item.costo}</p>
            </div>
          ))}
       
      </div>
    );
  };

export default HotelCategory