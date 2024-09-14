require('dotenv').config();

const express = require('express');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const currencyRoutes = require('./routes/currencyRoutes');
const languageRoutes = require('./routes/languageRoutes');
const shippingRoutes = require('./routes/shippingRoutes');
const taxRoutes = require('./routes/taxRoutes');

// Initialize express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Register routes
app.use('/api/products', productRoutes);
app.use('/api/currency', currencyRoutes);
app.use('/api/language', languageRoutes);
app.use('/api/shipping', shippingRoutes);
app.use('/api/tax', taxRoutes);

// Listen on the specified port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
