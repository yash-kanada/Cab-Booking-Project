require("dotenv").config();
const connect = require("./dbConfig/connect");
connect();
const PORT = 4040;
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const cors = require("cors");
app.use(cors());
const mongoose = require("mongoose");
app.use(express.json());
const fs = require("fs");
const http = require("http");
const colors = require("colors");



//Get Home
app.get("/", (req, res) => {
  res.send("Home Page.");
});

//Require All Routes
const otpRoutes = require("./routes/otpRoutes");
const userRoutes = require("./routes/userRoutes");
const venderRoutes = require("./routes/venderRoutes");
const chatRoutes = require("./routes/chatRoutes");
const adminRoutes = require("./routes/adminRoutes");
const contactRoutes = require("./routes/contactRoutes");
const rideRoutes = require("./routes/rideRoutes");
const bookRoutes = require("./routes/bookingRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");

//auth
app.use("/auth", otpRoutes.router);

//User Route
app.use("/user", userRoutes.router);
app.use("/profile", express.static("upload/images"));

//Chat Route
app.use("/chat", chatRoutes.router);

//Admin Route
app.use("/admin", adminRoutes.router);

app.use("/vender", venderRoutes.router);

//Vender Route
// ✅ Serve uploaded vehicle images
// Correctly expose the upload folder
app.use("/vehicleImg", express.static("upload/images"));
app.use("/puc", express.static("upload/images"));
app.use("/vehicleInsurance", express.static("upload/images"));
app.use("/vehicleRC", express.static("upload/images"));



//Contact Route
app.use("/contact", contactRoutes.router);

// app.use("/vender", venderRoutes)

//Ride Route
app.use("/car", express.static("upload/images"));
app.use("/ride", rideRoutes.router);

//Booking Route
app.use("/booking", bookRoutes.router);

//Vehicle Route
app.use("/puc", express.static("upload/images"));
app.use("/vehicleInsurance", express.static("upload/images"));
app.use("/vehicleRC", express.static("upload/images"));
app.use("/addVehicle", vehicleRoutes.router);

//Port Running
app.listen(PORT, () => {
  console.log(`Port is running on ${PORT}.`.bgWhite.red);
});

