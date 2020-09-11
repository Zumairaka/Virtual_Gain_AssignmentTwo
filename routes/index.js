var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', async function(req, res, next) {

  //get Accounts
  await web3.eth.getAccounts().then((accounts) => {
    res.render('index', {accounts});
  });
});

module.exports = router;
