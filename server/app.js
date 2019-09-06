const config = require('./config/server')
const express = require('express'); 
const bodyparser = require('body-parser');
const cors = require('cors')
const jwt = require('express-jwt');
const RegisterController = require('./controllers/RegisterController');
const LoginController = require('./controllers/LoginController')
const NoteController = require('./controllers/NoteController')
const NotesController = require('./controllers/NotesController')
const dbConnection = require('./db-connection');
const authController = require('./controllers/AuthController')
const app = express();

app.use(bodyparser());
app.use(cors());

app.use('/registr', RegisterController)
app.use('/login', LoginController)
// app.use(authController)
app.use(jwt({ secret: config.secretJWT}))
app.use('/keep', NoteController)
app.use('/keeps', NotesController)


dbConnection.sync().then(result => {
  app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}!`);
  });
});