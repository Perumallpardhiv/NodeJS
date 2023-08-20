const router = require("express").Router();
const TodoContoller = require('../controller/todo_controller');

router.post('/createTodo', TodoContoller.createTodo);
router.post('/getUserallTodoList', TodoContoller.userAllTodos);
router.post('/deleteTodo', TodoContoller.deleteTodo);
router.post('/updateTodo', TodoContoller.updateTodo);

module.exports = router;
