import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";

const ManageOrders = () => {
  const { user } = useAuth();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('/api/allOrders', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setOrders(response.data);
      } catch (error) {
        console.error('There was an error fetching the orders!', error);
      }
    };

    fetchOrders();
  }, [user.token]);

  return (
    <div>
      <h1>Manage Orders</h1>
      <ul>
        {orders.map((order) => (
          <li key={order._id}>
            Order ID: {order._id}, Customer: {order.customerName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageOrders;
