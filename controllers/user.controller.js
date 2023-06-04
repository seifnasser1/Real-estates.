import User from '../models/user.model.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";

// matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/):
// At least one lowercase letter ((?=.*[a-z])).
// At least one uppercase letter ((?=.*[A-Z])).
// At least one digit ((?=.*\d)).
// At least one special character ((?=.*[@$!%*?&^])).
// Only allows specific characters [A-Za-z\d@$!%*?&^]+.
// Testing valid pass use: S2G^lPokMKau
// Validate signup form

const saltRounds = 10;

const validation = [
  body("username").notEmpty().withMessage("Username is required"),
  body("email").isEmail().withMessage("Invalid email"),
  body("password")
    .isLength({ min: 6 })
    .withMessage("Password must be at least 6 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^])[A-Za-z\d@$!%*?&^]+$/
    )
    .withMessage(
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    ),
  body("confirmPassword")
    .custom((value, { req }) => value === req.body.password)
    .withMessage("Passwords do not match"),
];

const signup = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("pages/register", {
      title: "Signup page - Validation Failed",
      errors: errors.array(),
    });
    return;
  }

  try {
    const hashedPassword = await bcrypt.hash(req.body.password, saltRounds);
    const existingUser = await User.findOne({ username: req.body.username });

    if (existingUser) {
      console.log("Email already exists");
      res.send("Email already exists");
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        type: req.body.type,
        photo: "profile.jpg",
      });

      await newUser.save();

      console.log("User saved successfully");
      res.redirect('/');
    }
  } catch (error) {
    console.log(error);
    res.send("An error occurred");
  }
};

const logvalidation = [
  body("logusername").notEmpty().withMessage("Username is required"),
  body("logpassword").notEmpty().withMessage("password is required"),

];
const login = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.render("pages/register", {
      title: "Signup page - Validation Failed",
      errors: errors.array(),
    });
    return;
  }


};
const getalluser = async (req, res, next) => {

  User.find().then(result => {
    console.log(result);
    res.render('pages/adminHeader', { Users: result });
  }).catch(err => {
    console.log(err);
  });

}
const getallusers = async (req, res, next) => {

  User.find().then(result => {
    console.log(result);
    res.render('pages/adminUser', { Users: result });
  }).catch(err => {
    console.log(err);
  });

}

export {
  signup,
  validation,
  logvalidation,
  login,
  getalluser,
  getallusers,
};