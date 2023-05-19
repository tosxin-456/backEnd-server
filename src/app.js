// require('dotnev').config();
const express = require("express")
const {recipesRouter} = require("./routes/recipe.route");
const mongoose = require("mongoose");
const { usersRouter } = require("./routes/user.route");

const mongoUrl ="mongodb+srv://Tosin:090711t@cluster0.dex1ht8.mongodb.net/learn-hub";
// const mongoUrl =process.env.MONGO_URL;
const app = express();

app.use(express.json()); // Helps our app to accept json data
app.use('/recipes', recipesRouter);
app.use('/users', usersRouter)


mongoose.connect(mongoUrl).then(() => {
   app.listen(4487, () => {
      console.log("mongoDB connected..");
      })
}).catch((err) => {
   console.log("mongo error", err);
});

// const mongoose = require('mongoose');

// const mongoUrl = 'mongodb://localhost/mydatabase';
// mongoose.connect(mongoUrl)
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('MongoDB connection error:', error);
//   });
