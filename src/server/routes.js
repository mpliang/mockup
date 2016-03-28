var router = require('express').Router();
var four0four = require('./utils/404')();
var data = require('./data');

router.get('/history', getHistory);
router.get('/*', four0four.notFoundMiddleware);

module.exports = router;

//////////////

function getHistory(req, res, next) {
    res.status(200).send(data.history);
}
