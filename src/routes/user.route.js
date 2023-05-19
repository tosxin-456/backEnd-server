const {Router} = require("express");
const controller = require("../controllers/user.controller");
const {clientLogin} = require("../middleware/login.middleware")

const router = Router();


// login
router.post('/login', clientLogin, controller.login);

// register
router.post('/register', controller.register);

// get recipes
// router.get('/recipes')
// router.patch('/recipes')
router.route('/:id/users')
   .get(controller.getStudent)
   .patch(controller.updateStudent)
   
module.exports = {
   usersRouter: router
}