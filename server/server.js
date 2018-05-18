const express = require('express');
const serve = require('express-static');
const morgan = require('morgan');
const path = require('path');
const database = require('./database')

const app = express();
const PORT = 8080;

// Logger
app.use(morgan('dev'));

// Disable caching for API endpoints
app.use('/api', (req, res, next) => {
  res.header('Cache-Control', 'no-cache');
  next();
})

app.get('/api/getUpdates', (req, res) => {
  const offset = req.query.offset && parseInt(req.query.offset, 10)
  const updates = database.get('updates', 'due_at', 10, offset)
  res.json(updates)
});

// Serve static assets in the /public directory
app.use(serve(path.join(__dirname, '../public'), {
  cacheControl: 'no-cache'
}));

app.use((err, req, res, next) => {
  // Handle missing file in public dir as a 404
  if (err.code === 'ENOENT') {
    return res.status(404).send('404 - Page not found');
  }
  res.status(500).send(err);
});

database.init((err) => {
  if (err) {
    throw new Error(err)
  }
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})
