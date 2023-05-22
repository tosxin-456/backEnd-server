const {z} = require("zod");

const loginValidator = z.object({
   email: z.string(),
   password: z.string()
});

const registerValidator = z.object({
   firstname: z.string(),
   lastname: z.string(),
   role: z.enum(['student', "mentor"])
}).and(loginValidator);

const getUserValidator = z.object({
   id: z.string().length(24)
});

// const updateUserValidator = z.object({
//    User: recipeValidator.array()
// }).and(getUserValidator);


module.exports = {
   loginValidator,
   registerValidator,
   getUserValidator,
   // updateUserValidator
};