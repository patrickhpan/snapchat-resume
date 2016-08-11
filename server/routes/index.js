var router = require('express').Router();

router.get('/a', function(req, res) {
    res.end("Goodbye World!")
})

module.exports = router;