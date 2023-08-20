const TodoService = require('../services/todo_services');

exports.createTodo = async (req,res,next)=>{
    try{
        const {userId, title, desc} = req.body;
        let todo = await TodoService.createTodo(userId, title, desc);

        res.json({status: true, success: todo});
        console.log("Task Created Successfully");
    } catch (e){
        res.json({status: false});
        console.log("Task Creating Failed");
    }
}

exports.userAllTodos = async (req,res,next)=>{
    try{
        const {userId} = req.body;
        let todo = await TodoService.userAllTodos(userId);

        res.json({status: true, success: todo});
        console.log("Task's Collected");
    } catch (e){
        res.json({status: false});
        console.log("Not found Tasks");
    }
}

exports.deleteTodo = async (req,res,next) => {
    try {
        const {id} = req.body;
        let deleted = await TodoService.deleteTodo(id);     
        
        res.json({status: true, success: deleted});
        console.log("Deleted Task");
    } catch (e) {
        res.json({status: false});
        console.log("Deleting Task failed");
    }
}

exports.updateTodo = async (req,res,next) => {
    try {
        const {id, title, desc} = req.body;
        let updated = await TodoService.updateTodo(id, title, desc);
        
        res.json({status: true, success: updated});
        console.log("Updated Task");
    } catch (e) {
        res.json({status: false});
        console.log("Updating Task failed");
    }
}
