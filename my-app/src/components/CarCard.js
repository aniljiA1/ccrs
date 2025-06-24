import React from 'react';


const CarCard = ({ car, onSelect }) => (
  <div style={{ border: '1px solid gray', padding: '10px' }}>
    <img className="img" src={car.image} alt={car.name} />
    <h4>{car.name}</h4>
    <p>₹{car.price}/day</p>
    <button onClick={() => onSelect(car)}>Book</button>
  </div>
);

export default CarCard;
