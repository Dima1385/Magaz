import React, { useEffect, useState } from 'react';
import { getOrders, deleteOrder } from '../services/api';


const AdminPanel = ({ cart, removeFromCart }) => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const data = await getOrders();
      setOrders(data);
    };

    fetchOrders();
  }, []);

  const handleDeleteOrder = async (id) => {
    await deleteOrder(id);
    const updatedOrders = await getOrders();
    setOrders(updatedOrders);
  };

  return (
    <section>
      <h2>Admin Panel</h2>
      <h3>Orders</h3>
      <div>
        {orders.length > 0 ? (
          orders.map((order) => (
            <div key={order.id}>
              <span>{order.name} - ${order.price}</span>
              <button onClick={() => handleDeleteOrder(order.id)}>Delete</button>
            </div>
          ))
        ) : (
          <p>No orders found.</p>
        )}
      </div>
    </section>
  );
};

export default AdminPanel;
