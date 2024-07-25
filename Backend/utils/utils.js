const mongoose = require('mongoose');

const getTotalCartAmount = (cartItems, food_list) => {
  return Object.keys(cartItems).reduce((sum, itemId) => {
    const item = food_list.find(product => product._id === itemId);
    return sum + (item.price * cartItems[itemId]);
  }, 0);
};

const convertToObjectId = (id) => {
  return mongoose.Types.ObjectId.isValid(id) ? 
  new mongoose.Types.ObjectId(id) : 
  new mongoose.Types.ObjectId();
};

module.exports = {
  getTotalCartAmount,
  convertToObjectId
};
