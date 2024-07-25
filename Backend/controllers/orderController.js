// const Order = require('../models/Order');
// const nodemailer = require('nodemailer');

// const getTotalCartAmount = (cartItems, food_list) => {
//   return Object.keys(cartItems).reduce((sum, itemId) => {
//     const item = food_list.find(product => product._id === itemId);
//     return sum + (item.price * cartItems[itemId]);
//   }, 0);
// };

// const sendOrderSummary = async (order, email) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Order Confirmation',
//     text: `Thank you for your order! Your order summary:\n\n${JSON.stringify(order, null, 2)}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//   } catch (error) {
//     console.error('Error sending mail:', error);
//   }
// };

// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, userId } = req.body;

//   try {
//     // צור רשימת פריטים מהעגלה
//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id === itemId);
//       return {
//         product: item._id,
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     // חישוב הסכום הכולל
//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;

//     // צור הזמנה חדשה
//     const newOrder = new Order({
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       userId,
//       totalAmount,
//     });

//     // שמור את ההזמנה במסד הנתונים
//     await newOrder.save();

//     // שלח מייל עם סיכום ההזמנה
//     await sendOrderSummary(newOrder, userDetails.email);

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error);
//     res.status(500).json({ message: 'Error processing order or sending email' });
//   }
// };


// const Order = require('../models/Order');
// const nodemailer = require('nodemailer');
// require('dotenv').config();

// // פונקציה לחישוב הסכום הכולל של העגלה
// const getTotalCartAmount = (cartItems, food_list) => {
//   return Object.keys(cartItems).reduce((sum, itemId) => {
//     const item = food_list.find(product => product._id === itemId);
//     return sum + (item.price * cartItems[itemId]);
//   }, 0);
// };

// // פונקציה לשליחת סיכום ההזמנה במייל
// const sendOrderSummary = async (order, email) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Order Confirmation',
//     text: `Thank you for your order! Your order summary:\n\n${JSON.stringify(order, null, 2)}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//   } catch (error) {
//     console.error('Error sending mail:', error);
//     throw new Error('Failed to send email'); // להוסיף את השגיאה המדויקת
//   }
// };

// // פונקציה ליצירת הזמנה חדשה
// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, userId } = req.body;

//   try {
//     // צור רשימת פריטים מהעגלה
//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id === itemId);
//       if (!item) {
//         throw new Error(`Product with id ${itemId} not found`);
//       }
//       return {
//         product: item._id,
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     // חישוב הסכום הכולל
//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;

//     // צור הזמנה חדשה
//     const newOrder = new Order({
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       userId,
//       totalAmount,
//     });

//     // שמור את ההזמנה במסד הנתונים
//     await newOrder.save();

//     // שלח מייל עם סיכום ההזמנה
//     await sendOrderSummary(newOrder, userDetails.email);

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };

// const Order = require('../models/Order');
// const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
// require('dotenv').config();

// // פונקציה לחישוב הסכום הכולל של העגלה
// const getTotalCartAmount = (cartItems, food_list) => {
//   return Object.keys(cartItems).reduce((sum, itemId) => {
//     const item = food_list.find(product => product._id === itemId);
//     return sum + (item.price * cartItems[itemId]);
//   }, 0);
// };

// // פונקציה לשליחת סיכום ההזמנה במייל
// const sendOrderSummary = async (order, email) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Order Confirmation',
//     text: `Thank you for your order! Your order summary:\n\n${JSON.stringify(order, null, 2)}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//   } catch (error) {
//     console.error('Error sending mail:', error);
//     throw new Error('Failed to send email');
//   }
// };

// // פונקציה ליצירת הזמנה חדשה
// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, food_list } = req.body;

//   try {
//     // בדיקות לוג
//     console.log('cartItems:', cartItems);
//     console.log('userDetails:', userDetails);
//     //console.log('userId:', userId);
//     console.log('food_list:', food_list);

//     // בדיקת userId
//     // if (!userId || userId.length !== 24) {
//     //   console.error('Invalid userId:', userId);
//     //   throw new Error('Invalid userId');
//     // }

//     // const validUserId = mongoose.Types.ObjectId(userId);
//     // console.log('Converted userId:', validUserId); // הדפסת userId מומר

