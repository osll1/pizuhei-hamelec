import React, { useContext } from 'react';
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';


const FoodItem = ({id ,name,price,description,image}) => {

 const {cartItems , addToCart , removeFromCart} = useContext(StoreContext);

  return (

    <div className='food-item'>
        <div className="food-item-img-container">
            <img className='food-item-image' src={image} alt="" />
            </div>
    </div>
  )
}

export default FoodItem























