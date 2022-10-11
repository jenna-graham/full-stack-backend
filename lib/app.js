const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const cors = require('cors');

// Built in middleware
app.use(express.json());
app.use(cookieParser());

// App routes
app.get('/', (req, res) => {
  res.send('Hello Server!');
});
app.use('/api/v1/lists', require('./controllers/lists'));
app.use('/api/v1/users', require('./controllers/users'));
app.use(
  cors({
    origin: [
      'http://localhost:7891',
      'http://127.0.0.1:7891',
    ],
    credentials: true,
  })
);
// Error handling & 404 middleware for when
// a request doesn't match any app routes
app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
