const express = require('express');
const router = express.Router();

// Admin dashboard route
router.get('/dashboard', (req, res) => {
  res.render('admin/dashboard', {
    title: 'Admin Dashboard',
    users: 150,      // Replace with DB logic later
    courses: 30,
    reports: 5
  });
});

module.exports = router;
