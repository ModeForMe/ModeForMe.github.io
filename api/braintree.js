var braintree = require("braintree");
var server = require("../server.js");

var gateway = braintree.connect({
  environment: braintree.Environment.Sandbox,
  merchantId: process.env.MERCHANTID,
  publicKey: process.env.PUBLICKEY,
  privateKey: process.env.PRIVATEKEY
});

module.exports = {

    getClientToken: function getClientToken (callback) {
        gateway.clientToken.generate({}, function (err, response) {
            if (err) {
              callback(err, null);
            } else {
              callback(null, response.clientToken);
            }
        });
    },

    makeSale: function makeSale (callback) {
        var amount = '10.00';
        gateway.transaction.sale({
            amount: amount,
            paymentMethodNonce: 'fake-valid-nonce',
        }, function (err, result) {
            if (err) {
                callback(err, null);
            } else {
                callback(null, response);
            }
        });
    }

};
