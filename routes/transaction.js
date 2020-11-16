const transactionRouter = require('express').Router();

const { getTransactions, addTransaction, deleteTransaction } = require('../controller/transaction.ctrl');

// Get all transactions
transactionRouter.route('/transactions').get(getTransactions);

// POST a transaction
transactionRouter.route('/transaction').post(addTransaction);

// DELETE a transaction
transactionRouter.route('/transaction/:id').delete(deleteTransaction);

module.exports = transactionRouter;
