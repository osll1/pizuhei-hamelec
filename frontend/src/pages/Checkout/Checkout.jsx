// import React, { useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import './Checkout.css';

// const Checkout = () => {
//   const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);

//   const handlePayment = (e) => {
//     e.preventDefault();
//     // Logic for processing payment
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout-summary">
//         <h2>סיכום ההזמנה</h2>
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index} className="checkout-item">
//                 <p>{item.name}</p>
//                 <p>₪{item.price}</p>
//                 <p>כמות: {cartItems[item._id]}</p>
//                 <p>סה"כ: ₪{item.price * cartItems[item._id]}</p>
//               </div>
//             );
//           }
//         })}
//         <div className="checkout-total">
//           <p>סה"כ ביניים: ₪{getTotalCartAmount()}</p>
//           <p>דמי משלוח: ₪7</p>
//           <p>סה"כ לתשלום: ₪{getTotalCartAmount() + 7}</p>
//         </div>
//       </div>
//       <div className="checkout-form">
//         <h2>פרטי רכישה</h2>
//         <form onSubmit={handlePayment}>
//           <input type="text" placeholder="הכנס שם מלא" required />
//           <input type="email" placeholder="הכנס כתובת אימייל" required />
//           <input type="text" placeholder="הכנס כתובת למשלוח" required />
//           <input type="tel" placeholder="טלפון" required />
//           <div className="payment-methods">
//             <p>אמצעי תשלום</p>
//             <label>
//               <input type="radio" name="paymentMethod" value="creditCard" required />
//               כרטיס אשראי
//             </label>
//             <label>
//               <input type="radio" name="paymentMethod" value="paypal" required />
//               PayPal
//             </label>
//           </div>
//           <div className="credit-card-details">
//             <input type="text" placeholder="מספר כרטיס אשראי" required />
//             <input type="text" placeholder="תוקף (MM/YY)" required />
//             <input type="text" placeholder="CVV" required />
//             <select required>
//               <option value="">מספר תשלומים</option>
//               <option value="1">תשלום אחד</option>
//               <option value="2">2 תשלומים</option>
//               <option value="3">3 תשלומים</option>
//             </select>
//           </div>
//           <button type="submit">שלם עכשיו</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

//////////////////////////////////////////////////////////

// import React, { useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import './Checkout.css';

// const Checkout = () => {
//   const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);

//   const handlePayment = (e) => {
//     e.preventDefault();
//     // Logic for processing payment
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout-summary">
//         <h2>סיכום ההזמנה</h2>
//         {Object.keys(cartItems).map((itemId, index) => {
//           const item = food_list.find((product) => product._id === itemId);
//           if (item) {
//             return (
//               <div key={index} className="checkout-item">
//                 <img src={item.image} alt={item.name} className="product-image" />
//                 <p>{item.name}</p>
//                 <p>₪{item.price}</p>
//                 <p>כמות: {cartItems[itemId]}</p>
//                 <p>סה"כ: ₪{item.price * cartItems[itemId]}</p>
//               </div>
//             );
//           } else {
//             return null;
//           }
//         })}
//         <div className="checkout-total">
//           <p>סה"כ ביניים: ₪{getTotalCartAmount()}</p>
//           <p>דמי משלוח: ₪7</p>
//           <p>סה"כ לתשלום: ₪{getTotalCartAmount() + 7}</p>
//         </div>
//       </div>
//       <div className="checkout-form">
//         <h2>פרטי רכישה</h2>
//         <form onSubmit={handlePayment}>
//           <input type="text" placeholder="הכנס שם מלא" required />
//           <input type="email" placeholder="הכנס כתובת אימייל" required />
//           <input type="text" placeholder="הכנס כתובת למשלוח" required />
//           <input type="tel" placeholder="טלפון" required />
//           <div className="payment-methods">
//             <p>אמצעי תשלום</p>
//             <label>
//               <input type="radio" name="paymentMethod" value="creditCard" required />
//               כרטיס אשראי
//             </label>
//             <label>
//               <input type="radio" name="paymentMethod" value="paypal" required />
//               PayPal
//             </label>
//           </div>
//           <div className="credit-card-details">
//             <input type="text" placeholder="מספר כרטיס אשראי" required />
//             <input type="text" placeholder="תוקף (MM/YY)" required />
//             <input type="text" placeholder="CVV" required />
//             <select required>
//               <option value="">מספר תשלומים</option>
//               <option value="1">תשלום אחד</option>
//               <option value="2">2 תשלומים</option>
//               <option value="3">3 תשלומים</option>
//             </select>
//           </div>
//           <button type="submit">שלם עכשיו</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;


