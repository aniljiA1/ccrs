import React, { useState, useEffect } from 'react';
import Register from './components/Register';
import Login from './components/Login';
import CarList from './components/CarList';
import BookingForm from './components/BookingForm';
import BookingHistory from './components/BookingHistory';

const App = () => {
  const [user, setUser] = useState(null);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (savedUser) setUser(savedUser);
  }, []);

  const cars = [
    { id: 1, name: 'Honda City', price: 3000, image: 'https://res.cloudinary.com/dxwbrko3k/image/upload/v1749537111/homepage-rotator-performance-stingray-v4_wm79tz.jpg' },
    { id: 2, name: 'Maruti Swift', price: 2500, image: 'https://res.cloudinary.com/dxwbrko3k/image/upload/v1749537369/GT_20Azure_20Dynamic_20Desktop_vuobtm.jpg' },
    { id: 3, name: 'Ford EcoSport', price: 3500, image: 'https://res.cloudinary.com/dxwbrko3k/image/upload/v1749537371/1748178222116-topSlider.items.0.image.desktop-496E2DEB2091E869_vsg9ar.jpg' },
  ];

  if (!user)
    return (
      <div>
        <h1>Car Rental System</h1>
        <Register />
        <Login onLogin={setUser} />
      </div>
    );

  return (
    <div>
      <h2>Hello, {user.username}</h2>
      <button onClick={() => { localStorage.removeItem('loggedInUser'); setUser(null); }}>Logout</button>
      <CarList cars={cars} onSelect={setSelectedCar} />
      {selectedCar && <BookingForm car={selectedCar} user={user} />}
      <BookingHistory user={user} />
    </div>
  );
};

export default App;
