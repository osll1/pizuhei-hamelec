import React from 'react';
import { cases_list } from "../../assets/assets";
import FoodItem from '../../components/FoodItem/FoodItem';
import "./Cases.css";

const Cases = () => {
  return (
    <div className='cases-container'>
      <h1 className='cases-title'>מארזים</h1>
      <div className="cases-display-list">
        {cases_list.map((item , index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            image={item.image}
            price={item.price}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Cases;
