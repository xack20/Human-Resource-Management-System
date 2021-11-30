const express = require('express');
const router = express.Router();

const { protect, authorize } = require('../middleware/auth');
const {
  getTodos,
  getTodo,
  addTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todos');


router
  .route('/')
  .get(getTodos)
  .post(protect, addTodo);

router
  .route('/:id')
  .get(getTodo)
  .put(protect, updateTodo)
  .delete(protect, authorize(['admin']), deleteTodo);

// router.route('/test/sendmail').get(sendMail)
// router.route('/test/noty').get(startNotify)


module.exports = router;