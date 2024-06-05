import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Dashboard = () => {
  const [userData, setUserData] = useState(null);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/user', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setUserData(response.data);
      } catch (error) {
        console.error(error.response.data); // Handle error
      }
    };

    const fetchPaymentHistory = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('/api/payment/history', {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPaymentHistory(response.data);
      } catch (error) {
        console.error(error.response.data); // Handle error
      }
    };

    fetchUserData();
    fetchPaymentHistory();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      {userData && (
        <div>
          <p>Email: {userData.email}</p>
          {/* Display other user information */}
        </div>
      )}
      <h3>Payment History</h3>
      <ul>
        {paymentHistory.map((payment, index) => (
          <li key={index}>{payment.amount} - {payment.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
