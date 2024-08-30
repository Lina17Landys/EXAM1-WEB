import React from 'react';
import './food.css';

const FoodCategory = ({ alimentacion, agregarAlPaquete }) => {
  return (
    <div className="food-line">
      <h1>Food Category</h1>
      <div className="food-cards">
        {alimentacion.map((item, index) => (
          <div 
            className="food-card" 
            key={index}
            onClick={() => agregarAlPaquete(item)}
          >
            <img src={item.imagen} alt={item.titulo} className="food-image" />
            <h2 className="food-title">{item.titulo}</h2>
            <p className="food-price">${item.precio}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodCategory;
