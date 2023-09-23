const express = require('express');
const router = express.Router();

// Sample route to get analytics data
router.get('/data', (req, res) => {
  res.json({
    pageViews: 1200,
    userCount: 350,
    bounceRate: 0.5
  });
});

module.exports = router;