// import React, { useContext , useState } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import './Checkout.css';
// import axios from 'axios';

// const Checkout = ({ userId }) => { // הוספת userId כ- prop
//   const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
//   const [userDetails, setUserDetails] = useState({
//     fullName: '',
//     email: '',
//     address: '',
//     phone: '',
//     paymentMethod: 'creditCard',
//   });

//   const handleChange = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     // שלח את ההזמנה לשרת
//     try {
//       const response = await axios.post('http://localhost:3000/api/checkout', {
//         cartItems,
//         userDetails,
//         userId, // הוספת userId בבקשה
//       });
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       alert('Error processing payment');
//     }
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout-summary">
//         <h2>סיכום ההזמנה</h2>
//         {Object.keys(cartItems).map((itemId, index) => {
//           const item = food_list.find((product) => product._id === itemId);
//           if (item) {
//             return (
//               <div key={index} className="checkout-item">
//                 <img src={item.image} alt={item.name} className="product-image" />
//                 <p>{item.name}</p>
//                 <p>₪{item.price}</p>
//                 <p>כמות: {cartItems[itemId]}</p>
//                 <p>סה"כ: ₪{item.price * cartItems[itemId]}</p>
//               </div>
//             );
//           } else {
//             return null;
//           }
//         })}
//         <div className="checkout-total">
//           <p>סה"כ ביניים: ₪{getTotalCartAmount()}</p>
//           <p>דמי משלוח: ₪7</p>
//           <p>סה"כ לתשלום: ₪{getTotalCartAmount() + 7}</p>
//         </div>
//       </div>
//       <div className="checkout-form">
//         <h2>פרטי רכישה</h2>
//         <form onSubmit={handlePayment}>
//           <input type="text" name="fullName" placeholder="הכנס שם מלא" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="הכנס כתובת אימייל" onChange={handleChange} required />
//           <input type="text" name="address" placeholder="הכנס כתובת למשלוח" onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="טלפון" onChange={handleChange} required />
//           <div className="payment-methods">
//             <p>אמצעי תשלום</p>
//             <label>
//               <input type="radio" name="paymentMethod" value="creditCard" onChange={handleChange} required />
//               כרטיס אשראי
//             </label>
//             <label>
//               <input type="radio" name="paymentMethod" value="paypal" onChange={handleChange} required />
//               PayPal
//             </label>
//           </div>
//           {userDetails.paymentMethod === 'creditCard' && (
//             <div className="credit-card-details">
//               <input type="text" name="cardNumber" placeholder="מספר כרטיס אשראי" required />
//               <input type="text" name="expiryDate" placeholder="תוקף (MM/YY)" required />
//               <input type="text" name="cvv" placeholder="CVV" required />
//               <select name="installments" onChange={handleChange} required>
//                 <option value="">מספר תשלומים</option>
//                 <option value="1">תשלום אחד</option>
//                 <option value="2">2 תשלומים</option>
//                 <option value="3">3 תשלומים</option>
//               </select>
//             </div>
//           )}
//           <button type="submit">שלם עכשיו</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;

// import axios from 'axios';
// import React, { useContext, useState } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import './Checkout.css';

// const Checkout = () => {
//   const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
//   const [userDetails, setUserDetails] = useState({
//     fullName: '',
//     email: '',
//     address: '',
//     phone: '',
//     paymentMethod: 'creditCard',
//   });

//   const handleChange = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     // בדיקת תקינות userId לפני שליחה
//     // if (!userId) {
//     //   console.error('Invalid userId:', userId);
//     //   alert('Invalid userId');
//     //   return;
//     // }

