const router = require('express').Router();

const AuthController = require('../controllers/Auth');

router.post('/login', AuthController.login);
router.get('/verify', AuthController.verify);

module.exports = router;
