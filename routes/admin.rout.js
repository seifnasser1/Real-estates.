import { Router } from 'express';
import User from '../models/user.model.js';
import { addprop ,deleteprop } from "../controllers/propirty.controller.js";
import { getalluser, getallusers, makeAdmin } from "../controllers/user.controller.js";
import { viewprop } from "../controllers/propirty.controller.js";
const router = Router();

// router.use((req, res, next) => {
//   if (req.session.user !== undefined && req.session.user.Type === 'admin') {
//       next();
//   }
//   else {
//       res.render('err', { err: 'You are not an Admin',user: (req.session.user === undefined ? "" : req.session.user) })
//   }
// });

router.get('/', getalluser);
router.get('/delprop/:id',deleteprop);
router.get('/deleteuser/:id', (req, res, next) => {
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
  res.render('pages/addpropirty', { user: (req.session.user === undefined ? "" : req.session.user) });
});

router.get('/viewusers', function (req, res, next) {
  const query={"type":'client'};
  User.find(query).then(result => {
    console.log(result);
    res.render('pages/AdminUsers', { Users: result, user: (req.session.user === undefined ? "" : req.session.user) });
  });
});

router.get('/viewadmins', (req, res) => {
  const query={"type":'admin'};
  User.find(query).then(result=>{
    console.log(result);
    res.render('pages/admins',{ admins : result ,user: (req.session.user === undefined ? "" : req.session.user) })
  })
});


router.post("/makeadmin/:id", makeAdmin);
router.post('/makeuser/:id',(req,res,next)=>{
  User.findByIdAndUpdate(req.params.id, { type: 'client' })
      .then(result => {
          res.redirect('/admin/viewadmins');
      })
      .catch(err => {
          console.log(err);
      });
})
router.get('/chats', function (req, res, next) {
  User.find().then(result => {
    console.log(result);
    res.render('pages/adminChat', { Users: result, user: (req.session.user === undefined ? "" : req.session.user) });
  });
});

router.get('/register', (req, res) => {
  res.redirect('/register');
});
router.get('/Top',(req,res)=>{
  res.render('pages/TopProperties', { user: (req.session.user === undefined ? "" : req.session.user) });
})
router.post('/addpropirty', addprop);
router.get('/prop',viewprop);
router.get('/viewusers', getallusers);

export default router;
