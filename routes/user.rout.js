import { Router } from 'express';
import bodyParser from'body-parser';
import Propirty from '../models/propirty.model.js';
import {
 sendMes,
 messages,
} from "../controllers/chat.controller.js";

//import {addcontactusmsg, contactusmsg , getAllMessages }from '../controllers/contactus.controller.js';

import {
  signup,
  validation,
  //logvalidation,
  login,
  checkUN,
  //checkEmail,
  getuser,
  edit,
} from "../controllers/user.controller.js";
import {
  addwishlist,
  navsearch,
  viewproperty,
  profilewishlist,
} from "../controllers/propirty.controller.js";
const router = Router();
router.use(bodyParser.json());

router.get('/register', (req, res) => {
  res.render('pages/register', { errors: [] ,user: (req.session.user === undefined ? "" : req.session.user)});
})
router.get('/propirty', (req, res) => {
  Propirty.find()

  .then(result => {
    var c=(parseInt(result.length/6))+(result.length%6);
    var h=0;
    res.render('pages/All', { Propirty: result,count:c,currentValue:h,  user: (req.session.user === undefined ? "" : req.session.user)});
  })
  .catch(err => {
    console.log(err);
  });
});
router.get('/distrect',(req,res)=>{
  res.render('pages/distrect',{ user: (req.session.user === undefined ? "" : req.session.user)});
})
router.get('/logout',(req,res,next)=>{
  console.log(req.session.user);
  req.session.destroy();
  res.redirect('/');
})
router.post('/signup-action', validation, signup);
router.post('/edit/:id',validation,edit);
router.post('/login-action', login);
router.post('/send-message/:id',sendMes);
router.post('/addtowishlist/:id',addwishlist);
router.get('/search',navsearch);
router.post('/checkUN',checkUN);
//router.post('/checkEmail', checkEmail);
//router.get('/propirty/:id',messages,viewproperty);
router.get('/getMessages',messages);
router.get('/propirty/:id',viewproperty);
router.get('/:id',profilewishlist);
router.get('/edituser/:id',getuser);

// /////////////////////////

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
// ////////////////////

export default router;
