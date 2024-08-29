import { useState } from 'react'
import './food.css'

const FoodCategory = ({ alimentacion }) => {
    return (
      <div className="food-line">
        <h1>Food Category</h1>
        <div className="food-cards">
          {alimentacion.map((item, index) => (
            <div className="food-card" key={index}>
              <p className="food-title">{item.titulo}</p>
              <img src={item.imagen} className="food-image" />
              <p className="food-price">${item.precio}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default FoodCategory