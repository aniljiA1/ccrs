import React from 'react';

const BookingHistory = ({ user }) => {
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
  const history = loggedInUser?.history || [];

  return (
    <div>
      <h3>Booking History</h3>
      {history.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <ul>
          {history.map((entry, index) => (
            <li key={index}>
              {entry.car} - {entry.days} day(s) - ₹{entry.total}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingHistory;