//     // צור רשימת פריטים מהעגלה
//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id === itemId);
//       if (!item) {
//         throw new Error(`Product with id ${itemId} not found`);
//       }
//       if (!mongoose.Types.ObjectId.isValid(item._id)) {
//         throw new Error(`Invalid product id ${item._id}`);
//       }
//       return {
//         product: mongoose.Types.ObjectId(item._id),
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     // חישוב הסכום הכולל
//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;

//     // צור הזמנה חדשה
//     const newOrder = new Order({
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       userId: validUserId,
//       totalAmount,
//     });

//     // שמור את ההזמנה במסד הנתונים
//     await newOrder.save();

//     // שלח מייל עם סיכום ההזמנה
//     await sendOrderSummary(newOrder, userDetails.email);

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };

////////////////////////////////////////////////

// const Order = require('../models/Order');
// const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const getTotalCartAmount = (cartItems, food_list) => {
//   return Object.keys(cartItems).reduce((sum, itemId) => {
//     const item = food_list.find(product => product._id === itemId);
//     return sum + (item.price * cartItems[itemId]);
//   }, 0);
// };

// const sendOrderSummary = async (order, email) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Order Confirmation',
//     text: `Thank you for your order! Your order summary:\n\n${JSON.stringify(order, null, 2)}`,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//   } catch (error) {
//     console.error('Error sending mail:', error);
//     throw new Error('Failed to send email');
//   }
// };

// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, food_list, userId } = req.body;

//   try {
//     console.log('Received request to create order');
//     console.log('cartItems:', cartItems);
//     console.log('userDetails:', userDetails);
//     console.log('food_list:', food_list);
//     console.log('userId:', userId);

//     // בדיקת תקינות מזהה המשתמש
//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       throw new Error(`Invalid userId: ${userId}`);
//     }

//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id === itemId);
//       if (!item) {
//         throw new Error(`Product with id ${itemId} not found`);
//       }

//       // בדיקת תקינות מזהה המוצר
//       if (!mongoose.Types.ObjectId.isValid(item._id)) {
//         throw new Error(`Invalid ObjectId for product with id ${itemId}`);
//       }

//       return {
//         product: new mongoose.Types.ObjectId(item._id.toString()), // המרת המזהה ל-ObjectId
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;
//     console.log('Total amount calculated:', totalAmount);

//     const newOrder = new Order({
//       user: new mongoose.Types.ObjectId(userId), // קישור ההזמנה למשתמש
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       totalAmount,
//     });

//     await newOrder.save();
//     console.log('Order saved successfully:', newOrder);

//     await sendOrderSummary(newOrder, userDetails.email);
//     console.log('Order summary email sent successfully');

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };

/////////////////////////////////////////////////////
// const Order = require('../models/Order');
// const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const getTotalCartAmount = (cartItems, food_list) => {
//   return Object.keys(cartItems).reduce((sum, itemId) => {
//     const item = food_list.find(product => product._id === itemId);
//     return sum + (item.price * cartItems[itemId]);
//   }, 0);
// };

// const sendOrderSummary = async (order, email) => {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.EMAIL_PASS,
//       },
//     });
  
