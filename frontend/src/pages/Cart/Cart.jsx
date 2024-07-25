


// import React, { useContext } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, increaseQuantity, decreaseQuantity } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const handleCheckout = () => {
//     navigate('/checkout');
//   };

//   const convertToShekels = (amount) => {
//     return (amount * 3.5).toFixed(2);
//   };

//   return (
//     <div className="cart">
//       <div className="cart-header">
//         <h1>העגלה שלך</h1>
//         <a href="/">המשיכו לקנות</a>
//       </div>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>מוצר</p>
//           <p>כותרת</p>
//           <p>מחיר</p>
//           <p>כמות</p>
//           <p>סה"כ</p>
//           <p>הסר</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index}>
//                 <div key={index} className="cart-items-title cart-items-item">
//                   <img src={item.image} alt={item.name} />
//                   <p>{item.name}</p>
//                   <p>₪{convertToShekels(item.price)}</p>
//                   <div className="quantity-control">
//                     <button onClick={() => decreaseQuantity(item._id)}>-</button>
//                     <input type="text" value={cartItems[item._id]} readOnly />
//                     <button onClick={() => increaseQuantity(item._id)}>+</button>
//                   </div>
//                   <p>₪{convertToShekels(item.price * cartItems[item._id])}</p>
//                   <p onClick={() => removeFromCart(item._id)} className="cross">x</p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>סיכום עגלת קניות</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>סה"כ ביניים</p>
//               <p>₪{convertToShekels(getTotalCartAmount())}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>דמי משלוח</p>
//               <p>₪{getTotalCartAmount() === 0 ? 0 : convertToShekels(2)}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>סה"כ</b>
//               <b>₪{getTotalCartAmount() === 0 ? 0 : convertToShekels(getTotalCartAmount() + 2)}</b>
//             </div>
//           </div>
//           <button onClick={handleCheckout}>לרכישה</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>אם יש לך קוד קופון, הכנס כאן</p>
//             <div className="cart-promocode-input">
//               <input type="text" placeholder="קוד קופון" />
//               <button>שלח</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;



import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Cart.css";
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, increaseQuantity, decreaseQuantity } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    navigate('/checkout');
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>פריט</p>
          <p>כותרת</p>
          <p>מחיר</p>
          <p>כמות</p>
          <p>סה"כ</p>
          <p>הסר</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={index}>
                <div key={index} className='cart-items-title cart-items-item'>
                  <img src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>₪{item.price}</p>
                  <div className="quantity-selector">
                    <button onClick={() => decreaseQuantity(item._id)}>-</button>
                    <input type="text" value={cartItems[item._id]} readOnly />
                    <button onClick={() => increaseQuantity(item._id)}>+</button>
                  </div>
                  <p>₪{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>סיכום עגלת קניות</h2>
          <div>
            <div className="cart-total-details">
              <p>סה"כ ביניים</p>
              <p>₪{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>דמי משלוח</p>
              <p>₪{getTotalCartAmount() === 0 ? 0 : 7}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>סה"כ</b>
              <b>₪{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 7}</b>
            </div>
          </div>
          <button onClick={handleCheckout}>לרכישה</button>
        </div>
        <div className="cart-promocode">
          <div>
            <p>אם יש לך קוד קופון, הכנס כאן</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder='קוד קופון' />
              <button>שלח</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;


