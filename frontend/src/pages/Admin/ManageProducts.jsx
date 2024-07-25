import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from "../../context/AuthContext";

const ManageProducts = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/api/products', {
          headers: { Authorization: `Bearer ${user.token}` }
        });
        setProducts(response.data);
      } catch (error) {
        console.error('There was an error fetching the products!', error);
      }
    };

    fetchProducts();
  }, [user.token]);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(`/api/products/${productId}`, {
        headers: { Authorization: `Bearer ${user.token}` }
      });
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error('There was an error deleting the product!', error);
    }
  };

  return (
    <div>
      <h1>Manage Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product._id}>
            {product.name} - {product.price}$
            <button onClick={() => handleDelete(product._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ManageProducts;
