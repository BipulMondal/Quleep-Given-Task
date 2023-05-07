require("dotenv").config();
const express = require ('express');
const app = express();
const connectToDB = require ("./config/db");
const cors = require ("cors")
const productsRoutes = require ("./routes/productRoutes");
const fileUpload = require ('express-fileupload');
const bodyParser = require("body-parser");

//middleware
app.use(cors());
app.options("*", cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
app.use(fileUpload({
    useTempFiles: true
}))



connectToDB();

app.use("/", productsRoutes);

module.exports = app;
