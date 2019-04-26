// creating an object array
var todoList = {
  /*TODOS ARRAY
  ----------------------------*/
  todos: [
    {
      text: "First Item",
      completed: false, //we can use or not comma 
    },
    {
      text: "Second Item",
      completed: false, 
    },
    {
      text: "Third Item",
      completed: true, 
    }
  ],
  /*DISPLAY TODO
  ----------------------------*/
  displayTodos: function () {
    console.log(this.todos);
  },
  addTodo: function(text) {
    this.todos.push({
      todoText: text,
      completed: false
    });
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo("this is item4");


/*
function displayTodos() {
  console.log (todos);
}
/*ADD TODO*/
/*
function addTOdo (text) {
  todos.push (text);
  displayTodos ();
}
/*MY CHANGE TODOS*/
/*
function changeTodo (index, text) {
  todos[index] = text;
  displayTodos ();
  
}
/*MY DELETE TODOS*/
/*
function deleteTodo (index) {
  todos.splice (index, 1);
  displayTodos ();
}
/*CALLING STUFF*/
// displayTodos (todos);
// addTOdo ("Fourth");
// addTOdo ("Fifth");
// changeTodo (3, 'greenpages');
// changeTodo (1, 'halloworld');
// deleteTodo (1);
/*var myObj = {
  name: "wais",
  dog: false,
  cat: true,
} */

