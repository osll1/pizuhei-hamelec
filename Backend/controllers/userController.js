// const User = require("../models/User");
// const bcrypt = require("bcrypt");
// const secret = process.env.secret;


// // Create a new user
// exports.registerUser = async (req, res) => {
//   try {
//     const { username, email, password } = req.body;

//     console.log("Registration data:", { username, email, password }); // Debug log

//     // Check if the user with the given email already exists
//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res
//         .status(400)
//         .json({ message: "User with this email already exists" });
//     }

//     // Hash the password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Create a new user
//     const newUser = new User({
//       username,
//       email,
//       password: hashedPassword,
//     });

//     console.log("New user data:", newUser); // Debug log

//     // Save the user to the database
//     await newUser.save();

//     res.status(201).json({ message: "User registered successfully" });
//   } catch (error) {
//     console.error("Error during user registration:", error);
//     res.status(500).json({ message: "Internal server error" });
//   }
// };


// exports.loginUser = async (req, res) => {
//   const {email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });


//     if (!user) {
//       return res.status(404).json({ message: "User not found" });
//     }

//     const isPasswordValid = await bcrypt.compare(password, user.password);

//     if (!isPasswordValid) {
//       return res.status(401).json({ message: "Invalid password" });
//     }

//     const token = createJWTToken(user);

//     res.status(200).json({
//       token,
//       user: {
//         username: user.username,
//         email: user.email,
//       },
//     });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ message: "Internal Server Error" });
//   }
// };


// function createJWTToken(user) {
  
//   const jwt = require("jsonwebtoken");
//   const secretKey = secret; // Replace with your actual secret key
//   console.log(secretKey);
//   return jwt.sign({ userId: user._id, email: user.email , isAdmin:user.isAdmin }, secretKey, {expiresIn: "1h",});
// }


// // Get user profile
// exports.getUserProfile = async (req, res) => {
//   // Implementation for fetching user profile
// };


// // Update user profile
// exports.updateUserProfile = async (req, res) => {
//   // Implementation for updating user profile
// };


const User = require("../models/User");
const Order = require("../models/Order");
const bcrypt = require("bcrypt");
const secret = process.env.secret;

// Create a new user
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    console.log("Registration data:", { username, email, password }); // Debug log

    // Check if the user with the given email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User with this email already exists" });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

   
    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during user registration:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = createJWTToken(user);

    res.status(200).json({
      token,
      user: {
        username: user.username,
        email: user.email,
        isAdmin: user.isAdmin
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

function createJWTToken(user) {
  const jwt = require("jsonwebtoken");
  const secretKey = secret; // Replace with your actual secret key
  console.log(secretKey);
  return jwt.sign({ userId: user._id, email: user.email, isAdmin: user.isAdmin }, secretKey, { expiresIn: "1h" });
}

// Add order to user's order history
exports.addOrder = async (req, res) => {
  const { email, products } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const newOrder = new Order({
      customerName: user.username,
      orderDate: new Date(),
      products: products,
      userId: user._id
    });

    await newOrder.save();

    res.status(201).json({ message: 'Order added successfully', order: newOrder });
  } catch (error) {
    console.error('Error adding order:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

// Get user order history
exports.getPurchases = async (req, res) => {
  const { email } = req.query;

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    const orders = await Order.find({ userId: user._id }).populate('products.product');

    res.json(orders);
  } catch (error) {
    console.error('Error fetching purchases:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
