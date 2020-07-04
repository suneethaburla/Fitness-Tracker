const express = require ("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// If we are in production (Heroku), process.env.PORT is true, 
// If we are in development it is false, default to 3000
const PORT = process.env.port||3000;

const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");


//bodyparser Setup Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use (logger("dev"));


app.use(express.static("public"));

//setup Routes

app.use("/api", apiRoutes);
app.use("/", htmlRoutes)

// Connect database
mongoose.connect (process.env.MONGODB_URI || 'mongodb://localhost/fitness_db',
{ useNewUrlParser: true, useUnifiedTopology: true }
);

app.listen(PORT, ()=> console.log(`server started on Port: ${PORT}`));