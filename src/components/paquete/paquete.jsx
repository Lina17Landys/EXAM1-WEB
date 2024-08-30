import React, { useState } from 'react';
import FoodCategory from './FoodCategory';
import HotelCategory from './HotelCategory';
import { planDeViajes } from '../../data';
import './paquete.css';

function PaquetePrecios() {
    const [total, agregarAlPaquete] = useState(0);
    
  return (
    <div>
      <h1>Build Your Package</h1>
      
      <FoodCategory 
        alimentacion={planDeViajes.alimentacion} 
        agregarAlPaquete={agregarAlPaquete} 
      />
      
      <HotelCategory 
        hoteles={planDeViajes.hoteles} 
        agregarAlPaquete={agregarAlPaquete} 
      />
      
      <div className="paquete-summary">
        <h2>Selected Items:</h2>
        <div>
          {paquete.map((item, index) => (
            <p key={index}>
              {item.titulo} - ${item.precio || item.costo}
            </p>
          ))}
        </div>
        <h1>Total Price: ${total}</h1>
      </div>
    </div>
  );
}

export default PaquetePrecios;
