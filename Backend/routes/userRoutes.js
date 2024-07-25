// const express = require('express');
// const router = express.Router();
// const userControllers = require("../controllers/userController");

// router.post("/api/register" ,  userControllers.registerUser);


// router.post("/api/login" , userControllers.loginUser);



// module.exports = router;

const express = require('express');
const router = express.Router();
const userControllers = require("../controllers/userController");
const { isAdmin, verifyTokenAndAuthorization } = require('../middleware/verifyToken');

router.post("/api/register", userControllers.registerUser);
router.post("/api/login", userControllers.loginUser);
router.get("/api/purchases", verifyTokenAndAuthorization, userControllers.getPurchases);
router.post("/api/addOrder", verifyTokenAndAuthorization, userControllers.addOrder);

module.exports = router;
