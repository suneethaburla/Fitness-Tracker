const express = require('express');
const mongoose = require('mongoose');
const logger = require("morgan");

const app = express();

// If we are in production (Heroku), process.env.PORT is true, 
// If we are in development it is false, default to 3000
const PORT = process.env.PORT || 3000;

const apiRoutes = require("./routes/apiRoutes.js");
const htmlRoutes = require("./routes/htmlRoutes.js");

//connect database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', 
{ useNewUrlParser: true,  useUnifiedTopology: true  }
);

app.use(logger("dev"));

//body parser middlewware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.use("/api", apiRoutes);
app.use("/", htmlRoutes);


app.listen(PORT, () => {
    console.log(`Server running on: ${PORT}`);
});