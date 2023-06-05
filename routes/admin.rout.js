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