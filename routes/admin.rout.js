import { Router } from 'express';
import User from '../models/user.model.js';
import {
  addprop,
} from "../controllers/propirty.controller.js";
import {
  getalluser, getallusers,
} from "../controllers/user.controller.js";
const router = Router();

//to check if admin 
//router.use((req, res, next) => {
 // if (req.session.user !== undefined && req.session.user.Type === 'admin') {
      //next();
 //}
 // else {
  //   res.render('pages/err', { err: 'You are not an Admin',user: (req.session.user === undefined ? "" : req.session.user) })
 //}
 //});

/* GET home page. */
router.get ('/', getalluser);
router.get('/deleteuser/:id',(req,res,next)=>{
  console.log(req.params.id)
  User.findByIdAndDelete(req.params.id)
    .then(result => {
        res.redirect('/admin/viewusers');
      })
    .catch(err => {
      console.log(err);
    });
});
router.get('/adding', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty',{user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/viewusers', function (req, res, next) {
  User.find().then(result => {
    console.log(result);
    res.render('pages/AdminUsers', { Users: result,user: (req.session.user === undefined ? "" : req.session.user) });
  })
});

router.get('/header', function (req, res, next) {
  User.find().then(result => {
    console.log(result);
    res.render('pages/AdminHeader', { Users: result,user: (req.session.user === undefined ? "" : req.session.user) });
  })
});

router.post("/admin/makeadmin/:id", (req, res) => {
  const userId = req.params.id;

  // Update the user's role to "admin" and update the name in the "Admin" table in the database
  // Replace this code with your own logic to update the user and the "Admin" table in your database
  User.findByIdAndUpdate(
    userId,
    { role: "admin" },
    { new: true },
    (err, user) => {
      if (err) {
        console.error(err);
        res.redirect("/admin/viewusers"); // Redirect to the view users page or any other error handling
      } else {
        Admin.findOneAndUpdate(
          { username: user.username },
          { name: user.username },
          { new: true },
          (err, admin) => {
            if (err) {
              console.error(err);
              res.redirect("/admin/viewusers"); // Redirect to the view users page or any other error handling
            } else {
              res.redirect("/admin/viewusers"); // Redirect to the view users page after successful update
            }
          }
        );
      }
    }
  );
});

router.get('/chats', function (req, res, next) {
  User.find().then(result => {
    console.log(result);
    res.render('pages/adminChat', { Users: result,user: (req.session.user === undefined ? "" : req.session.user) });
  })
});
router.get('/adding', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty',{user: (req.session.user === undefined ? "" : req.session.user)});
});
router.get('/register', (req, res) => {
  res.redirect('/register');
});



router.post('/addpropirty', addprop);
router.get('/viewusers', getallusers);
export default router;