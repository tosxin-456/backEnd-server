const {Schema, model} = require("mongoose");

const userSchema = Schema ({
   firstname: {
      type: String,
      unique: false
   },
   lastname: {
      type: String,
      unique: false
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