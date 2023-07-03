const router = require('express').Router();
const Todo = require('../models/todo');

//routes
router.post('/add/todo', (req, res)=>{
    const {todo} = req.body;
    const newTodo = new Todo ({todo})


//save the todo
  newTodo.save()
   .then(()=>{
    console.log('sucessfully added Todo!');
    res.redirect('/');
   })

   .catch((err) =>{
    console.error('error')
   })
});

module.exports = router;