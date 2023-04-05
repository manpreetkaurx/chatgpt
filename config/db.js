const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async() => {
   try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected To Mongodb Database ${mongoose.connection.host}`.bgGreen.bgWhite
    );
   } catch (error) {
    console.log(`Mongodb Database Error ${error}`.bgRed.bgWhite);
   }
   
};    

module.exports = connectDB;