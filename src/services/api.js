// Mocked API для підключення до БД
const API_URL = 'http://localhost:5000';

export const getOrders = async () => {
  const response = await fetch(`${API_URL}/orders`);
  return response.json();
};

export const addOrder = async (order) => {
  const response = await fetch(`${API_URL}/order`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(order),
  });
  return response.json();
};

export const deleteOrder = async (id) => {
  const response = await fetch(`${API_URL}/order/${id}`, {
    method: 'DELETE',
  });
  return response.json();
};
