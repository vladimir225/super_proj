const User = require('../models/User')
const bcrypt = require('bcrypt');
const config = require('../config/server')
const jwt = require('jsonwebtoken');

const registerUser = async (newUser) => {
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

const loginUser = async (newUser) => {
  console.log(newUser, '===-----==')
  
  try{
    const searchUser = await User.findOne({raw:true, where: {user: newUser.user}})
    const match = await bcrypt.compare(newUser.password, searchUser.password)
    if(match) {
      const payload = {
        id: searchUser.id,
        username: newUser.user
      }
    const token = jwt.sign(payload, config.secretJWT);
      return JSON.stringify({token})
    } else {
      throw new Error
    }
  } catch {
    return  JSON.stringify('неверно введенные данные')
  }
}

module.exports = {
    registerUser,
    loginUser
  }