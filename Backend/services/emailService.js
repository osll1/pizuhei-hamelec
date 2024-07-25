// const nodemailer = require('nodemailer');
// require('dotenv').config();

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
//                     <td>${item.product.name}</td>
//                     <td><img src="${item.product.image}" alt="${item.product.name}" /></td>
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

// module.exports = {
//   sendOrderSummary
// };



// const nodemailer = require('nodemailer');
// require('dotenv').config();

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
//                     <td>${item.product.name}</td>
//                     <td><img src="${item.product.image}" alt="${item.product.name}" /></td>
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

// module.exports = {
//   sendOrderSummary
// };



/////////////vvv
// const nodemailer = require('nodemailer');
// require('dotenv').config();

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
//                     <td>${item.product.name}</td>
//                     <td><img src="${item.product.image}" alt="${item.product.name}" /></td>
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

// module.exports = {
//   sendOrderSummary
// };



const nodemailer = require('nodemailer');
require('dotenv').config();

const sendOrderSummary = async (order, email) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const orderSummaryHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          margin: 0;
          padding: 20px;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          background-color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        .header {
          background-color: #f8f8f8;
          padding: 10px 20px;
          border-bottom: 1px solid #ddd;
          border-radius: 10px 10px 0 0;
          text-align: center;
        }
        .header h1 {
          margin: 0;
          color: #333;
        }
        .content {
          padding: 20px;
        }
        .order-details {
          margin-bottom: 20px;
        }
        .order-details h2 {
          margin-bottom: 10px;
          color: #333;
        }
        .order-details table {
          width: 100%;
          border-collapse: collapse;
        }
        .order-details table th,
        .order-details table td {
          border: 1px solid #ddd;
          padding: 8px;
          text-align: left;
        }
        .order-details table th {
          background-color: #f4f4f4;
        }
        .order-details table img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          border-radius: 5px;
        }
        .total-amount {
          text-align: right;
          font-size: 1.2em;
          font-weight: bold;
          margin-top: 20px;
          color: #333;
        }
        .footer {
          text-align: center;
          margin-top: 20px;
          color: #777;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>Order Confirmation</h1>
        </div>
        <div class="content">
          <p>Thank you for your order, ${order.customerName}!</p>
          <div class="order-details">
            <h2>Order Summary</h2>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Total Price</th>
                </tr>
              </thead>
              <tbody>
                ${order.items.map(item => `
                  <tr>
                    <td>${item.product.name}</td>
                    <td><img src="${item.product.image}" alt="${item.product.name}" /></td>
                    <td>${item.quantity}</td>
                    <td>₪${item.totalPrice}</td>
                  </tr>
                `).join('')}
              </tbody>
            </table>
          </div>
          <div class="total-amount">
            Total Amount: ₪${order.totalAmount}
          </div>
        </div>
        <div class="footer">
          <p>If you have any questions about your order, please contact our support.</p>
        </div>
      </div>
    </body>
    </html>
  `;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Order Confirmation',
    html: orderSummaryHtml,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Mail sent successfully');
  } catch (error) {
    console.error('Error sending mail:', error);
    throw new Error('Failed to send email');
  }
};

module.exports = {
  sendOrderSummary
};
