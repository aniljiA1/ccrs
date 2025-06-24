import React, { useState } from 'react';

const BookingForm = ({ car, user }) => {
  const [days, setDays] = useState(1);

  const handleBooking = () => {
    const total = days * car.price;
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const updatedUsers = users.map(u => {
      if (u.username === user.username) {
        const newHistory = [...(u.history || []), { car: car.name, days, total }];
        return { ...u, history: newHistory };
      }
      return u;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    localStorage.setItem('loggedInUser', JSON.stringify(updatedUsers.find(u => u.username === user.username)));
    alert(`Booked ${car.name} for ${days} day(s). Total: ₹${total}`);
  };

  return (
    <div>
      <h4>Book: {car.name}</h4>
      <input
        type="number"
        value={days}
        min="1"
        onChange={e => setDays(Number(e.target.value))}
      />
      <button onClick={handleBooking}>Confirm Booking</button>
    </div>
  );
};

export default BookingForm;
