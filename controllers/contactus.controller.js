import Contactusmsg from "../models/contactus.model.js";
import { body, validationResult } from "express-validator";
import __dirname from "../app.js"; //
const nodeMailer = require('nodemailer')

const contactUsValidation = [
  body("cname").notEmpty().withMessage("Name is required"),
  body("cmail").isEmail().withMessage("Invalid email"),
  body("cphone").isMobilePhone().withMessage("Phone is required"),
  body("cloc").notEmpty().withMessage("Location is required"),
  body("cmes").notEmpty().withMessage("Message is required"),
];

const addcontactusmsg = async (req, res) => {
////////////////////////////
require(dotenv).config()


const transporter = await nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.PASSWORD,
  }

});
console.log(user);

const EMAIL="zainabrafea03@gmail.com";
const mailOption = {
  // from: process.env.GMAIL_USER,
  // to: process.env.EMAIL,
  // subject: subject,
  user: req.session.user._id



  // html: `You got a message from
  // Email : ${email}
  // Name: ${name}
  // Message: ${message}`
  // ,
};
try {
  await transporter.sendMail(mailOption);
  return Promise.resolve("Message Sent Successfully!");
} catch (error) {
  return Promise.reject(error);
}
}

  /////////////////////////////////
  const errors = validationResult(req);

  // if (!errors.isEmpty()) {
  //   console.log("YP");
  //   console.log(
  //     errors
  //       .array()
  //       .map((ele) => ele.msg)
  //       .join(" ")
  //   );
  //   res.render("pages/contactus", {
  //     message: errors
  //       .array()
  //       .map((ele) => ele.msg)
  //       .join(" - "),
  //     user: req.session.user === undefined ? "" : req.session.user,
  //   });
  //   return res.status(400).end();
  // }

  const contactusmsg = new Contactusmsg({
    cname: req.body.cname,
    cphone: req.body.cphone,
    cloc: req.body.cloc,
    cmail: req.body.cmail,
    cmes: req.body.cmes,
  });

  // contactusmsg
  //   .save()
  //   .then((result) => {
  //     console.log(result);
  //     res.redirect("/contactus");
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });
//};
const getAllMessages = async (req, res) => {
  // also it needs pagination, in case of it get bigger
  Contactusmsg.find({})
    .then((results) => {
      // res.render("")
    })
    .catch((error) => {
      console.log(error);
    });
};

// app.post('/contact', async (req, res, next) => {
//   const { cname, cmail, cphone, cloc,cmes } = req.body;
//   try {
//     await sendMail(cname, cmail, cphone, cloc,cmes);
//   }
//   catch (error) {
//     res.send("Message Could not be Sent");
//   }
//   res.send("Message Succssfully Sent!");
// });



export { addcontactusmsg, contactUsValidation, getAllMessages };
