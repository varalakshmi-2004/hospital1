const express = require('express');
const router = express.Router();
const User = require('../models/User');

router.post('/register', async (req, res) => {
  try {
    const { name, email } = req.body;
    if (!name || !email) return res.status(400).json({ msg: 'Missing fields' });
    let user = await User.findOne({ email });
    if (user) return res.status(400).json({ msg: 'User exists' });
    user = new User({ name, email });
    await user.save();
    res.json(user);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

router.get('/', async (req, res) => {
  try {
    const users = await User.find().limit(50);
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

module.exports = router;
