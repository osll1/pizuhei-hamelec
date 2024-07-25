const express = require('express');
const router = express.Router();
const Cart = require('../models/Cart');

// Route to get the user's cart
router.get('/user/:id', async (req, res) => {
  const userId = req.params.userId;


  try {
    const userCart = await Cart.findOne({ user: userId }).populate('products.product');
    res.status(200).json({message:"your cart" , userCart});
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Route to add a product to the user's cart
router.post('/add', async (req, res) => {
  const { userId, productId, quantity } = req.body;

  try {
    let userCart = await Cart.findOne({ user: userId });

    // If the user doesn't have a cart, create a new one
    if (!userCart) {
      userCart = new Cart({ user: userId, products: [] });
    }

    // Check if the product is already in the cart
    const existingProductIndex = userCart.products.findIndex(
      (item) => item.product.toString() === productId
    );

    if (existingProductIndex !== -1) {
      // If the product is already in the cart, update the quantity
      userCart.products[existingProductIndex].quantity += quantity;
    } else {
      // If the product is not in the cart, add it
      userCart.products.push({ product: productId, quantity });
    }

    // Save the updated cart
    await userCart.save();

    res.status(200).json(userCart);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

// Add Product to Cart
router.post('/cart/add', async (req, res) => {
    const { productId, quantity } = req.body;
    // Logic to add product to cart
});

// Remove Product from Cart
router.delete('/cart/remove/:productId', async (req, res) => {
    const productId = req.params.productId;
    // Logic to remove product from cart
});

// Update Cart Item Quantity
router.put('/cart/update/:productId', async (req, res) => {
    const productId = req.params.productId;
    const { quantity } = req.body;
    // Logic to update cart item quantity
});

// Clear Cart
router.delete('/cart/clear', async (req, res) => {
    // Logic to clear cart
});

// Logout
router.post('/logout', async (req, res) => {
    // Logic to logout user
});

// Change Password
router.put('/password', async (req, res) => {
    const { oldPassword, newPassword } = req.body;
    // Logic to change password
});

// View Order History
router.get('/orders', async (req, res) => {
    // Logic to retrieve order history
});

// View Profile Information
router.get('/profile', async (req, res) => {
    // Logic to retrieve user profile information
});

// Update Profile Information
router.put('/profile', async (req, res) => {
    const profileData = req.body;
    // Logic to update user profile information
});

// Reset Password
router.post('/reset-password', async (req, res) => {
    const { email } = req.body;
    // Logic to send password reset email
});

module.exports = router;


module.exports = router;

