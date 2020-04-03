const jwt = require('jsonwebtoken');

const config = require('../config');

class Auth {
  static async login(req, res, next) {
    try {
      const { username } = req.body;
      if (!username) {
        const error = { message: 'username key in body is Required!' };
        throw error;
      }
      const token = jwt.sign({ username }, config.secret);
      return res.status(200).json({
        token
      });
    } catch (error) {
      res.status(error.status || 500).json(error);
    }
  }

  static async verify(req, res) {
    try {
      jwt.verify(req.headers.token, config.secret);
      return res.status(200).json({ message: 'verified' });
    } catch (_err) {
      res.status(401).json({ message: 'Invalid Token' });
    }
  }
}

module.exports = Auth;
