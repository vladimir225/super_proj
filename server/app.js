const express = require('express');
const bodyparser = require('body-parser');
const app = express();

app.use(bodyparser());

app.get('/', function (req, res) {
      res.send('hi');
    });
  

app.listen(4444, function () {
    console.log(`Example app listening on port 4444!`);
  });