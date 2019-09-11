const config = require('./config/server')
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors')
const jwt = require('express-jwt');
const NoteController = require('./controllers/NoteController')
const dbConnection = require('./db-connection');
const AuthController = require('./controllers/AuthController')
const app = express();

app.use(bodyparser());
app.use(cors());

app.use('/auth', AuthController)
// app.use(authController)
app.use(jwt({ secret: config.secretJWT }))
app.use('/note', NoteController)

dbConnection.sync().then(result => {
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}!`);
  });
});
