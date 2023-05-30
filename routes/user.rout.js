import { Router } from 'express';
import Propirty from '../models/propirty.model.js';
import {
  signup,
  validation,
  login,
} from "../controllers/user.controller.js";
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/Home');
});
router.get('/propirty/:id', (req, res) => {
  var query = { "_id": req.params.id };
  Propirty.find(query)
    .then(result => {
      res.render('pages/villa', { Propirty: result[0]});
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/register',(req, res) =>{
  res.render('pages/register',{ errors: [] });
})
router.get('/propirty', (req, res) => {
  
  Propirty.find()
  .then(result => {
    res.render('pages/All', { Propirty: result});
  })
  .catch(err => {
    console.log(err);
  });
  
  
});
router.post('/signup-action',validation,signup);
router.post('/login-action',login);
export default router ;