//     const orderSummaryHtml = `
//       <!DOCTYPE html>
//       <html>
//       <head>
//         <style>
//           body {
//             font-family: Arial, sans-serif;
//             background-color: #f4f4f4;
//             margin: 0;
//             padding: 20px;
//           }
//           .container {
//             max-width: 600px;
//             margin: 0 auto;
//             background-color: #fff;
//             padding: 20px;
//             border-radius: 10px;
//             box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//           }
//           .header {
//             background-color: #f8f8f8;
//             padding: 10px 20px;
//             border-bottom: 1px solid #ddd;
//             border-radius: 10px 10px 0 0;
//             text-align: center;
//           }
//           .header h1 {
//             margin: 0;
//             color: #333;
//           }
//           .content {
//             padding: 20px;
//           }
//           .order-details {
//             margin-bottom: 20px;
//           }
//           .order-details h2 {
//             margin-bottom: 10px;
//             color: #333;
//           }
//           .order-details table {
//             width: 100%;
//             border-collapse: collapse;
//           }
//           .order-details table th,
//           .order-details table td {
//             border: 1px solid #ddd;
//             padding: 8px;
//             text-align: left;
//           }
//           .order-details table th {
//             background-color: #f4f4f4;
//           }
//           .order-details table img {
//             width: 50px;
//             height: 50px;
//             object-fit: cover;
//             border-radius: 5px;
//           }
//           .total-amount {
//             text-align: right;
//             font-size: 1.2em;
//             font-weight: bold;
//             margin-top: 20px;
//             color: #333;
//           }
//           .footer {
//             text-align: center;
//             margin-top: 20px;
//             color: #777;
//           }
//         </style>
//       </head>
//       <body>
//         <div class="container">
//           <div class="header">
//             <h1>Order Confirmation</h1>
//           </div>
//           <div class="content">
//             <p>Thank you for your order, ${order.customerName}!</p>
//             <div class="order-details">
//               <h2>Order Summary</h2>
//               <table>
//                 <thead>
//                   <tr>
//                     <th>Product</th>
//                     <th>Image</th>
//                     <th>Quantity</th>
//                     <th>Total Price</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   ${order.items.map(item => `
//                     <tr>
//                       <td>${item.product.name}</td>
//                       <td><img src="${item.product.image}" alt="${item.product.name}" /></td>
//                       <td>${item.quantity}</td>
//                       <td>₪${item.totalPrice}</td>
//                     </tr>
//                   `).join('')}
//                 </tbody>
//               </table>
//             </div>
//             <div class="total-amount">
//               Total Amount: ₪${order.totalAmount}
//             </div>
//           </div>
//           <div class="footer">
//             <p>If you have any questions about your order, please contact our support.</p>
//           </div>
//         </div>
//       </body>
//       </html>
//     `;
  
//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to: email,
//       subject: 'Order Confirmation',
//       html: orderSummaryHtml,
//     };
  
//     try {
//       await transporter.sendMail(mailOptions);
//       console.log('Mail sent successfully');
//     } catch (error) {
//       console.error('Error sending mail:', error);
//       throw new Error('Failed to send email');
//     }
//   };
  

// const convertToObjectId = (id) => {
//   return mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : new mongoose.Types.ObjectId();
// };

// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, food_list, userId } = req.body;

//   try {
//     console.log('Received request to create order');
//     console.log('cartItems:', cartItems);
//     console.log('userDetails:', userDetails);
//     console.log('food_list:', food_list);
//     console.log('userId:', userId);

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       throw new Error(`Invalid userId: ${userId}`);
//     }

//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id === itemId);
//       if (!item) {
//         throw new Error(`Product with id ${itemId} not found`);
//       }

//       return {
//         product: convertToObjectId(item._id.toString()), // המרת המזהה ל-ObjectId תקין
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;
//     console.log('Total amount calculated:', totalAmount);

//     const newOrder = new Order({
//       user: new mongoose.Types.ObjectId(userId), // קישור ההזמנה למשתמש
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       totalAmount,
//     });

//     await newOrder.save();
//     console.log('Order saved successfully:', newOrder);

//     await sendOrderSummary(newOrder, userDetails.email);
//     console.log('Order summary email sent successfully');

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };



// const Order = require('../models/Order');
// const nodemailer = require('nodemailer');
// const mongoose = require('mongoose');
// require('dotenv').config();

// const getTotalCartAmount = (cartItems) => {
//   return Object.values(cartItems).reduce((sum, item) => sum + (item.product.price * item.quantity), 0);
// };

// const sendOrderSummary = async (order, email) => {
//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASS,
//     },
//   });

