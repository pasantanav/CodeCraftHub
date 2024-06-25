const authService = require('../services/authService');

exports.authenticateUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await authService.authenticateUser(email, password);
    req.user = user;
    next();
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};