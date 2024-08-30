import React from 'react';
import './hotel.css';

const HotelCategory = ({ hoteles, agregarAlPaquete }) => {
  return (
    <div className="hotel-line">
      <h1>Available Hotels</h1>
      <div className="hotel-cards">
        {hoteles.map((item, index) => (
          <div 
            className="hotel-card" 
            key={index}
            onClick={() => agregarAlPaquete(item)}
          >
            <img src={item.imagen} alt={item.nombre} className="hotel-image" />
            <h2 className="hotel-name">{item.nombre}</h2>
            <p className="hotel-rating">Rating: {item.estrellas} ★</p>
            <p className="hotel-cost">${item.costo}</p>
            <h3 className="hotel-location">Location: {item.ubicacion}</h3>
            <p className="hotel-services">
              Additional services: {item.servicios.join(', ')}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HotelCategory;
