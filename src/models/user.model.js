const {Schema, model} = require("mongoose");

const userSchema = Schema ({
   name: String,
   firstname: {
      type: String,
      unique: true
   },
   lastname: {
      type: String,
      unique: true
   },
   email: {
      type: String,
      unique: true
   },
   password: {
      type: String
   },
   role: {
      type:String,
      default: "student",
      enum: ["student", "mentor"]
   }
})

const userModel = model("User", userSchema);

module.exports = {
   userModel
}