const cors = require ("cors");
const {Router} = require("express");
const controller = require("../controllers/mentors.controller");
const {clientLogin} = require("../middleware/loginMentor.middleware")

const router = Router();


// login
router.post('/login', clientLogin, controller.login);

// register
router.post('/register', controller.registerMentor);
router.get("/all", controller.getAllMentors);

// get recipes
// router.get('/recipes')
// router.patch('/recipes')
router.route('/:id')
   .get(controller.getMentor)
   // .get(controller.getAllUsers)
   .patch(controller.updateMentor)
   
module.exports = {
   mentorRouter: router
}