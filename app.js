const path = require('path');
const express = require('express');

const cors = require('cors');

const sequelize = require('./util/database');

const app = express();

// Middleware
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // Add JSON body parsing middleware

// Routes
const reviewsRoutes = require('./routes/reviewsRoutes');

app.use(express.static(path.join(__dirname, 'frontend')));

app.use('/', reviewsRoutes);

// Add a route for testing server status
app.get('/', (req, res) => {
  const indexPath = path.join(__dirname, './frontend/index.html');
  res.sendFile(indexPath);
});

// Database synchronization
sequelize.sync()
  .then(() => {
    console.log('Database synchronized.');
    // Start the server after the database syncs successfully
    app.listen(2500, () => {
      console.log('Server is running on port 2500');
    });    
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });