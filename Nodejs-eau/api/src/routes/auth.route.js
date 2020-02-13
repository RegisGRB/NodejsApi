const express = require('express');
const router = express.Router();
const user = require('../controller/auth.controller');

router.post('/auth/register',user.create);
router.post('/auth/login',user.login);

//router.post('/auth/logout',logout.create);
module.exports = router;