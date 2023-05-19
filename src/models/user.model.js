const {Schema, model} = require("mongoose");

const userSchema = Schema ({
   firstname: {
      type: String,
      required: true
   },
   lastname: {
      type: String,
      required: true
   },
   email: {
      type: String,
      unique: true
   },
   password: {
      type: String,
      required: true
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