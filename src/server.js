const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
const mongoose = require("mongoose");

const router = express.Router();

app.use(cors());

mongoose.connect("mongodb+srv://admin:Qwerty123_@cluster0.ndjns.mongodb.net/BotOrders?retryWrites=true&w=majority", {
  useNewUrlParser: true
});

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("Connection with MongoDB was successful");
});

const Schema = mongoose.Schema;

const detail = new Schema({
  name: {
    type: String
  },
  age: {
    type: Number
  }
});

const items = mongoose.model('items',detail);

const data = {
	name: 'asdasdasd',
	age: 11
};

//const newItem = new items(data);
//newItem.save();

app.get('/orders', (req, res) => {

items.find({ })
	.then((data) => {
		console.log(data);
		res.json(data);
	});
	


});

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});

