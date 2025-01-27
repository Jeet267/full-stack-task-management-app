import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { AppContext } from '../context/AuthContext';

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);
  const { token } = useContext(AppContext);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/menu');
        setMenuItems(response.data);
      } catch (error) {
        console.error('Failed to fetch menu', error);
      }
    };
    fetchMenu();
  }, []);

  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem._id === item._id);
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem._id === item._id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const placeOrder = async () => {
    try {
      const orderItems = cart.map(item => ({
        menuItem: item._id,
        quantity: item.quantity
      }));
      console.log(`Bearer ${token}`)
      await axios.post('http://localhost:5000/api/orders', 
        { items: orderItems }, 
        { headers: { "x-auth-token": `Bearer ${token}` } }
      );
      
      setCart([]);
      alert('Order placed successfully!');
    } catch (error) {
      console.error('Order failed', error);
      alert('Order Created');
    }
  };

  return (
    <div className="menu-container">
      <div className="menu-items">
        {menuItems.map(item => (
          <div key={item._id} className="menu-item">
            <h3>{item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Price: Rs{item.price}</p>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>
      
      <div className="cart">
        <h2>Cart</h2>
        {cart.map(item => (
          <div key={item._id}>
            {item.name} - Quantity: {item.quantity} - Rs{item.price * item.quantity}
          </div>
        ))}
        <p>Total: Rs{cart.reduce((total, item) => total + item.price * item.quantity, 0)}</p>
        <button onClick={placeOrder} disabled={cart.length === 0}>
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Menu;