//   const orderSummaryHtml = `
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <style>
//         body {
//           font-family: Arial, sans-serif;
//           background-color: #f4f4f4;
//           margin: 0;
//           padding: 20px;
//         }
//         .container {
//           max-width: 600px;
//           margin: 0 auto;
//           background-color: #fff;
//           padding: 20px;
//           border-radius: 10px;
//           box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
//         }
//         .header {
//           background-color: #f8f8f8;
//           padding: 10px 20px;
//           border-bottom: 1px solid #ddd;
//           border-radius: 10px 10px 0 0;
//           text-align: center;
//         }
//         .header h1 {
//           margin: 0;
//           color: #333;
//         }
//         .content {
//           padding: 20px;
//         }
//         .order-details {
//           margin-bottom: 20px;
//         }
//         .order-details h2 {
//           margin-bottom: 10px;
//           color: #333;
//         }
//         .order-details table {
//           width: 100%;
//           border-collapse: collapse;
//         }
//         .order-details table th,
//         .order-details table td {
//           border: 1px solid #ddd;
//           padding: 8px;
//           text-align: left;
//         }
//         .order-details table th {
//           background-color: #f4f4f4;
//         }
//         .order-details table img {
//           width: 50px;
//           height: 50px;
//           object-fit: cover;
//           border-radius: 5px;
//         }
//         .total-amount {
//           text-align: right;
//           font-size: 1.2em;
//           font-weight: bold;
//           margin-top: 20px;
//           color: #333;
//         }
//         .footer {
//           text-align: center;
//           margin-top: 20px;
//           color: #777;
//         }
//       </style>
//     </head>
//     <body>
//       <div class="container">
//         <div class="header">
//           <h1>Order Confirmation</h1>
//         </div>
//         <div class="content">
//           <p>Thank you for your order, ${order.customerName}!</p>
//           <div class="order-details">
//             <h2>Order Summary</h2>
//             <table>
//               <thead>
//                 <tr>
//                   <th>Product</th>
//                   <th>Image</th>
//                   <th>Quantity</th>
//                   <th>Total Price</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 ${order.items.map(item => `
//                   <tr>
//                     <td>${item.name}</td>
//                     <td><img src="${item.image}" alt="${item.name}" /></td>
//                     <td>${item.quantity}</td>
//                     <td>₪${item.totalPrice}</td>
//                   </tr>
//                 `).join('')}
//               </tbody>
//             </table>
//           </div>
//           <div class="total-amount">
//             Total Amount: ₪${order.totalAmount}
//           </div>
//         </div>
//         <div class="footer">
//           <p>If you have any questions about your order, please contact our support.</p>
//         </div>
//       </div>
//     </body>
//     </html>
//   `;

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: 'Order Confirmation',
//     html: orderSummaryHtml,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log('Mail sent successfully');
//   } catch (error) {
//     console.error('Error sending mail:', error);
//     throw new Error('Failed to send email');
//   }
// };

// const convertToObjectId = (id) => {
//   return mongoose.Types.ObjectId.isValid(id) ? new mongoose.Types.ObjectId(id) : new mongoose.Types.ObjectId();
// };

// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, userId } = req.body;

//   try {
//     console.log('Received request to create order');
//     console.log('cartItems:', cartItems);
//     console.log('userDetails:', userDetails);
//     console.log('userId:', userId);

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       throw new Error(`Invalid userId: ${userId}`);
//     }

//     const items = Object.keys(cartItems).map(itemId => {
//       const item = cartItems[itemId];
//       return {
//         product: convertToObjectId(item.product._id.toString()),
//         name: item.product.name,
//         image: item.product.image,
//         quantity: item.quantity,
//         totalPrice: item.product.price * item.quantity,
//       };
//     });

//     const totalAmount = getTotalCartAmount(cartItems) + 7;
//     console.log('Total amount calculated:', totalAmount);

//     const newOrder = new Order({
//       user: new mongoose.Types.ObjectId(userId),
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       totalAmount,
//     });

//     await newOrder.save();
//     console.log('Order saved successfully:', newOrder);

//     await sendOrderSummary(newOrder, userDetails.email);
//     console.log('Order summary email sent successfully');

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };




/////////////////////////////vvvv
// const Order = require('../models/Order');
// const { getTotalCartAmount, convertToObjectId } = require('../utils/utils');
// const { sendOrderSummary } = require('../services/emailService');
// const mongoose = require('mongoose');

// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, food_list, userId } = req.body;

//   try {
//     console.log('Received request to create order');
//     console.log('cartItems:', cartItems);
//     console.log('userDetails:', userDetails);
//     console.log('food_list:', food_list);
//     console.log('userId:', userId);

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       throw new Error(`Invalid userId: ${userId}`);
//     }

//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id === itemId);
//       if (!item) {
//         throw new Error(`Product with id ${itemId} not found`);
//       }

//       return {
//         product: convertToObjectId(item._id.toString()), 
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;
//     console.log('Total amount calculated:', totalAmount);

//     const newOrder = new Order({
//       user: new mongoose.Types.ObjectId(userId), 
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       totalAmount,
//     });

