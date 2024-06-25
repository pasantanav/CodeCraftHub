const User = require('../models/user');

exports.authenticateUser = async (email, password) => {
  const user = await User.findOne({ email, password });
  if (!user) {
    throw new Error('Invalid credentials');
  }
  return user;
};