import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.render('register', { user: (req.session.user === undefined ? "" : req.session.user) });
});

export default router;
