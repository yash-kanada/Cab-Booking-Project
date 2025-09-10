const mongoose = require("mongoose");
const colors = require("colors");


const connect = () => {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("DB Connect successfully".bgWhite.cyan);
    })
    .catch((err) => {
      console.log("Error in db connection", err);
    });
};

module.exports = connect;
