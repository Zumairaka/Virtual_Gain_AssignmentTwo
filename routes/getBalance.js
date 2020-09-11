const express = require('express');
const router = express.Router();

router.post('/', async function(req, res, next) {

    var account = req.body.address;
    console.log(account)
    // Get The Balance
    await web3.eth.getBalance(account).then((balance) => {
        console.log(balance);
        balance = web3.utils.fromWei(balance,'ether');
        res.send(balance);
    });
});

module.exports = router;