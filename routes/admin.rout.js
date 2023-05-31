import { Router } from 'express';
import {
  addprop,
} from "../controllers/propirty.controller.js";
import {
  getalluser,
} from "../controllers/user.controller.js";
const router = Router();

/* GET home page. */
router.get('/', getalluser);

router.get('/adding', function (req, res, next) {
  console.log('index.js: GET /');
  res.render('pages/addpropirty');
});
router.post('/addpropirty', addprop);
export default router;