//     try {
//       console.log('Sending order details:', {
//         cartItems,
//         userDetails,
//         //userId,
//         food_list,
//       }); // הוספת לוג
//       const response = await axios.post('http://localhost:3000/api/checkout', {
//         cartItems,
//         userDetails,
//         //userId,
//         food_list,
//       });
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       alert('Error processing payment');
//     }
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout-summary">
//         <h2>סיכום ההזמנה</h2>
//         {Object.keys(cartItems).map((itemId, index) => {
//           const item = food_list.find((product) => product._id === itemId);
//           if (item) {
//             return (
//               <div key={index} className="checkout-item">
//                 <img src={item.image} alt={item.name} className="product-image" />
//                 <p>{item.name}</p>
//                 <p>₪{item.price}</p>
//                 <p>כמות: {cartItems[itemId]}</p>
//                 <p>סה"כ: ₪{item.price * cartItems[itemId]}</p>
//               </div>
//             );
//           } else {
//             return null;
//           }
//         })}
//         <div className="checkout-total">
//           <p>סה"כ ביניים: ₪{getTotalCartAmount()}</p>
//           <p>דמי משלוח: ₪7</p>
//           <p>סה"כ לתשלום: ₪{getTotalCartAmount() + 7}</p>
//         </div>
//       </div>
//       <div className="checkout-form">
//         <h2>פרטי רכישה</h2>
//         <form onSubmit={handlePayment}>
//           <input type="text" name="fullName" placeholder="הכנס שם מלא" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="הכנס כתובת אימייל" onChange={handleChange} required />
//           <input type="text" name="address" placeholder="הכנס כתובת למשלוח" onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="טלפון" onChange={handleChange} required />
//           <div className="payment-methods">
//             <p>אמצעי תשלום</p>
//             <label>
//               <input type="radio" name="paymentMethod" value="creditCard" onChange={handleChange} required />
//               כרטיס אשראי
//             </label>
//             <label>
//               <input type="radio" name="paymentMethod" value="paypal" onChange={handleChange} required />
//               PayPal
//             </label>
//           </div>
//           {userDetails.paymentMethod === 'creditCard' && (
//             <div className="credit-card-details">
//               <input type="text" name="cardNumber" placeholder="מספר כרטיס אשראי" required />
//               <input type="text" name="expiryDate" placeholder="תוקף (MM/YY)" required />
//               <input type="text" name="cvv" placeholder="CVV" required />
//               <select name="installments" onChange={handleChange} required>
//                 <option value="">מספר תשלומים</option>
//                 <option value="1">תשלום אחד</option>
//                 <option value="2">2 תשלומים</option>
//                 <option value="3">3 תשלומים</option>
//               </select>
//             </div>
//           )}
//           <button type="submit">שלם עכשיו</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;




// import axios from 'axios';
// import React, { useContext, useState } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import './Checkout.css';

// const Checkout = () => {
//   const { cartItems, food_list, getTotalCartAmount } = useContext(StoreContext);
//   const [userDetails, setUserDetails] = useState({
//     fullName: '',
//     email: '',
//     address: '',
//     phone: '',
//     paymentMethod: 'creditCard',
//   });

//   const handleChange = (e) => {
//     setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Sending order details:', {
//         cartItems,
//         userDetails,
//         food_list,
//       }); // הוספת לוג
//       const response = await axios.post('http://localhost:3000/api/checkout', {
//         cartItems,
//         userDetails,
//         food_list,
//       });
//       alert(response.data.message);
//     } catch (error) {
//       console.error('Error processing payment:', error);
//       alert('Error processing payment');
//     }
//   };

//   return (
//     <div className="checkout">
//       <div className="checkout-summary">
//         <h2>סיכום ההזמנה</h2>
//         {Object.keys(cartItems).map((itemId, index) => {
//           const item = food_list.find((product) => product._id === itemId);
//           if (item) {
//             return (
//               <div key={index} className="checkout-item">
//                 <img src={item.image} alt={item.name} className="product-image" />
//                 <p>{item.name}</p>
//                 <p>₪{item.price}</p>
//                 <p>כמות: {cartItems[itemId]}</p>
//                 <p>סה"כ: ₪{item.price * cartItems[itemId]}</p>
//               </div>
//             );
//           } else {
//             return null;
//           }
//         })}
//         <div className="checkout-total">
//           <p>סה"כ ביניים: ₪{getTotalCartAmount()}</p>
//           <p>דמי משלוח: ₪7</p>
//           <p>סה"כ לתשלום: ₪{getTotalCartAmount() + 7}</p>
//         </div>
//       </div>
//       <div className="checkout-form">
//         <h2>פרטי רכישה</h2>
//         <form onSubmit={handlePayment}>
//           <input type="text" name="fullName" placeholder="הכנס שם מלא" onChange={handleChange} required />
//           <input type="email" name="email" placeholder="הכנס כתובת אימייל" onChange={handleChange} required />
//           <input type="text" name="address" placeholder="הכנס כתובת למשלוח" onChange={handleChange} required />
//           <input type="tel" name="phone" placeholder="טלפון" onChange={handleChange} required />
//           <div className="payment-methods">
//             <p>אמצעי תשלום</p>
//             <label>
//               <input type="radio" name="paymentMethod" value="creditCard" onChange={handleChange} required />
//               כרטיס אשראי
//             </label>
//             <label>
//               <input type="radio" name="paymentMethod" value="paypal" onChange={handleChange} required />
//               PayPal
//             </label>
//           </div>
//           {userDetails.paymentMethod === 'creditCard' && (
//             <div className="credit-card-details">
//               <input type="text" name="cardNumber" placeholder="מספר כרטיס אשראי" required />
//               <input type="text" name="expiryDate" placeholder="תוקף (MM/YY)" required />
//               <input type="text" name="cvv" placeholder="CVV" required />
//               <select name="installments" onChange={handleChange} required>
//                 <option value="">מספר תשלומים</option>
//                 <option value="1">תשלום אחד</option>
//                 <option value="2">2 תשלומים</option>
//                 <option value="3">3 תשלומים</option>
//               </select>
//             </div>
//           )}
//           <button type="submit">שלם עכשיו</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Checkout;














