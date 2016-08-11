var router = require('express').Router();

var index = require('./routes/index');

router.use('/', index);

module.exports = router;