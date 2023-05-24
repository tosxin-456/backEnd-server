const {mentorModel} = require("../models/mentor.models");
const validators = require("../validators/mentor.validator");
// const bcrypt = require("bcrypt");
const {formatZodError} = require("../utilities/errormessage")


// get all mentors
async function getAllMentors(req, res) {
   const mentor = await mentorModel.find();
   
    res.json(mentor).end();
}


//login
async function login(req, res) {
   const result = validators.loginValidator.safeParse(req.body);
   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }
   
   try {
      const check = await mentorModel.findOne({name:req.body.name})

      if(check.password==req.body.password){
          res.json("successfully login to mentors dashboard")
      }
      // else{
      //     res.json("wrong password")
      // }
  } catch{
      res.json("wrong details")
  }
   // const mentor = await mentorModel.findOne({email: req.body.email});
   // if (!mentor) return res.send("user not found!!").end();
   // // if (!bcrypt.compareSync(req.body.password, mentor.password)) return res.send("password incorrect!!").end();
   // mentor.password = undefined;
   // res.json(mentor).end();
}

//register
async function registerMentor(req, res) {
   const result = validators.registerValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }
   const {firstname, lastname, email, password} = req.body;

   // const hashedPassword = bcrypt.hashSync(password, 64);

   const newmentors = new mentorModel({
      firstname,
      lastname,
      email,
      password
   })
 let mentors;
   try {
   mentors = await newmentors.save()
   res.status(200).json(mentors)
   } catch (error) {
      console.log("err", error)
      res.status(500).json(error)
   }
}

// get recipes
async function getMentor(req, res) {
   const result = validators.getMentorValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }

   const mentors = await mentorModel.findById(req.params.id);

   res.json(mentors.recipes).end();
}

//updateRecipes
async function updateMentor(req, res) {
   const result = validators.updateRecipesValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }

   await mentorModel.updateOne({_id: req.params.id}, {
      $push: {
         recipes: {$each: req.body.recipes}
      }
   })

   res.send("mentors added").end();
}

module.exports = {
   login,
   registerMentor,
   getMentor,
   getAllMentors,
   updateMentor
}