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


router.get('/viewAll', (req, res) => {
  
  Propirty.find()
    .then(result => {
      res.render('pages/properties', { Propirty: result});
    })
    .catch(err => {
      console.log(err);
    });
  
  
});

export default router;