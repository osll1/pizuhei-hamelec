// require('dotenv').config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const cors = require("cors");
// const db = require("./db");
// const userRoutes = require("./routes/userRoutes");
// const cartRoutes = require("./routes/cartRoutes");
// const adminRoutes = require("./routes/adminRoutes");


// const app = express();

// app.use(bodyParser.json());
// app.use(cors());


// app.use("/" , userRoutes);
// app.use("/" , cartRoutes);
// app.use("/" ,adminRoutes);


require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./db");
const userRoutes = require("./routes/userRoutes");
const carRoutes = require("./routes/cartRoutes");
const adminRoutes = require("./routes/adminRoutes");
const orderRoutes = require("./routes/orderRoutes")

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use("/", userRoutes);
app.use("/", carRoutes);
app.use("/" ,orderRoutes);
app.use("/", adminRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running On Port ${PORT}`);
});




// const PORT = process.env.PORT || 3000;

// app.listen(PORT , () => {
//     console.log(`Server Running On Port ${PORT}`);
// })