import axios from 'axios';
import React, { useContext, useState, useEffect } from 'react';
import { StoreContext } from '../../context/StoreContext';
import './Checkout.css';

const Checkout = () => {
  const { cartItems, food_list, getTotalCartAmount, userId, setUserId } = useContext(StoreContext); // וידוא ייבוא setUserId
  const [userDetails, setUserDetails] = useState({
    fullName: '',
    email: '',
    address: '',
    phone: '',
    paymentMethod: 'creditCard',
  });

  useEffect(() => {
    // לדוגמה, קביעת userId דינמית (במציאות, תביא משרת או מהקשר משתמש)
    setUserId("60d0fe4f5311236168a109ca"); // יש לוודא שזה ObjectId תקין
  }, [setUserId]);

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const isValidObjectId = (id) => {
    return /^[0-9a-fA-F]{24}$/.test(id);
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    if (!isValidObjectId(userId)) {
      console.error('Invalid userId:', userId);
      alert('Invalid userId');
      return;
    }

    try {
      console.log('Sending order details:', {
        cartItems,
        userDetails,
        food_list,
        userId, // שליחת userId
      }); // הוספת לוג
      const response = await axios.post('http://localhost:3000/api/checkout', {
        cartItems,
        userDetails,
        food_list,
        userId, // שליחת userId
      });
      alert(response.data.message);
    } catch (error) {
      console.error('Error processing payment:', error);
      alert('Error processing payment');
    }
  };

  return (
    <div className="checkout">
      <div className="checkout-summary">
        <h2>סיכום ההזמנה</h2>
        {Object.keys(cartItems).map((itemId, index) => {
          const item = food_list.find((product) => product._id === itemId);
          if (item) {
            return (
              <div key={index} className="checkout-item">
                <img src={item.image} alt={item.name} className="product-image" />
                <p>{item.name}</p>
                <p>₪{item.price}</p>
                <p>כמות: {cartItems[itemId]}</p>
                <p>סה"כ: ₪{item.price * cartItems[itemId]}</p>
              </div>
            );
          } else {
            return null;
          }
        })}
        <div className="checkout-total">
          <p>סה"כ ביניים: ₪{getTotalCartAmount()}</p>
          <p>דמי משלוח: ₪7</p>
          <p>סה"כ לתשלום: ₪{getTotalCartAmount() + 7}</p>
        </div>
      </div>
      <div className="checkout-form">
        <h2>פרטי רכישה</h2>
        <form onSubmit={handlePayment}>
          <input type="text" name="fullName" placeholder="הכנס שם מלא" onChange={handleChange} required />
          <input type="email" name="email" placeholder="הכנס כתובת אימייל" onChange={handleChange} required />
          <input type="text" name="address" placeholder="הכנס כתובת למשלוח" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="טלפון" onChange={handleChange} required />
          <div className="payment-methods">
            <p>אמצעי תשלום</p>
            <label>
              <input type="radio" name="paymentMethod" value="creditCard" onChange={handleChange} required />
              כרטיס אשראי
            </label>
            <label>
              <input type="radio" name="paymentMethod" value="paypal" onChange={handleChange} required />
              PayPal
            </label>
          </div>
          {userDetails.paymentMethod === 'creditCard' && (
            <div className="credit-card-details">
              <input type="text" name="cardNumber" placeholder="מספר כרטיס אשראי" required />
              <input type="text" name="expiryDate" placeholder="תוקף (MM/YY)" required />
              <input type="text" name="cvv" placeholder="CVV" required />
              <select name="installments" onChange={handleChange} required>
                <option value="">מספר תשלומים</option>
                <option value="1">תשלום אחד</option>
                <option value="2">2 תשלומים</option>
                <option value="3">3 תשלומים</option>
              </select>
            </div>
          )}
          <button type="submit">שלם עכשיו</button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
