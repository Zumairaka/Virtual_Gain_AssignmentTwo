const express = require('express');
const { default: Web3 } = require('web3');
const router = express.Router();

// tranfering the amount
router.post('/', async function(req, res, next) {
    var toAccount = req.body.toAccount;
    var fromAccount = req.body.fromAccount;
    amount = req.body.amount;

    web3.eth.getAccounts().then(async (accounts) => {

        // same account not allowed
        if (toAccount != fromAccount) {
        
            await contract.methods.fundTransfer(fromAccount, toAccount).send({from: fromAccount, gas:6000000, 
                value: web3.utils.toWei(amount, 'ether')}).on('transactionHash', (hash) => {
                    res.send('Transfer Successful');
                }).on((error) => {
                    res.send(error.message);
                });
        }
        else {
            res.render('index', {accounts} );
        }
    });
});

module.exports = router;