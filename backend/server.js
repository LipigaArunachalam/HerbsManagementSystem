const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/User'); // Import the User model
const Order = require('./models/Order'); // Import the Order model

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/login-app', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected...'))
  .catch(err => console.log('MongoDB connection error:', err));

// Sign up route
app.post('/signup', async (req, res) => {
  const { name, password } = req.body;

  // Validate the request body
  if (!name || !password) {
    return res.status(400).send('Name and password are required');
  }

  // Check if user already exists
  const existingUser = await User.findOne({ name });
  if (existingUser) {
    return res.status(400).send('User already exists');
  }

  const newUser = new User({
    name,
    password,
  });

  try {
    await newUser.save();
    res.status(201).send('User created successfully');
  } catch (err) {
    console.error('Error saving user:', err);
    res.status(500).send('Error saving user');
  }
});

// Login route
app.post('/login', async (req, res) => {
  const { name, password } = req.body;

  // Find user by name and password
  try {
    const user = await User.findOne({ name, password });
    if (user) {
      res.status(200).json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Login failed. Invalid credentials' });
    }
  } catch (err) {
    console.error('Error finding user:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

app.post('/order', async (req, res) => {
  try {
  const {
    customer,
    items,
    totalAmount
  } = req.body;

  // Validate the request body
  if (!customer || !items || !totalAmount) {
    return res.status(400).send('All fields are required');
  }

 
    const newOrder = new Order({
      customerName: customer.name,
      customerNumber: customer.number,
      customerAddress: customer.address,
      paymentMode: customer.paymentMode,
      expectedDelivery: customer.deliveryDate,
      products: items,
      totalAmount: totalAmount,
    });

    await newOrder.save();
    res.status(201).send('Order placed successfully');
  } catch (err) {
    console.error('Error placing order:', err);
    res.status(500).send('Error placing order');
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));