var express = require('express');
var router = express.Router();
var db = require('../db');

function fetchTodos(req, res, next) {
  db.all('SELECT rowid AS id, * FROM todos', [], function(err, rows) {
    if (err) { return next(err); }
    
    var todos = rows.map(function(row) {
      return {
        title: row.title,
        completed: row.completed == 1 ? true : false,
        url: '/' + row.id
      }
    });
    res.locals.todos = todos;
    res.locals.activeCount = todos.filter(function(todo) { return !todo.completed; }).length;
    res.locals.completedCount = todos.length - res.locals.activeCount;
    next();
  });
}

/* GET home page. */
router.get('/', fetchTodos, function(req, res, next) {
  res.render('index');
});

module.exports = router;
