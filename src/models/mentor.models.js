const {Schema, model} = require("mongoose");

const mentorSchema = Schema ({
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

const mentorModel = model("Mentor", mentorSchema);

module.exports = {
   mentorModel
};