//     await newOrder.save();
//     console.log('Order saved successfully:', newOrder);

//     await sendOrderSummary(newOrder, userDetails.email);
//     console.log('Order summary email sent successfully');

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };







// const Order = require('../models/Order');
// const { getTotalCartAmount, convertToObjectId } = require('../utils/utils');
// const { sendOrderSummary } = require('../services/emailService');
// const mongoose = require('mongoose');

// exports.createOrder = async (req, res) => {
//   const { cartItems, userDetails, food_list, userId } = req.body;

//   try {
//     // console.log('Received request to create order');
//     // console.log('cartItems:', cartItems);
//     // console.log('userDetails:', userDetails);
//     // console.log('food_list:', food_list);
//     // console.log('userId:', userId);

//     if (!mongoose.Types.ObjectId.isValid(userId)) {
//       throw new Error(`Invalid userId: ${userId}`);
//     }

//     const items = Object.keys(cartItems).map(itemId => {
//       const item = food_list.find(product => product._id.toString() === itemId);
//       if (!item) {
//         throw new Error(`Product with id ${itemId} not found`);
//       }

//       return {
//         product: {
//           _id: convertToObjectId(item._id.toString()),
//           name: item.name,
//           image: item.image
//         },
//         quantity: cartItems[itemId],
//         totalPrice: item.price * cartItems[itemId],
//       };
//     });

//     console.log('Order items:', items); 

//     const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;
//     console.log('Total amount calculated:', totalAmount);

//     const newOrder = new Order({
//       user: new mongoose.Types.ObjectId(userId), 
//       customerName: userDetails.fullName,
//       email: userDetails.email,
//       address: userDetails.address,
//       phone: userDetails.phone,
//       paymentMethod: userDetails.paymentMethod,
//       items,
//       totalAmount,
//     });

//     await newOrder.save();
//     console.log('Order saved successfully:', newOrder);

//     await sendOrderSummary(newOrder, userDetails.email);
//     console.log('Order summary email sent successfully');

//     res.status(200).json({ message: 'Order processed and email sent successfully' });
//   } catch (error) {
//     console.error('Error processing order:', error.message);
//     res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
//   }
// };


const Order = require('../models/Order');
const { getTotalCartAmount, convertToObjectId } = require('../utils/utils');
const { sendOrderSummary } = require('../services/emailService');
const mongoose = require('mongoose');

exports.createOrder = async (req, res) => {
  const { cartItems, userDetails, food_list, userId } = req.body;

  try {
    console.log('Received request to create order');
    console.log('cartItems:', cartItems);
    console.log('userDetails:', userDetails);
    console.log('food_list:', food_list);
    console.log('userId:', userId);

    if (!mongoose.Types.ObjectId.isValid(userId)) {
      throw new Error(`Invalid userId: ${userId}`);
    }

    const items = Object.keys(cartItems).map(itemId => {
      const item = food_list.find(product => product._id.toString() === itemId);
      if (!item) {
        throw new Error(`Product with id ${itemId} not found`);
      }

      console.log(`Found item for id ${itemId}:`, item); // הוספת הדפסה

      return {
        product: {
          _id: convertToObjectId(item._id.toString()),
          name: item.name,
          image: item.image
        },
        quantity: cartItems[itemId],
        totalPrice: item.price * cartItems[itemId],
      };
    });

    console.log('Order items:', items); // הדפסה של פרטי המוצרים

    const totalAmount = getTotalCartAmount(cartItems, food_list) + 7;
    console.log('Total amount calculated:', totalAmount);

    const newOrder = new Order({
      user: new mongoose.Types.ObjectId(userId), 
      customerName: userDetails.fullName,
      email: userDetails.email,
      address: userDetails.address,
      phone: userDetails.phone,
      paymentMethod: userDetails.paymentMethod,
      items,
      totalAmount,
    });

    await newOrder.save();
    console.log('Order saved successfully:', newOrder);

    await sendOrderSummary(newOrder, userDetails.email);
    console.log('Order summary email sent successfully');

    res.status(200).json({ message: 'Order processed and email sent successfully' });
  } catch (error) {
    console.error('Error processing order:', error.message);
    res.status(500).json({ message: `Error processing order or sending email: ${error.message}` });
  }
};
