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

router.post('/addprop', function(req, res, next) {
    console.log('index.js: GET /');
    res.render('pages/addpropirty');
  });
router.get('/addpropirty',addprop);
export default router;