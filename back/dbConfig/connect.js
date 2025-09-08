const mongoose = require("mongoose");
const colors = require("colors");

const connect = () => {
  mongoose
    .connect("mongodb+srv://sparkstoideasdev12:cab@cluster0.5jrv3mz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    .then(() => {
      console.log("DB Connect successfully".bgWhite.cyan);
    })
    .catch((err) => {
      console.log("Error in db connection", err);
    });
};

module.exports = connect;
