import Contactusmsg from "../models/contactus.model.js";
import { body, validationResult } from "express-validator";
import __dirname from "../app.js"; //

//import fileUpload from "express-fileupload"; //

const contactUsValidation = [
  body("cname").notEmpty().withMessage("Name is required"),
  body("cmail").isEmail().withMessage("Invalid email"),
  body("cphone").isMobilePhone().withMessage("Phone is required"),
  body("cloc").notEmpty().withMessage("Location is required"),
  body("cmes").notEmpty().withMessage("Message is required"),
];

const addcontactusmsg = async (req, res) => {
  // if (flagg > 0) {
  //    return ;
  //  }
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    console.log("YP");
    console.log(
      errors
        .array()
        .map((ele) => ele.msg)
        .join(" ")
    );
    res.render("pages/contactus", {
      message: errors
        .array()
        .map((ele) => ele.msg)
        .join(" - "),
      user: req.session.user === undefined ? "" : req.session.user,
    });
    return res.status(400).end();
  }

  const contactusmsg = new Contactusmsg({
    name: req.body.cname,
    phno: req.body.cphone,
    loc: req.body.cloc,
    email: req.body.cmail,
    ask: req.body.cmes,
  });

  contactusmsg
    .save()
    .then((result) => {
      console.log(result);
      res.redirect("/contactus");
    })
    .catch((err) => {
      console.log(err);
    });
};
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

export { addcontactusmsg, contactUsValidation, getAllMessages };
