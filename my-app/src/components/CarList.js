import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars, onSelect }) => (
  <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
    {cars.map(car => <CarCard key={car.id} car={car} onSelect={onSelect} />)}
  </div>
);

export default CarList;
