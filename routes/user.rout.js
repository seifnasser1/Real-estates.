import { Router } from 'express';
import Propirty from '../models/propirty.model.js';
import User from '../models/user.model.js';
import {
 sendMes
} from "../controllers/chat.controller.js";
import {
  signup,
  validation,
  logvalidation,
  login,
} from "../controllers/user.controller.js";
import {
  Search,
  addwishlist,
} from "../controllers/propirty.controller.js";
const router = Router();


router.get('/propirty/:id', (req, res) => {
  var query = { "_id": req.params.id };
  Propirty.find(query)
    .then(result => { 
      console.log(req.session.user) ;
      res.render('pages/villa', { Propirty: result[0] ,user: (req.session.user === undefined ? "" : req.session.user)});
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/register', (req, res) => {
  res.render('pages/register', { errors: [] ,user: (req.session.user === undefined ? "" : req.session.user)});
})
router.get('/propirty', (req, res) => {
  Propirty.find()
  .then(result => {
    res.render('pages/All', { Propirty: result,  user: (req.session.user === undefined ? "" : req.session.user)});
  })
  .catch(err => {
    console.log(err);
  });
});
router.get('/distrect',(req,res)=>{
  res.render('pages/distrect',{ user: (req.session.user === undefined ? "" : req.session.user)});
})
router.get('/:id',(req, res) => {
  var query = { "_id": req.params.id };
  User.find(query)
    .then(result => {
      console.log(result[0]);
      res.render('pages/profile', { User: result[0] , user: (req.session.user === undefined ? "" : req.session.user)});
    })
    .catch(err => {
      console.log(err);
    });
});
router.post('/search', Search);
router.post('/signup-action', validation, signup);
router.post('/login-action',logvalidation, login);
router.post('/send-message',sendMes);
router.post('/addtowishlist',addwishlist);
export default router;
