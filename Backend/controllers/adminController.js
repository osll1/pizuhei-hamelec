const Product = require("../models/Product");
const Order = require("../models/Order");


//v product
exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v
exports.getProductById = async (req, res) => {
  const productId = req.params.productId;
  try {
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json(product);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v
exports.createProduct = async (req, res) => {
  const { name, price, category, description } = req.body;
  try {
    const newProduct = new Product({
      name: name,
      price: price,
      category: category,
      description: description,
    });
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: `Internal Server Error ,${error}` });
  }
};

exports.updateProduct = async (req, res) => {
  const productId = req.params.productId;
  const { name, price, category, description } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      { name, price, category, description },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json(updatedProduct);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v
exports.deleteProduct = async (req, res) => {
  const productId = req.params.productId;
  try {
    const deletedProduct = await Product.findByIdAndDelete(productId);
    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//orders
//v Create a new order
exports.createOrder = async (req, res) => {
  try {
    const { customerName, products } = req.body;

    // Validate the request payload
    if (!customerName || !products || products.length === 0) {
      return res.status(400).json({ message: "Invalid request payload" });
    }

    // Create a new order
    const newOrder = new Order({ customerName, products });
    const savedOrder = await newOrder.save();

    res.status(201).json(savedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v Get all orders
exports.getAllOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    res.status(200).json(orders);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v Get order by ID
exports.getOrderById = async (req, res) => {
  try {
    const orderId = req.params.id;
    const order = await Order.findById(orderId).populate("products.product");

    if (!order) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(order);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v Update order by ID
exports.updateOrder = async (req, res) => {
  try {
    const orderId = req.params.id;
    const { customerName, products } = req.body;

    // Validate the request payload
    if (!customerName || !products || products.length === 0) {
      return res.status(400).json({ message: "Invalid request payload" });
    }

    //v Update the order
    const updatedOrder = await Order.findByIdAndUpdate(
      orderId,
      { customerName, products },
      { new: true, runValidators: true }
    ).populate("products.product");

    if (!updatedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json(updatedOrder);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

//v Delete order by ID
exports.deleteOrder = async (req, res) => {
  try {
    const orderId = req.params.id;

    // Delete the order
    const deletedOrder = await Order.findByIdAndDelete(orderId);

    if (!deletedOrder) {
      return res.status(404).json({ message: "Order not found" });
    }

    res.status(200).json({ message: "Order Deleted" }); // No content
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
