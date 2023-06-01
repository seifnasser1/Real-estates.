import { Router } from 'express';
import {
    addprop,
  } from "../controllers/propirty.controller.js";
  
const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/adminHeader');
});

router.get('/adding', function(req, res, next) {
    console.log('index.js: GET /');
    res.render('pages/addpropirty');
  });
router.post('/addpropirty',addprop);
export default router;// to move all this codes in this file to app.js  and then import the routes in app.js