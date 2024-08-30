import { useState } from 'react'
import './country.css'

const Country = ({ destinosdla }) => {
    const destinosArray = Object.values(destinosdla);

    return (
        <div>
            <h1>Available Destinations</h1>

            {destinosArray.map((item, index) => (
                <div key={index} className="destination-card">
                    <div className="des-cards">
                        <h2>{item.nombre}</h2>
                        <img src={item.imagen} alt={item.nombre} />
                        <p>Precio: ${item.precio}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Country;

