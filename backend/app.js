const express = require('express');
const app = express();
const port = 3000;

const userRoutes = require('./routes/userRoutes');
const analyticsRoutes = require('./routes/analyticsRoutes');

app.use('/user', userRoutes);
app.use('/analytics', analyticsRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
