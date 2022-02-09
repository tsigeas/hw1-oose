const mongoose = require("mongoose");
 
const URI = `mongodb+srv://tsige:5j93QHXeGWRwWXYO@cluster0.pvufr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

async function connect() {
 try {
   await mongoose.connect(URI);
   console.log("Connected to MongoDB!");
 } catch (err) {
   console.log(err);
 }
}
module.exports = { connect };
