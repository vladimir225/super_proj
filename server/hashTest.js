const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = 'qwe';
const someOtherPlaintextPassword = 'not_bacon';

const password = bcrypt.hash(myPlaintextPassword, saltRounds, function(err, hash) {
    // Store hash in your password DB.
    console.log(hash)
    bcrypt.compare(myPlaintextPassword, hash, function(err, res) {
        // res == true
        console.log(res, '====')
    });
});

