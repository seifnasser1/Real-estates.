import { Router } from 'express';
import User from '../models/user.model.js';
import {
  addprop,
} from "../controllers/propirty.controller.js";
import {
  getalluser, getallusers,
} from "../controllers/user.controller.js";
const router = Router();

/* GET home page. */
router.get('/', getalluser);

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

router.get('/adding', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty',{user: (req.session.user === undefined ? "" : req.session.user)});
});


router.post('/addpropirty', addprop);

router.get('/viewusers', getallusers);
export default router;