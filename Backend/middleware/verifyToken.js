const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyTokenAndAuthorization = (req , res , next) => {
 
  isAdmin(req , res ,() =>{
    if(req.user && req.user.isAdmin){
      next()
    }
    else{
      res.status(403).json({message: "You are not allowed to perform this action!"})
    }
  })

}
const isAdmin = async (req, res, next) => {
  
  const authHeader = req.headers.token;
  if (!authHeader) {
    return res.status(401).json({ message: "Missing authorization token" });
  }
  try {

    const token = authHeader.split(" ")[1];
    const secret = process.env.secret;
    const decoded = jwt.verify(token, secret); 

    if (decoded.isAdmin) {
      req.user = decoded; 
      next();
    } else {
      return res.status(403).json({ message: "Forbidden" });
    }
  } catch (error) {
    console.log(error);
    return res.status(401).json({ message: "Invalid authorization token" });
  }
};

module.exports = {isAdmin , verifyTokenAndAuthorization};
