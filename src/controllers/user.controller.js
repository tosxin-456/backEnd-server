const {userModel} = require("../models/user.model");
const validators = require("../validators/user.validator");
const bcrypt = require("bcrypt");
const {formatZodError} = require("../utilities/errormessage")


// get all users
async function getAllUsers(req, res) {
   const user = await userModel.find();
   
    res.json(user).end();
}


//login
async function login(req, res) {
   const result = validators.loginValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }

   const user = await userModel.findOne({email: req.body.email});

   if (!user) return res.send("user not found!!").end();

   if (!bcrypt.compareSync(user.password ,req.body.password )) return res.send("password incorrect!!").end();

   user.password = undefined;

   res.json(user).end();
}

//register
async function register(req, res) {
   console.log(`REQ_BODY:::`, req.body);

   const result = validators.registerValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }
   const {firstname,lastname, email,password,role} = req.body

   const newUser = new userModel({
      firstname,
      lastname,
      email,
      password,
      role
   })
 let user;
   try {
   user = await newUser.save()
   res.status(200).json(user)
   } catch (error) {
      console.log("err", error)
      res.status(500).json(error)
   }
}

// get recipes
async function getStudent(req, res) {
   const result = validators.getUserValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }

   const user = await userModel.findById(req.params.id);

   res.json(user.recipes).end();
}

//updateRecipes
async function updateStudent(req, res) {
   const result = validators.updateRecipesValidator.safeParse(req.body);

   if (!result.success) {
      return res.status(400).json(formatZodError(result.error.issues)).end();
   }

   await userModel.updateOne({_id: req.params.id}, {
      $push: {
         recipes: {$each: req.body.recipes}
      }
   })

   res.send("user added").end();
}

module.exports = {
   login,
   register,
   getStudent,
   getAllUsers,
   updateStudent
}