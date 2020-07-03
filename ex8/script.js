/*
    Make a Todo List
    0) Make it so that after entering the task and clicking the "Add Task" button, that new task appears inside the todo-list.
    1) Add the ability to check off tasks by clicking on them - (text-decoration:strikethrough is a nice way to)
    BONUS) Add a functioning "delete" button to each task (HINT: use the keyword "this" in your delete button's click listener! Console log "this" to see what value it holds)
    SUPER BONUS) Make each task editable
*/

var addToDo = function() {

    var todo = document.getElementById("description");
    
    if(todo.value != "") {
        var newToDo = document.createElement('li');
        newToDo.innerHTML = todo.value;
        newToDo.className = "todo-item";

        var newButton = document.createElement('button');
        newButton.innerHTML = "Delete";
        newButton.className = "delete-button";

        newToDo.addEventListener('click', checkTodo);
        newButton.addEventListener('click', deleteToDo);

        todo.value = "";

        var list = document.getElementById('todo-list');
        list.appendChild(newToDo);
        newToDo.appendChild(newButton);
    }
};

var deleteToDo = function() {
    console.log(this);
    this.remove();
}

var checkTodo = function(event) {
    var doneTodo = event.target;
    doneTodo.style.textDecoration = 'line-through';
    console.log(this);
}

var addButton = document.getElementById('add-button');
addButton.addEventListener("click", addToDo);

var items = document.getElementsByClassName('todo-item');

for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', checkTodo);
}
