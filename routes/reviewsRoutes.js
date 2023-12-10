const path = require('path');

const express = require('express');

const reviewsController = require('../controllers/reviewsController');

const router = express.Router();


// Route for fetching expense
// router.get('/expense', expenseController.getExpenses);

// Route for adding a new expense
router.post('/reviewsController/add-review', reviewsController.postAddReview);

//  Route to get all the Expenses
router.get('/reviewsController/get-reviews', reviewsController.getReview);


// router.delete('/Expense/delete-Expense/:id', expenseController.deleteExpenses);

// // Route for editing an existing expense
// router.post('/edit-Expense', expenseController.postEditExpense);

// // Route for deleting an expense
// router.post('/delete-item', expenseController.postCartDeleteExpense);

module.exports = router;