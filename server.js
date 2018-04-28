const express = require("express");
const bodyParser = require("bodyparser");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;
const routes = require("./src/controllers/routes/articlesAPI");

app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(express.static("client/build"));

app.use("/api/articles", routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/react-nytimes");

app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
});