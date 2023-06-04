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
  res.render('pages/addpropirty');
});
router.get('/viewusers', function (req, res, next) {
  User.find().then(result => {
    console.log(result);
    res.render('pages/AdminUsers', { Users: result });
  })
});

router.get('/adding', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty');
});


router.post('/addpropirty', addprop);

router.get('/viewusers', getallusers);
export default router;