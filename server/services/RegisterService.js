const User = require('../models/User')
const bcrypt = require('bcrypt');

const createUser = async (newUser) => {
    console.log(newUser, '===-----==')
    const searchUser = await User.findOne({raw:true, where: {user: newUser.user}})
      if(!searchUser) {
      bcrypt.hash(newUser.password, 10, function(err, hash) {
        User.create({user: newUser.user, password: hash})
      })
      return newUser
      } else {
        throw new Error('Логин занят')  
      }
}

module.exports= {
    createUser  
}