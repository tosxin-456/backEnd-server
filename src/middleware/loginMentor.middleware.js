const {mentorModel} = require("../models/mentor.models")

async function clientLogin(req, res, next) {
console.log("request made to site");

   next();
}

module.exports = {
   clientLogin
}