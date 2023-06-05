import { Router } from 'express';
import Propirty from '../models/propirty.model.js';
import {
 sendMes,
 messages,
} from "../controllers/chat.controller.js";

import {
  signup,
  validation,
  //logvalidation,
  login,
  checkUN,
  checkEmail,
} from "../controllers/user.controller.js";
import {
  addwishlist,
  navsearch,
  viewproperty,
  profilewishlist,
} from "../controllers/propirty.controller.js";
const router = Router();


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
router.post('/login-action', login);
router.post('/send-message/:id',sendMes);
router.post('/addtowishlist/:id',addwishlist);
router.get('/search',navsearch);
router.post('/checkUN',checkUN);
router.post('/checkEmail', checkEmail);
//router.get('/propirty/:id',messages,viewproperty);
router.get('/getMessages',messages);
router.get('/propirty/:id',viewproperty);
router.get('/:id',profilewishlist);

export default router;


