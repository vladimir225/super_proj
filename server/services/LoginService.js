const User = require('../models/User')
const config = require('../config/server')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const checkUser = async (newUser) => {
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

module.exports= {
    checkUser
}