const express = require('express');

const app = express.Router();
const TodoTask = require("../models/todoschema");

// get all todo items in the db
app.get("/", (req, res) => {
    TodoTask.find({}, (err, tasks) => {
        res.render("todo.ejs", { todoTask: tasks });
    });
});

// add a todo item
app.post('/', async(req, res) => {
    const todoTask = new TodoTask({
        content: req.body.content
    });
    try {
        await todoTask.save();
        res.redirect("/");
    } catch (err) {
        res.redirect("/");
    }
});

// delete a todo item
app.route("/remove/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndRemove(id, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});
app.route("/update/:id").get((req, res) => {
    const id = req.params.id;
    TodoTask.findByIdAndUpdate(id, { done: true }, err => {
        if (err) return res.send(500, err);
        res.redirect("/");
    });
});

module.exports = app;