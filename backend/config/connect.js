const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.DB_CONNECT);
    console.log("connected");
  } catch (error) {
    console.log(error, "no connect");
  }
};

module.exports = connectDb;
