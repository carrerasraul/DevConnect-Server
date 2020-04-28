const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

const app = express();

app.use(cors());

// CORS HEADERS
app.use((req, res, next) => {
  // Controls which domains should have access
  res.setHeader('Access-Control-Allow-Origin', '*');
  // Controls which headers incoming requests may have, so they are handled
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept, Authorization'
  );
  // Controls which HTTP methods may be used on the front end
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

  next();
});

// Connect Database
connectDB();

// Init Middleware
app.use(
  express.json({
    extended: false,
  })
);

// Define routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
