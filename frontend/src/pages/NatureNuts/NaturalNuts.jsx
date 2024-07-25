
import React, { useState, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import "./NaturalNuts.css";

const products = [
  { id: 1, name: 'גרעיני חמניה', unit: 'גרם', price: 10, image: '/src/assets/גרעיני חמניה.jpeg' },
  { id: 2, name: 'גרעיני אבטיח', unit: 'גרם', price: 12, image: '/src/assets/גרעיני אבטיח.webp' },
  { id: 3, name: 'פיסטוק טבעי', unit: 'גרם', price: 20, image: '/src/assets/פיסטוק.jpeg' },
  { id: 4, name: 'קשיו טבעי', unit: 'גרם', price: 25, image: '/src/assets/קשיו.jpeg' },
  { id: 5, name: 'בוטנים טבעיים ', unit: 'גרם', price: 8, image: '/src/assets/בוטן אמריקאי.jpeg' },
  { id: 6, name: 'קבוקים', kilo: 'קילו', unit: 'גרם', price: 15, image: '/src/assets/קבוקים.webp' },
  { id: 7, name: 'שקד קשיו', kilo: 'קילו', unit: 'גרם', price: 30, image: '/src/assets/שקד קשיו.webp' },
  { id: 8, name: 'מקדמיה', kilo: 'קילו', unit: 'גרם', price: 35, image: '/src/assets/מקדמיה.jpeg' },
  { id: 9, name: 'אגוזי פקאן טבעי', kilo: 'קילו', unit: 'גרם', price: 40, image: '/src/assets/אגוזי פקאן קלויים.webp' },
  { id: 10, name: 'גרעיני דלעת טבעי', kilo: 'קילו', unit: 'גרם', price: 18, image: '/src/assets/גרעיני דלעת קלויים.webp' },
];

const NaturalNuts = () => {
  const { addToCart } = useContext(StoreContext);
  const [quantities, setQuantities] = useState(products.reduce((acc, product) => {
    acc[product.id] = 0;
    return acc;
  }, {}));

  const increaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 100
    }));
  };

  const decreaseQuantity = (id) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(prevQuantities[id] - 100, 0)
    }));
  };

  const calculatePrice = (quantity, pricePer250g) => {
    return (quantity / 250) * pricePer250g;
  };

  const handleAddToCart = (product) => {
    if (quantities[product.id] > 0) {
      addToCart(product.id);
      setQuantities((prevQuantities) => ({
        ...prevQuantities,
        [product.id]: 0
      }));
    }
  };

  return (
    <div className="natural-nuts-page">
      <h1>טבעיים</h1>
      <div className="products-container">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>{product.unit}</p>
            <p>{product.kilo}</p>
            <div className="quantity-selector">
              <button onClick={() => decreaseQuantity(product.id)}>-</button>
              <input type="text" value={quantities[product.id]} readOnly />
              <button onClick={() => increaseQuantity(product.id)}>+</button>
            </div>
            <p className='price'>מחיר: {calculatePrice(quantities[product.id], product.price).toFixed(2)} ש"ח</p>
            <button className="add-to-cart" onClick={() => handleAddToCart(product)}>הוסף לעגלת הקניות</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NaturalNuts;
