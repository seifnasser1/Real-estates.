import { Router } from 'express';

const router = Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/Home');
});

router.get('/aboutus', function(req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/aboutus');
});

export default router;