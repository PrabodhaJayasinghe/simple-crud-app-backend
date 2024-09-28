const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const app = express();
const productRoute = require("./routes/product.route.js");

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true })); //parse application/x-www-form-urlencoded. False means you can't parse nested objects. True means you can parse nested objects.

//routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from Node API server!"); //response comming from node API
});

mongoose
  .connect(
    "mongodb+srv://prabodha1:HrvBNeSyBDBXQxXT@backenddb.2dopd.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  ) //collection name= node-API
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("connection failed!");
  });
