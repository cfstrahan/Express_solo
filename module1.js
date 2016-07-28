var router = require('express').Router();

router.get('/', function (request, response) {
  response.send('<iframe width="420" height="315" src="https://www.youtube.com/embed/EVL2HRszxdY" frameborder="0" allowfullscreen></iframe>');
});

module.exports = router;
