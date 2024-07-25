// const express = require("express");
// const router = express.Router();
// const adminController = require("../controllers/adminController");
// const verifyTokenAndAuthorization =
//   require("../middleware/verifyToken").verifyTokenAndAuthorization;

// //v Route to get all products
// router.get("/products", adminController.getAllProducts);

// //v Route to get a product by ID
// router.get("/products/:productId", adminController.getProductById);

// //v Route to create a new product
// router.post("/products",verifyTokenAndAuthorization,adminController.createProduct);

// //v Route to update a product by ID
// router.put(
//   "/products/:productId",
//   verifyTokenAndAuthorization,
//   adminController.updateProduct
// );

// //v Route to delete a product by ID
// router.delete(
//   "/products/:productId",
//   verifyTokenAndAuthorization,
//   adminController.deleteProduct
// );

// //order
// //v Create a new order
// router.post("/orders", adminController.createOrder);

// //v Get all orders
// router.get("/allOrders", adminController.getAllOrders);

// //v Get order by ID
// router.get("/orders/:id", adminController.getOrderById);

// //v Update order by ID
// router.put("/orders/:id", adminController.updateOrder);

// //v Delete order by ID
// router.delete("/orders/:id", adminController.deleteOrder);

// module.exports = router;




const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { verifyTokenAndAuthorization } = require('../middleware/verifyToken');

// Routes for products
router.get('/products', adminController.getAllProducts);
router.get('/products/:productId', adminController.getProductById);
router.post('/products', verifyTokenAndAuthorization, adminController.createProduct);
router.put('/products/:productId', verifyTokenAndAuthorization, adminController.updateProduct);
router.delete('/products/:productId', verifyTokenAndAuthorization, adminController.deleteProduct);

// Routes for orders
router.post('/orders', verifyTokenAndAuthorization, adminController.createOrder);
router.get('/allOrders', verifyTokenAndAuthorization, adminController.getAllOrders);
router.get('/orders/:id', verifyTokenAndAuthorization, adminController.getOrderById);
router.put('/orders/:id', verifyTokenAndAuthorization, adminController.updateOrder);
router.delete('/orders/:id', verifyTokenAndAuthorization, adminController.deleteOrder);

module.exports = router;
