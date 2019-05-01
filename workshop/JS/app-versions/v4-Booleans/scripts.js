//alert ("this just awesome");
//var todoList = {

  /**
   * MY ARRAY
   * -----------------------------*/
//   todos: [
//     {
//       textTodo:"First",
//       completed: false
//     },
//     {
//       textTodo:"Second",
//       completed: false
//     },
//     {
//       textTodo:"Third",
//       completed: false
//     },
//     {
//       textTodo:"Fourth",
//       completed: true
//     },
  
//   ], // inside and object an array close with comma not with semi column.
  

//    /**
//    * Display todos
//    * -----------------------------*/

//     displayTodos: function () {
//     console.log (this.todos);
//   },

//    /**
//    * mY TODOS LIST
//    * -----------------------------*/
//   addTodo: function (text) {
//     this.todos.push (text);
//     this.displayTodos ();
//   },
//     changeTodo: function (index, text) {
//     this.todos[index ] = text;
//     this.displayTodos ();
//   },
//   deleteTodo: function (index) {
//     this.todos.splice (index, 1);
//     this.displayTodos ();
//   }

// };
//todoList.addTodo ("forth");
//todoList.changeTodo (2, "this my change");
//todoList.deleteTodo (1);
//todoList.displayTodos (); // INSTED OF CONSOLE LOG THIS WORKS 
//console.log (todoList.todos);
//console.log (todoList.todos[2].textTodo);
//console.log (todoList.todos[2].completed);
//console.log (todoList.todos[2].textTodo, todoList.todos[2].completed);
//------OR-----
//var myItem = todoList.todos[2];
//console.log (myItem.textTodo, myItem.completed);
// --------OR----------
//var myItem = todoList.todos[3];
//var showItem = '( ' + myItem.completed +' ) ' + myItem.textTodo ;
//console.log ( showItem);

var weather = 'cloudy'; // rain, sun
  if(weather == 'snow') {
  console.log ("Take my ski");
  }
  else if(weather == 'rain'){
    console.log ("Take Umbrella");
  }
  else if(weather == 'cloudy'){
    console.log ("Stay at home");
  }
  else {
    console.log ("Its Not raining");
  } 
//----------------------------------

//-------Booleans----------
var n = 1;
var bool = true;
// in compare we check if n and bool are matching.

// == test for equality
// === test for equality and dada type.

var compare = (n == bool); // if use () (n==bool) we can 2 == also but it will be less strict 
// example ------
// 3 == '3' // this is gonna be true
// 3 === '3' // this will be false 
console.log(compare);