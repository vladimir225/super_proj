const User = require('../models/User')
const bcrypt = require('bcrypt');
const config = require('../config/server')
const jwt = require('jsonwebtoken');

const registerUser = async (newUser) => {
    const searchUser = await User.findOne({raw:true, where: {user: newUser.user}})
    if (!searchUser) {
      const hash = await bcrypt.hash(newUser.password, 10)
      const createUser = await User.create({user: newUser.user, password: hash},{ raw: true })
      delete createUser.password
      return createUser
    } else {
      throw new Error('login is already taken')
    }
}

const loginUser = async (newUser) => {
  const searchUser = await User.findOne({raw:true, where: {user: newUser.user}})
  if (searchUser === null) {
    throw new Error('no such user')
  }
  const match = await bcrypt.compare(newUser.password, searchUser.password)
  if (match) {
    const payload = {
      id: searchUser.id,
      username: newUser.user
    }
    const token = jwt.sign(payload, config.secretJWT);
      return {token}
  } else {
    throw new Error('Wrong password')
  }
}

module.exports = {
    registerUser,
    loginUser
  }