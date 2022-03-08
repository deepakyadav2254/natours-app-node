const express = require('express');
const fs = require('fs');
const router = express.Router();

const getAllUsers = (req, res) => {
  res.status(500).json({
    message: 'This route is still being created.',
  });
};

const createUser = (req, res) => {
  res.status(500).json({
    message: 'This route is still being created.',
  });
};
const updateUser = (req, res) => {
  res.status(500).json({
    message: 'This route is still being created.',
  });
};
const getUser = (req, res) => {
  res.status(500).json({
    message: 'This route is still being created.',
  });
};
const deleteUser = (req, res) => {
  res.status(500).json({
    message: 'This route is still being created.',
  });
};
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;
