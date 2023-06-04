import { Router } from 'express';
import Propirty from '../models/propirty.model.js';
import User from '../models/user.model.js';
import {
 sendMes
} from "../controllers/chat.controller.js";
import {
  signup,
  validation,
  login,
} from "../controllers/user.controller.js";
import {
  Search,
} from "../controllers/propirty.controller.js";
const router = Router();


router.get('/propirty/:id', (req, res) => {
  var query = { "_id": req.params.id };
  Propirty.find(query)
    .then(result => {
      res.render('pages/villa', { Propirty: result[0] });
    })
    .catch(err => {
      console.log(err);
    });
});

router.get('/register', (req, res) => {
  res.render('pages/register', { errors: [] });
})
router.get('/propirty', (req, res) => {
  Propirty.find()
<<<<<<< HEAD
  .then(result => {
    res.render('pages/All', { Propirty: result,  user: (req.session.user === undefined ? "" : req.session.user)});
  })
  .catch(err => {
    console.log(err);
  });
});


router.get('/:id',(req, res) => {
=======
    .then(result => {
      res.render('pages/All', { Propirty: result });
    })
    .catch(err => {
      console.log(err);
    });
});



router.get('/:id', (req, res) => {
>>>>>>> 795399aa4de35631ffaea11216865ac67cce72f6
  var query = { "_id": req.params.id };
  User.find(query)
    .then(result => {
      console.log(result[0]);
<<<<<<< HEAD
      res.render('pages/profile', { User: result[0] , user: (req.session.user === undefined ? "" : req.session.user)});
=======
      res.render('pages/profile', { User: result[0] });
>>>>>>> 795399aa4de35631ffaea11216865ac67cce72f6
    })
    .catch(err => {
      console.log(err);
    });
});
<<<<<<< HEAD
router.post('/search',Search);
router.post('/signup-action',validation,signup);
router.post('/login-action',login);
export default router ;
=======
router.post('/search', Search);
router.post('/signup-action', validation, signup);
router.post('/login-action', login);
router.post('/send-message',sendMes);
export default router;
>>>>>>> 795399aa4de35631ffaea11216865ac67cce72f6
