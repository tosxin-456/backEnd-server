const {z} = require("zod");

const loginValidator = z.object({
   email: z.string(),
   password: z.string()
});

const registerValidator = z.object({
   firstname: z.string(),
   lastname: z.string()
}).and(loginValidator);

const getMentorValidator = z.object({
   id: z.string().length(24)
});

// const updateUserValidator = z.object({
//    User: recipeValidator.array()
// }).and(getUserValidator);


module.exports = {
   loginValidator,
   registerValidator,
   getMentorValidator,
   // updateUserValidator
};