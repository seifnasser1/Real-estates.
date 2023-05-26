import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/Home');
});
router.get('/contactus', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/contactus');
});
router.get('/register', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/register');
});
router.get('/addpropirty', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty');
});

export default router;