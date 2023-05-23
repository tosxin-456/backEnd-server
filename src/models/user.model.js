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
      unique: true,
      required:true
   },
   password: {
      type: String,
      required: true
   }
})

const userModel = model("User", userSchema);

module.exports = {
   userModel
}