const User = require('../models/User')
const bcrypt = require('bcrypt');

const createUser = (newUser) => {
    console.log(newUser, '===-----==')
    // validate
    // check if username already exist throw error
    // hash password
    // put user to database with hashedpassword
    // return with new user
    const searchUser = User.findOne({raw:true, where: {user: newUser.user}})
    .then((user) => {
      if(!user) {
      bcrypt.hash(newUser.password, 10, function(err, hash) {
        User.create({user: newUser.user, password: hash})
      })
      } else {
        throw new Error('Логин занят')
      }
    })
}

module.exports= {
    createUser  
}