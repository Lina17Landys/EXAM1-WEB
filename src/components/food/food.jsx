import { useState } from 'react'
import './food.css'

const FoodCategory = ({ alimentacion }) => {
    return (
     
      <div>
        <h1>Food Category</h1>
        
          {alimentacion.map((item, index) => (
            <p key={index}>
              {item.titulo} - ${item.precio}
            </p>
          ))}
       
      </div>
    );
  };

export default FoodCategory