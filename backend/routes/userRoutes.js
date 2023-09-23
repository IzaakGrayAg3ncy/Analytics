const express = require('express');
const router = express.Router();

router.get('/info', (req, res) => {
  res.json({ username: 'JohnDoe', email: 'john@example.com' });
});

module.exports = router;
