const { Router } = require('express');
const authenticate = require('../middleware/authenticate');
const List = require('../models/List');

module.exports = Router().post('/', authenticate, async (req, res, next) => {
  try {
    const data = await List.insert({ user_id: req.user.id, ...req.body });
    res.json(data);
  } catch (e) {
    next(e);
  }
});
